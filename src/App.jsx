import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Hero from "./components/hero";
import Collections from "./components/collections";
import Highlights from "./components/highlights";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import AboutPage from "./components/Aboutus";
import ContactPage from "./components/Contact";
import Products from "./components/Products";
import CartPage from "./components/cart";
import LoginPage from "./components/login";
import Checkoutpage from "./components/checkout";
import "./index.css";

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Hero />
              <Collections />
              <Highlights />
              <Testimonials />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout" element={<Checkoutpage />} />
      </Routes>
      <Footer />
    </div>
  );
}
