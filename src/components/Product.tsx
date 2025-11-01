import { Droplet, Sparkles, Package, CheckCircle, Leaf } from 'lucide-react';
import productimg from "../assets/Cleanify.png";

export default function Product() {
  const ingredients = [
    '70% Alcohol - Effective disinfectant',
    'Peach Essential Oil - Natural fragrance & antibacterial',
    'Purified Water - Safe and gentle',
  ];

  const benefits = [
    'Kills 99.9% of bacteria and germs',
    'Safe for various surfaces (phone, door handles, tables, toilet seats)',
    'Compact 18ml pocket sprayer design',
    'Natural peach scent',
    'Lasts up to 1 month with 45 uses',
    'Easy to carry in bags or pockets',
  ];

  return (
    <section
      id="product"
      className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeInDown opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Our <span className="text-emerald-600">Product</span>
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6 animate-scaleIn opacity-0"
            style={{ animationDelay: '0.3s' }}
          ></div>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            Cleanify Pocket Sanitizer Spray - Your portable protection against germs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 relative">
          <div
            className="relative animate-fadeInLeft opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-8 left-10 w-10 h-10 bg-emerald-300 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute bottom-12 right-10 w-6 h-6 bg-teal-400 rounded-full opacity-40 animate-bounce"></div>
              <div className="absolute top-20 right-20 w-16 h-16 bg-emerald-200 rounded-full blur-xl opacity-40 animate-float"></div>

              <Leaf className="absolute text-white opacity-20 top-12 left-1/2 transform -translate-x-1/2 rotate-12 w-20 h-20" />
              <Leaf className="absolute text-white opacity-20 bottom-16 right-1/3 transform rotate-45 w-14 h-14" />

              <div className="bg-white rounded-2xl p-8 md:p-12 text-center relative z-10">
                <div className="relative inline-block">
                  <img
                    src={productimg}
                    alt="Cleanify Product"
                    className="w-48 md:w-56 mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 pointer-events-none">
                    <Sparkles className="absolute top-0 right-0 text-emerald-400 w-8 h-8 animate-sparkleSpin" />
                    <Sparkles className="absolute bottom-0 left-2 text-teal-400 w-6 h-6 animate-sparklePulse" />
                    <Sparkles className="absolute top-8 left-10 text-emerald-300 w-5 h-5 animate-sparkleFloat" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="animate-fadeInRight opacity-0"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Droplet className="w-8 h-8 text-emerald-600 mr-3" />
                Key Ingredients
              </h3>
              <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-start animate-fadeInUp opacity-0"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-8 h-8 text-emerald-600 mr-3" />
                Product Benefits
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start animate-fadeInUp opacity-0"
                    style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fadeInUp opacity-0"
          style={{ animationDelay: '1.5s' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Perfect For
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['Students', 'Office Workers', 'Travelers', 'Health-Conscious Individuals'].map(
              (audience, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 animate-scaleIn opacity-0"
                  style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-800 font-semibold text-lg">{audience}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sparkleSpin {
          0% { transform: rotate(0deg) scale(1); opacity: 0.9; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 1; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.9; }
        }
        @keyframes sparklePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(-6px); opacity: 1; }
        }
        .animate-sparkleSpin { animation: sparkleSpin 6s linear infinite; }
        .animate-sparklePulse { animation: sparklePulse 2s ease-in-out infinite; }
        .animate-sparkleFloat { animation: sparkleFloat 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
