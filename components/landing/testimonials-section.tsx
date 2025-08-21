export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "Tech Startup",
      image: "👨‍💼",
      text: "Premium App helped us launch our website in just 2 days. The templates are amazing and support is excellent!"
    },
    {
      name: "Priya Singh", 
      company: "E-commerce Store",
      image: "👩‍💼",
      text: "Our online sales increased by 300% after switching to Premium App. The hosting is super fast and reliable."
    },
    {
      name: "Amit Patel",
      company: "Digital Agency", 
      image: "👨‍💻",
      text: "We manage 50+ client websites on Premium App. The dashboard is intuitive and the uptime is incredible."
    }
  ]

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Premium App
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors duration-300">
              <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
