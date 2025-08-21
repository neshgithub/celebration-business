import { PrismaClient, PlanType, UserRole, PaymentMethod, PaymentStatus, ReceiptStatus } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Create plans
  const basicPlan = await prisma.plan.upsert({
    where: { name: 'Basic' },
    update: {},
    create: {
      name: 'Basic',
      type: PlanType.BASIC,
      description: 'Perfect for getting started',
      features: [
        '1 Website Creation',
        '2 GB Storage',
        'Basic Templates',
        'Email Support',
        'SSL Certificate',
      ],
      price: 999.00,
      currency: 'INR',
      isActive: true,
    },
  })

  const premiumPlan = await prisma.plan.upsert({
    where: { name: 'Premium' },
    update: {},
    create: {
      name: 'Premium',
      type: PlanType.PREMIUM,
      description: 'Most popular for growing businesses',
      features: [
        '5 Website Creations',
        '10 GB Storage',
        'Premium Templates',
        'Priority Support',
        'Custom Domain',
        'Analytics Dashboard',
        'SEO Tools',
      ],
      price: 2499.00,
      currency: 'INR',
      isActive: true,
    },
  })

  const luxuryPlan = await prisma.plan.upsert({
    where: { name: 'Luxury' },
    update: {},
    create: {
      name: 'Luxury',
      type: PlanType.LUXURY,
      description: 'Enterprise solution with advanced features',
      features: [
        'Unlimited Websites',
        '100 GB Storage',
        'All Premium Templates',
        '24/7 Phone Support',
        'Multiple Custom Domains',
        'Advanced Analytics',
        'White-label Solution',
        'API Access',
        'Priority Development',
      ],
      price: 4999.00,
      currency: 'INR',
      isActive: true,
    },
  })

  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      role: UserRole.ADMIN,
      emailVerified: new Date(),
    },
  })

  // Create test users
  const testUser1 = await prisma.user.upsert({
    where: { email: 'john@example.com' },
    update: {},
    create: {
      name: 'John Doe',
      email: 'john@example.com',
      role: UserRole.USER,
      emailVerified: new Date(),
    },
  })

  const testUser2 = await prisma.user.upsert({
    where: { email: 'jane@example.com' },
    update: {},
    create: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: UserRole.USER,
      emailVerified: new Date(),
    },
  })

  // Create user plans
  const userPlan1 = await prisma.userPlan.upsert({
    where: {
      userId_planId_status: {
        userId: testUser1.id,
        planId: premiumPlan.id,
        status: 'ACTIVE',
      },
    },
    update: {},
    create: {
      userId: testUser1.id,
      planId: premiumPlan.id,
      status: 'ACTIVE',
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
    },
  })

  const userPlan2 = await prisma.userPlan.upsert({
    where: {
      userId_planId_status: {
        userId: testUser2.id,
        planId: basicPlan.id,
        status: 'ACTIVE',
      },
    },
    update: {},
    create: {
      userId: testUser2.id,
      planId: basicPlan.id,
      status: 'ACTIVE',
      startDate: new Date(),
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year from now
    },
  })

  // Create sample payments
  const payment1 = await prisma.payment.create({
    data: {
      userId: testUser1.id,
      planId: premiumPlan.id,
      amount: 2499.00,
      currency: 'INR',
      method: PaymentMethod.UPI,
      status: PaymentStatus.COMPLETED,
      transactionId: 'TXN_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      paymentGatewayId: 'PAY_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      metadata: {
        upiId: 'john@paytm',
        paymentApp: 'Paytm',
      },
      processedAt: new Date(),
    },
  })

  const payment2 = await prisma.payment.create({
    data: {
      userId: testUser2.id,
      planId: basicPlan.id,
      amount: 999.00,
      currency: 'INR',
      method: PaymentMethod.CARD,
      status: PaymentStatus.COMPLETED,
      transactionId: 'TXN_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      paymentGatewayId: 'PAY_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      metadata: {
        cardLast4: '1234',
        cardType: 'Visa',
        bankName: 'HDFC Bank',
      },
      processedAt: new Date(),
    },
  })

  // Create receipts
  const receipt1 = await prisma.receipt.create({
    data: {
      receiptNumber: 'RCP_' + Date.now().toString() + '_001',
      userId: testUser1.id,
      paymentId: payment1.id,
      amount: 2499.00,
      currency: 'INR',
      status: ReceiptStatus.SENT,
      emailSent: true,
      smsSent: false,
      sentAt: new Date(),
    },
  })

  const receipt2 = await prisma.receipt.create({
    data: {
      receiptNumber: 'RCP_' + Date.now().toString() + '_002',
      userId: testUser2.id,
      paymentId: payment2.id,
      amount: 999.00,
      currency: 'INR',
      status: ReceiptStatus.SENT,
      emailSent: true,
      smsSent: false,
      sentAt: new Date(),
    },
  })

  // Create sample activities
  await prisma.activity.createMany({
    data: [
      {
        userId: testUser1.id,
        action: 'LOGIN',
        description: 'User logged in successfully',
        ipAddress: '192.168.1.100',
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      {
        userId: testUser1.id,
        action: 'PAYMENT_SUCCESS',
        description: 'Payment completed for Premium plan',
        metadata: {
          paymentId: payment1.id,
          amount: 2499.00,
          method: 'UPI',
        },
      },
      {
        userId: testUser2.id,
        action: 'PLAN_ACTIVATED',
        description: 'Basic plan activated',
        metadata: {
          planId: basicPlan.id,
          planName: 'Basic',
        },
      },
    ],
  })

  // Create system configuration
  await prisma.systemConfig.createMany({
    data: [
      {
        key: 'PAYMENT_GATEWAY_ENABLED',
        value: 'true',
        category: 'payment',
      },
      {
        key: 'EMAIL_NOTIFICATIONS_ENABLED',
        value: 'true',
        category: 'email',
      },
      {
        key: 'SMS_NOTIFICATIONS_ENABLED',
        value: 'false',
        category: 'sms',
      },
      {
        key: 'MAX_RETRY_ATTEMPTS',
        value: '3',
        category: 'payment',
      },
      {
        key: 'RECEIPT_TEMPLATE_VERSION',
        value: 'v2',
        category: 'receipt',
      },
    ],
  })

  console.log('✅ Database has been seeded successfully!')
  console.log('📊 Created data:')
  console.log(`- Plans: ${3}`)
  console.log(`- Users: ${3} (1 admin, 2 regular users)`)
  console.log(`- User Plans: ${2}`)
  console.log(`- Payments: ${2}`)
  console.log(`- Receipts: ${2}`)
  console.log(`- Activities: ${3}`)
  console.log(`- System Config: ${5}`)
  console.log('')
  console.log('🔐 Admin credentials:')
  console.log('Email: admin@example.com')
  console.log('Password: admin123')
  console.log('')
  console.log('👤 Test user credentials:')
  console.log('Email: john@example.com (Premium plan)')
  console.log('Email: jane@example.com (Basic plan)')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Error during seed:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
