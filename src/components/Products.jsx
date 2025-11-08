import React, { useEffect, useState } from "react";
import { cartstore } from "../cart-store";



export default function Products() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(9);
  const addtocart = cartstore((state) => state.addtocart);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [limit]); 

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">All Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-8">
        {products.length > 0 ? (
          products.map((p) => (
            <div
              key={p.id}
              className="bg-gray-50 hover:bg-gray-100 transition-all shadow-lg rounded-xl p-4 border border-gray-200 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={p.image}
                alt={p.title}
                className="rounded-md h-60 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-3 text-gray-800">
                {p.title.length > 30 ? p.title.slice(0, 30) + "..." : p.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{p.category}</p>
              <p className="text-lg font-bold text-yellow-600 mt-2">${p.price}</p>
              <button
  onClick={() => addtocart(p)}
  className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg active:scale-95 transition-transform"
>
  Add to Cart
</button>

            </div>
          ))
        ) : (
          <p className="col-span-full text-gray-500">Loading products...</p>
        )}
      </div>

      <button
        onClick={() => setLimit(limit + 6)}
        className="block mx-auto text-yellow-500 text-2xl mt-10 font-bold hover:underline"
      >
        Explore more products...
      </button>
    </section>
  );
}
