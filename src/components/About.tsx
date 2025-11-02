import { Shield, Leaf, Zap, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Effective Protection',
      description: 'Eliminates up to 99.9% of bacteria and germs on surfaces',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Made with natural ingredients that are safe for the environment',
    },
    {
      icon: Zap,
      title: 'Compact & Portable',
      description: '18ml pocket-sized design, perfect for carrying anywhere',
    },
    {
      icon: Heart,
      title: 'Health Focused',
      description: 'Supporting SDG 3 for good health and well-being',
    },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [volume, setVolume] = useState(0);
  const [uses, setUses] = useState(0);
  const [duration, setDuration] = useState(0);

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
      { threshold: 0.3 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const durationMs = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / durationMs, 1);
      setVolume(Math.floor(progress * 18));
      setUses(Math.floor(progress * 250));
      setDuration(Math.floor(progress * 30));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-emerald-600">Cleanify</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cleanify is a student-led initiative from Bina Nusantara University, created to address the low awareness
            of cleanliness and hygiene in Indonesian society. We provide practical, effective sanitizer products that
            help prevent disease transmission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl transform transition-all duration-700 hover:scale-110 hover:shadow-2xl
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mb-6 shadow-lg transition-transform duration-150 hover:scale-125 hover:shadow-xl">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white transition-all duration-1000 hover:shadow-2xl hover:shadow-emerald-500/50
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{volume}ml</div>
              <div className="text-emerald-100">Compact Volume</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{uses}</div>
              <div className="text-emerald-100">Uses Per Bottle</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{duration >= 30 ? '1 Month' : `${duration} Days`}</div>
              <div className="text-emerald-100">Duration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
