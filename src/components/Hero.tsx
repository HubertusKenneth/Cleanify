import { Sparkles } from 'lucide-react';
import Logo from "../assets/cleanify-logo.png"; 

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        <div className="mb-8 flex justify-center animate-rotateIn opacity-0" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-[3px] border-emerald-500 bg-white shadow-xl flex items-center justify-center">
              <img
                src={Logo}
                alt="Cleanify Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
                style={{
                  transform: "translate(-2%, -7%)", 
                }}
              />

              <Sparkles
                className="absolute -top-2 -right-2 w-7 h-7 text-yellow-400 animate-pulse"
                style={{
                  filter: "drop-shadow(0 0 5px rgba(255, 215, 50, 0.8))",
                }}
              />
            </div>
          </div>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fadeInUp opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Cleanify
          </span>
        </h1>

        <p
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8 font-light animate-fadeInUp opacity-0"
          style={{ animationDelay: '0.5s' }}
        >
          Your On-the-Go Hygiene Solution
        </p>

        <p
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4 animate-fadeInUp opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          A practical and effective sanitizer solution that protects you from germs and bacteria wherever you go.
          Compact, portable, and perfect for maintaining cleanliness in your daily life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#product"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-200 animate-scaleIn opacity-0"
            style={{ animationDelay: '0.7s' }}
          >
            Discover Our Product
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200 animate-scaleIn opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
