import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { cartstore } from "../cart-store";
import Products from "./Products";

export default function CartPage() {
  const cartItems = cartstore((state) => state.cart);
  const removeCartItem = cartstore((state) => state.removecartitem);
  const clearCart = cartstore((state) => state.clearcart);

  const total = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
).toFixed(2);


  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Shopping Cart
            </h2>
          </div>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center max-w-2xl mx-auto">
              <div className="mb-6">
                <ShoppingCart
                  size={80}
                  className="mx-auto text-red-500"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Looks like you haven’t added any items to your cart yet. Browse
                our collection and find something you love!
              </p>
              <Link
                to="/products"
                className="inline-block bg-blue-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    
                    <span className="px-4">{item.quantity}</span>

                    <button
                      onClick={() => removeCartItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-blue-600">${total}</span>
                </div>
                <button
                  onClick={clearCart}
                  className="w-full mt-4 bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition-colors"
                >
                  Clear Cart
                </button>
                <Link to="/checkout"
  className="block w-full mt-4 bg-yellow-500 text-center text-black py-3 rounded-md font-bold hover:bg-yellow-600 transition-colors">
  Checkout Now
</Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
