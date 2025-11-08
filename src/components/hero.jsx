import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section
      className="h-[50vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center bg-black/60 bg-blend-overlay"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <h2 className="text-5xl font-extrabold text-yellow-400 drop-shadow-md">
        Summer Collection 2025
      </h2>
      <p className="text-lg mt-3 text-gray-200">
        Up to 40% Off on Selected Items
      </p>
      <Link to="/Products"
        
        className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-lg shadow-lg transition-all"
      >
        Shop Now
      </Link>
    </section>
  );
}
