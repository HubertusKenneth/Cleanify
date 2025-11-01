import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 -mt-10">
            Get In <span className="text-emerald-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our products? We'd love to hear from you!
          </p>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 via-white to-teal-50 rounded-3xl shadow-md p-10 md:p-14">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Contact Information
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                <p className="text-gray-600">
                Tangerang, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">cleanify.labs@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Instagram className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Instagram</h4>
                <p className="text-gray-600">@cleanify.labs</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                <p className="text-gray-600">Available for inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
