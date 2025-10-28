import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { planId: string } }
) {
  try {
    const plan = await prisma.plan.findUnique({
      where: {
        id: params.planId,
      },
    });

    if (!plan) {
      return new NextResponse('Plan not found', { status: 404 });
    }

    return NextResponse.json(plan);
  } catch (error) {
    console.error('[PLAN_GET]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
