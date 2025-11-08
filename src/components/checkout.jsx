import { Link } from "react-router-dom";
import { cartstore } from "../cart-store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CheckoutPage() {
  const cartItems = cartstore((state) => state.cart);
  const total = cartItems
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  
 const schema = z.object({
  name: z.string().min(2, "Enter a valid name"),
  email: z.email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zip: z.string().min(4, "ZIP Code is required"),
});

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    console.log("Form Data Submitted: ", data);
    alert("✅ Order placed successfully!");
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Checkout
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          <form onSubmit={handleSubmit(submitData)} className="space-y-5">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Billing Details
            </h3>

            <div>
              <input
                type="text"
                {...register("name")}
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                {...register("phone")}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                {...register("address")}
                placeholder="Street Address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  {...register("city")}
                  placeholder="City"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  {...register("zip")}
                  placeholder="ZIP Code"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400"
                />
                {errors.zip && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.zip.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg transition-colors"
            >
              Place Order
            </button>
          </form>

          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Order Summary
            </h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity || 1}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-800">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </p>
                </div>
              ))}

              <div className="flex justify-between items-center text-lg font-bold pt-3">
                <span>Total</span>
                <span className="text-yellow-600">${total}</span>
              </div>
            </div>

            <Link
              to="/cart"
              className="block text-center text-blue-500 hover:underline mt-4"
            >
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
