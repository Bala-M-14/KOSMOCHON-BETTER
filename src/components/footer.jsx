import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="grid md:grid-cols-4 gap-10 px-8">
        <div>
          <h3 className="text-lg font-bold text-yellow-500 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/About" className="hover:text-white">About Us</Link></li>
            <li><Link to="/Product"  className="hover:text-white">Products</Link></li>
            <li><Link to="/Contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-yellow-500 mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
            <li><a href="#" className="hover:text-white">Size Guide</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-yellow-500 mb-3">Contact Us</h3>
          <p><i className="fas fa-map-marker-alt mr-2"></i>123, H-Block 5th Street, Anna Nagar, Chennai</p>
          <p><i className="fas fa-phone mr-2"></i>+91 9182736450</p>
          <p><i className="fas fa-envelope mr-2"></i>koshmochon@mensfashion.com</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-yellow-500 mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com" className="hover:text-yellow-400"><i className="fab fa-facebook"></i></a>
            <a href="https://instagram.com" className="hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com" className="hover:text-yellow-400"><i className="fab fa-twitter"></i></a>
            <a href="https://pinterest.com" className="hover:text-yellow-400"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; 2025 Koshmochon Store. All rights reserved.
      </div>
    </footer>
  );
}
