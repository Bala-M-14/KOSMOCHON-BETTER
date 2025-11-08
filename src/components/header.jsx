import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { cartstore } from "../cart-store";

export default function Header() {
      const count = cartstore((state) => state.cart.length); 
  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-2">
        <div>
          <Link to="/" className="font-[Brush Script MT] text-4xl text-yellow-400">
            Koshmochon
          </Link>
          <p className="text-sm text-gray-300">Premium Fashion</p>
        </div>

        <div className="flex items-center gap-6 text-2xl">
          
          <Link to="/cart" className="relative hover:text-yellow-400 transition-colors" aria-label="View cart">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-3 bg-yellow-500 text-black text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
              {count}
            </span>
          </Link>

          
          <Link to="/login" className="hover:text-yellow-400 transition-colors" aria-label="Login">
            <User size={24} />
          </Link>
        </div>
      </div>

      <nav className="bg-gray-800">
        <ul className="flex justify-center gap-8 py-3 text-gray-200 text-lg">
          <li><Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
          <li><Link to="/products" className="hover:text-yellow-400 transition-colors">Products</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
