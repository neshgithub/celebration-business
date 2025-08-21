import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { planId } = await req.json();

    if (!planId) {
      return new NextResponse('Missing planId', { status: 400 });
    }

    const userPlan = await prisma.userPlan.create({
      data: {
        userId: session.user.id,
        planId,
        status: 'ACTIVE',
      },
    });

    return NextResponse.json(userPlan);
  } catch (error) {
    console.error('[USER_PLAN_POST]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
