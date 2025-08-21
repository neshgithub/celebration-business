import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { planId, amount, method } = await req.json();

    if (!planId || !amount || !method) {
      return new NextResponse('Missing fields', { status: 400 });
    }

    // Simulate payment processing
    const isSuccess = Math.random() > 0.2; // 80% success rate

    const payment = await prisma.payment.create({
      data: {
        userId: session.user.id,
        planId,
        amount,
        method,
        status: isSuccess ? 'COMPLETED' : 'FAILED',
        transactionId: `txn_${Date.now()}`,
      },
    });

    if (isSuccess) {
      // Create a receipt
      const receipt = await prisma.receipt.create({
        data: {
          userId: session.user.id,
          paymentId: payment.id,
          receiptNumber: `receipt_${Date.now()}`,
          amount: payment.amount,
          currency: payment.currency,
        },
      });

      // Send receipt email
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: session.user.email!,
        subject: 'Payment Receipt',
        html: `<div>
          <h1>Payment Receipt</h1>
          <p>Thank you for your payment of ${payment.amount} ${payment.currency}.</p>
          <p>Receipt Number: ${receipt.receiptNumber}</p>
        </div>`,
      });

      // Send admin notification
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: process.env.ADMIN_EMAIL!,
        subject: 'New Payment Received',
        html: `<div>
          <h1>New Payment Received</h1>
          <p>User ${session.user.email} just made a payment of ${payment.amount} ${payment.currency}.</p>
          <p>Payment ID: ${payment.id}</p>
        </div>`,
      });

      return NextResponse.json({ success: true, payment });
    } else {
      return NextResponse.json({ success: false, payment });
    }
  } catch (error) {
    console.error('[PAYMENT_PROCESS_POST]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
