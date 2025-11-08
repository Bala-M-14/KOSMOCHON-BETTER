import { Link } from 'react-router-dom'
import { Package, Star, Globe } from 'lucide-react'

export default function Collections(){
  const categories = [
    { title: 'New Arrivals', desc: 'Latest trends curated weekly', link: '/products' },
    { title: 'Best Sellers', desc: 'Fan favorites and top-rated picks', link: '/products' },
    { title: 'Accessories', desc: 'Complete your look', link: '/products' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Collections</h2>
        <p className="text-gray-600 mb-10">Shop by category — handpicked styles to match your vibe.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((c) => (
            <Link to={c.link} key={c.title} className="block bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-400 text-gray-900 mx-auto mb-4">
                <Package />
              </div>
              <h3 className="font-semibold text-lg">{c.title}</h3>
              <p className="text-gray-500 mt-2">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
