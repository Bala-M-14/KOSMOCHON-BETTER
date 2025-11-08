
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, Award, Heart, TrendingUp, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      
      <main>
        
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-4">About Koshmochon</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted destination for premium fashion and lifestyle products since 2020
            </p>
          </div>
        </section>

        
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2020, Koshmochon started with a simple vision: to bring premium fashion and lifestyle products to everyone. What began as a small boutique in Chennai has grown into a beloved brand known for quality and style.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We believe that shopping should be more than just a transaction—it's an experience. That's why we carefully curate every product in our collection, ensuring it meets our high standards of quality, design, and value.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to serve thousands of satisfied customers across India, helping them express their unique style and personality through our diverse range of products.
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <ShoppingBag size={150} className="text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-3">Our Values</h3>
              <p className="text-gray-600">What drives us every day</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={40} className="text-gray-900" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Quality First</h4>
                <p className="text-gray-600">
                  We never compromise on quality. Every product is carefully selected and tested to ensure it meets our high standards.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={40} className="text-gray-900" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Customer Love</h4>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. Your satisfaction and happiness are our top priorities.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={40} className="text-gray-900" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Trust & Integrity</h4>
                <p className="text-gray-600">
                  We believe in transparency and honesty. What you see is what you get—no hidden fees, no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">5+</div>
                <p className="text-gray-300">Years in Business</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">10K+</div>
                <p className="text-gray-300">Happy Customers</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
                <p className="text-gray-300">Products</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-yellow-400 mb-2">98%</div>
                <p className="text-gray-300">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-3">Why Choose Koshmochon?</h3>
              <p className="text-gray-600">Experience the difference</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                  <TrendingUp size={24} className="text-gray-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">Trending Collections</h4>
                  <p className="text-gray-600">
                    Stay ahead of fashion with our constantly updated collection of trending styles and designs.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                  <Shield size={24} className="text-gray-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">Secure Shopping</h4>
                  <p className="text-gray-600">
                    Shop with confidence knowing your data is protected with industry-standard security measures.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                  <Users size={24} className="text-gray-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">Expert Team</h4>
                  <p className="text-gray-600">
                    Our knowledgeable team is always ready to help you find exactly what you're looking for.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-lg flex-shrink-0">
                  <Award size={24} className="text-gray-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">Premium Quality</h4>
                  <p className="text-gray-600">
                    Every product undergoes strict quality checks to ensure you receive only the best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-yellow-400 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Koshmochon?</h3>
            <p className="text-gray-800 mb-8 text-lg">
              Join thousands of satisfied customers and discover your perfect style today
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/" 
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Shop Now
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
}