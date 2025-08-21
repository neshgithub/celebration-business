export function PlansSection() {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      period: "/month",
      description: "Perfect for getting started",
      features: [
        "1 Website Creation",
        "2 GB Storage", 
        "Basic Templates",
        "Email Support",
        "SSL Certificate"
      ],
      popular: false,
      color: "from-gray-500 to-gray-700",
      bgColor: "bg-white"
    },
    {
      name: "Premium",
      price: "₹2,499",
      period: "/month", 
      description: "Most popular choice",
      features: [
        "5 Website Creations",
        "10 GB Storage",
        "Premium Templates", 
        "Priority Support",
        "Custom Domain",
        "Analytics Dashboard",
        "SEO Tools"
      ],
      popular: true,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50"
    },
    {
      name: "Luxury",
      price: "₹4,999",
      period: "/month",
      description: "For enterprises",
      features: [
        "Unlimited Websites",
        "100 GB Storage",
        "All Premium Templates",
        "24/7 Phone Support", 
        "Multiple Domains",
        "Advanced Analytics",
        "White-label Solution",
        "API Access"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-white"
    }
  ]

  return (
    <section id="plans" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey with the right plan. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${plan.popular ? 'border-4 border-blue-500 scale-105 z-10' : 'border border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm px-6 py-2 rounded-full font-bold shadow-lg">
                  🔥 MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-4">
                  <span className={`text-6xl font-black bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-xl">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10 min-h-[280px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 text-xl mt-1 flex-shrink-0">✓</span>
                    <span className="leading-6">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800'
              }`}>
                {plan.popular ? '🚀 Get Started Now' : 'Choose This Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8">Trusted by 1000+ businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">Amazon</div>
            <div className="text-2xl font-bold text-gray-400">Meta</div>
            <div className="text-2xl font-bold text-gray-400">Apple</div>
          </div>
        </div>
      </div>
    </section>
  )
}
