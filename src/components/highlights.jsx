import { Truck, Award, Lock } from 'lucide-react'

export default function Highlights(){
  const items = [
    { icon: <Truck />, title: 'Free Shipping', desc: 'On orders over ₹999' },
    { icon: <Award />, title: 'Premium Quality', desc: 'Handpicked materials' },
    { icon: <Lock />, title: 'Secure Payments', desc: 'Trusted and encrypted' },
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-yellow-400 mx-auto w-12 h-12 flex items-center justify-center rounded-full mb-3">{it.icon}</div>
              <h4 className="font-semibold">{it.title}</h4>
              <p className="text-gray-500">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
