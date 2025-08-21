export function ServicesSection() {
  const services = [
    {
      title: "🎨 Premium Templates",
      description: "Professional, responsive templates for every industry"
    },
    {
      title: "🚀 Fast Hosting",
      description: "Lightning-fast servers with 99.9% uptime guarantee"
    },
    {
      title: "🔒 SSL Security",
      description: "Enterprise-grade security for all your websites"
    },
    {
      title: "📱 Mobile Ready",
      description: "All websites are fully responsive and mobile-optimized"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Everything you need to succeed online</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
