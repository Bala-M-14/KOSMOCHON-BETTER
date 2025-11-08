
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
         
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Get In Touch</h2>
            <p className="text-gray-600 text-lg">We'd love to hear from you. Reach out to us through any of these channels!</p>
          </div>

          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-gray-900" size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Visit Us</h3>
              <p className="text-gray-600 text-sm">123, H-Block 5th Street<br />Anna Nagar, Chennai</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-gray-900" size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Call Us</h3>
              <p className="text-gray-600 text-sm">+91 98765 43210<br />+91 98765 43211</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-gray-900" size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Email Us</h3>
              <p className="text-gray-600 text-sm">info@koshmochon.com<br />support@koshmochon.com</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-gray-900" size={32} />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">Working Hours</h3>
              <p className="text-gray-600 text-sm">Mon - Sat: 9 AM - 8 PM<br />Sunday: 10 AM - 6 PM</p>
            </div>
          </div>

          
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                    
                  <MapPin size={48} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500">Map Location</p>
                </div>
              </div>
            </div>

            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Koshmochon?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-2 rounded-lg mt-1">
                    <MessageCircle className="text-gray-900" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">24/7 Customer Support</h4>
                    <p className="text-gray-600 text-sm">Our dedicated team is always ready to assist you with any queries or concerns.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-2 rounded-lg mt-1">
                    <Mail className="text-gray-900" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Quick Response Time</h4>
                    <p className="text-gray-600 text-sm">We aim to respond to all emails within 24 hours on business days.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-400 p-2 rounded-lg mt-1">
                    <MapPin className="text-gray-900" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Visit Our Store</h4>
                    <p className="text-gray-600 text-sm">Experience our premium collection in person at our Anna Nagar location.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                    f
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                    𝕏
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                    in
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                    IG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">&copy; 2025 Koshmochon Store. All rights reserved.</p>
          <p className="text-gray-400">123, H-Block 5th Street, Anna Nagar, Chennai</p>
        </div>
      </footer>
    </div>
  );
}