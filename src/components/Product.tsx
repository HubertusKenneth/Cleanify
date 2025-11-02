import { Droplet, Sparkles, Package, CheckCircle, Leaf, Shield, Zap, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import productimg from "../assets/Cleanify.png";

export default function Product() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
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
    'Lasts up to 1 month with 250 uses',
    'Easy to carry in bags or pockets',
  ];

  return (
    <section
      id="product"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Product</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Cleanify Pocket Sanitizer Spray - Your portable protection against germs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 relative">
          <div
            className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-8 left-10 w-12 h-12 bg-emerald-300 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute bottom-12 right-10 w-8 h-8 bg-teal-400 rounded-full opacity-40 animate-bounce"></div>
              <div className="absolute top-20 right-20 w-20 h-20 bg-emerald-200 rounded-full blur-xl opacity-40 animate-float"></div>
              <div className="absolute bottom-20 left-16 w-14 h-14 bg-teal-300 rounded-full blur-lg opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

              <Shield className="absolute text-white opacity-15 top-8 right-12 w-16 h-16 animate-float" style={{ animationDelay: '0.5s' }} />
              <Zap className="absolute text-yellow-300 opacity-20 bottom-8 left-12 w-12 h-12 animate-bounce" style={{ animationDelay: '1s' }} />
              <Leaf className="absolute text-white opacity-20 top-14 left-1/2 transform -translate-x-1/2 rotate-12 w-24 h-24 animate-float" />
              <Leaf className="absolute text-white opacity-15 bottom-20 right-1/4 transform rotate-45 w-16 h-16 animate-float" style={{ animationDelay: '0.7s' }} />
              <Heart className="absolute text-pink-200 opacity-25 top-1/3 left-8 w-10 h-10 animate-pulse" style={{ animationDelay: '1.5s' }} />

              <div className="bg-white rounded-2xl p-8 md:p-12 text-center relative z-10 shadow-inner">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-50/30 to-teal-50/30"></div>
                <div className="relative inline-block">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>

                  <img
                    src={productimg}
                    alt="Cleanify Product"
                    className="relative w-48 md:w-56 mx-auto object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 pointer-events-none">
                    <Sparkles className="absolute -top-2 -right-2 text-emerald-400 w-10 h-10 animate-sparkleSpin drop-shadow-lg" />
                    <Sparkles className="absolute -bottom-2 -left-2 text-teal-400 w-7 h-7 animate-sparklePulse drop-shadow-lg" />
                    <Sparkles className="absolute top-10 -left-4 text-emerald-300 w-6 h-6 animate-sparkleFloat drop-shadow-md" />
                    <Sparkles className="absolute bottom-12 -right-4 text-yellow-400 w-8 h-8 animate-sparkleOrbit drop-shadow-lg" />
                    <Sparkles className="absolute top-1/2 left-0 text-teal-300 w-5 h-5 animate-sparkleFloat drop-shadow-md" style={{ animationDelay: '1s' }} />
                    <Sparkles className="absolute top-1/3 -right-6 text-emerald-400 w-6 h-6 animate-sparklePulse drop-shadow-md" style={{ animationDelay: '1.5s' }} />
                  </div>

                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
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
                    className={`flex items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
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
                    className={`flex items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                    style={{ transitionDelay: `${900 + index * 100}ms` }}
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
          className={`bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Perfect For
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['Students', 'Office Workers', 'Travelers', 'Health-Conscious Individuals'].map(
              (audience, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${900 + index * 100}ms` }}
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
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.9; }
          50% { transform: translateY(-8px) rotate(5deg); opacity: 1; }
        }
        @keyframes sparkleOrbit {
          0% { transform: rotate(0deg) translateX(8px) rotate(0deg); opacity: 0.8; }
          50% { transform: rotate(180deg) translateX(8px) rotate(-180deg); opacity: 1; }
          100% { transform: rotate(360deg) translateX(8px) rotate(-360deg); opacity: 0.8; }
        }
        .animate-sparkleSpin { animation: sparkleSpin 5s linear infinite; }
        .animate-sparklePulse { animation: sparklePulse 2s ease-in-out infinite; }
        .animate-sparkleFloat { animation: sparkleFloat 3s ease-in-out infinite; }
        .animate-sparkleOrbit { animation: sparkleOrbit 4s linear infinite; }
      `}</style>
    </section>
  );
}
