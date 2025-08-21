'use client'

import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Build
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              {" "}Amazing{" "}
            </span>
            Websites
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            🚀 Create stunning, professional websites with our premium templates and hosting solutions. 
            Start your online journey today with our powerful tools and succeed online!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              href="#plans"
              className="btn-primary text-lg px-12 py-4 shadow-2xl"
            >
              🎯 View Plans & Pricing
            </Link>
            <Link 
              href="#demo"
              className="btn-secondary text-lg px-12 py-4 border-white text-white hover:bg-white hover:text-blue-600"
            >
              ✨ See Live Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm opacity-75">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-sm opacity-75">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-75">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
