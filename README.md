# 🚀 Premium App - Next.js Website Builder

A full-stack Next.js 14 application with authentication, payments, receipts, and admin functionality.

![Premium App Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=Premium+App+Homepage)

## ✨ Features

### 🎨 **Premium UI/UX**
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion  
- Accessible components with Radix UI
- Dark mode support
- Mobile-first approach

### 🔐 **Authentication & Security**
- NextAuth v4 with Google OAuth + Credentials
- JWT tokens for session management
- Route protection with middleware
- Role-based access (User, Admin)
- Password security with bcrypt

### 💳 **Payment System**
- Multiple payment methods (UPI, Card, Net Banking, QR)
- UPI QR code generation (NPCI-compliant)
- Payment state management with retry logic
- Webhook integration
- Mock gateway for testing

### 🧾 **Receipt Management**
- Automatic PDF & HTML receipt generation
- Email/SMS delivery system
- Template system for customization
- Resend functionality
- Admin receipt management

### 📊 **Plans & Subscriptions**
- Three-tier system (Basic, Premium, Luxury)
- Plan-based feature gates
- Upgrade/downgrade functionality
- Usage tracking and analytics

### 👨‍💼 **Admin Dashboard**
- User management and analytics
- Payment monitoring
- System health checks
- Activity logs and audit trails

## 🛠 Tech Stack

### **Frontend**
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Framer Motion** for animations
- **React Hook Form** for forms

### **Backend**
- **Next.js API Routes** (serverless)
- **Prisma ORM** with PostgreSQL
- **NextAuth** for authentication
- **Pino** for structured logging
- **Zod** for validation

### **Database**
- **PostgreSQL** with optimized schema
- **Prisma** for type-safe database access
- **Comprehensive indexing** for performance
- **Audit trails** and activity logging

### **Testing & Quality**
- **Vitest** for unit testing
- **React Testing Library** for components
- **ESLint & Prettier** for code quality
- **TypeScript** for type checking

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.0 or higher
- PostgreSQL database
- npm or yarn

### 1. Clone & Install