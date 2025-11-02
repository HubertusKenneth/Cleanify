import { Target, Eye, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SDG3 from "../assets/sdg3.png";
import SDG11 from "../assets/sdg11.jpg";

export default function Mission() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const missionPoints = [
    'Develop disinfectant products with safe and clinically tested formulations',
    'Prioritize effective and practical products for daily use by all communities',
    'Provide effective products at affordable prices',
    'Implement eco-friendly production processes and products',
    'Increase Indonesian awareness of the importance of maintaining cleanliness and hygiene',
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-24 md:py-36 bg-gradient-to-b from-white to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Vision & <span className="text-emerald-600">Mission</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Guiding our journey towards a cleaner, healthier, and more sustainable future.
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Our Vision */}
          <div
            className={`group bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-10 md:p-14 text-white shadow-2xl hover:shadow-emerald-300/40 transition-all duration-1000 transform hover:-translate-y-2 hover:shadow-2xl ${
              isVisible
                ? 'opacity-100 translate-x-0 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-150">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Our Vision</h3>
            </div>
            <p className="text-lg leading-relaxed text-emerald-50">
              To become a pioneer in raising awareness and sensitivity of Indonesian society towards cleanliness
              and hygiene, in line with SDG 3, through practical, effective, and environmentally friendly disinfectant
              product solutions that are safe to use.
            </p>
          </div>

          {/* Our Mission */}
          <div
            className={`group bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-10 md:p-14 shadow-xl hover:shadow-emerald-200 transition-all duration-1000 transform hover:-translate-y-2 hover:shadow-2xl ${
              isVisible
                ? 'opacity-100 translate-x-0 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-150">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Our Mission</h3>
            </div>
            <ul className="space-y-5">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 text-sm font-bold text-white shadow-md">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SDG Section */}
        <div
          className={`bg-gradient-to-br from-white to-emerald-100 rounded-3xl p-10 md:p-14 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
              Supporting Sustainable Development Goals
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl">
              Cleanify actively contributes to the United Nations Sustainable Development Goals,
              particularly{' '}
              <span className="font-semibold text-emerald-700">
                SDG 3 (Good Health and Well-being)
              </span>{' '}
              and{' '}
              <span className="font-semibold text-emerald-700">
                SDG 11 (Sustainable Cities and Communities)
              </span>
              , promoting cleanliness, health, and sustainable living for all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div
              className={`flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl hover:scale-105 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <img
                src={SDG3}
                alt="SDG 3"
                className="w-28 h-28 mb-4 object-contain transition-transform duration-150 hover:scale-110"
              />
              <h4 className="text-xl font-bold text-emerald-700 mb-2">
                SDG 3: Good Health and Well-being
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Cleanify supports SDG 3 by creating disinfectant products that improve public health,
                reduce illness risks, and promote daily hygiene awareness across Indonesia.
              </p>
            </div>

            <div
              className={`flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl hover:scale-105 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <img
                src={SDG11}
                alt="SDG 11"
                className="w-28 h-28 mb-4 object-contain transition-transform duration-150 hover:scale-110"
              />
              <h4 className="text-xl font-bold text-teal-700 mb-2">
                SDG 11: Sustainable Cities and Communities
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Through environmentally friendly formulations and packaging, Cleanify contributes to
                building sustainable and resilient communities that prioritize cleanliness and health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
