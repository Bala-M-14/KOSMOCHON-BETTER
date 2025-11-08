export default function Testimonials(){
  const reviews = [
    { name: 'Anita R.', text: 'Love the fabric quality and speed of delivery. Will buy again!' },
    { name: 'Rahul S.', text: 'Excellent customer service and the fit was perfect.' },
    { name: 'Priya M.', text: 'Beautiful packaging and product matched the photos.' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">What customers say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <blockquote key={r.name} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">"{r.text}"</p>
              <footer className="mt-4 font-semibold">— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
