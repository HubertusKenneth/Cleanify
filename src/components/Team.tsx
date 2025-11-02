import { Users, GraduationCap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Hubertus from "../assets/Hubertus.jpeg";
import Vyone from "../assets/Vyone.jpeg";
import Clarissa from "../assets/Clarissa.jpeg";
import Jonathan from "../assets/Jonathan.jpg";

export default function Team() {
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

  const team = [
    {
      name: 'Hubertus Kenneth Alfragisa',
      role: 'Chief Executive Officer (CEO)',
      image: Hubertus,
    },
    {
      name: 'Vyone Louis',
      role: 'Chief Operating Officer (COO)',
      image: Vyone,
    },
    {
      name: 'Clarissa Clementia',
      role: 'Chief Marketing Officer (CMO)',
      image: Clarissa,
    },
    {
      name: 'Jonathan Tristan Aditya',
      role: 'Chief Financial Officer (CFO)',
      image: Jonathan,
    },
    {
      name: 'Jason Julius Then',
      role: 'Chief Technology Officer (CTO)',
      image: '/profile-jason.png',
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-600">Team</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate students from Bina Nusantara University behind Cleanify
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-1000 transform hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 scale-100 rotate-0'
                  : 'opacity-0 scale-90 -rotate-3'
              }`}
              // style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="mb-6 relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-emerald-100 overflow-hidden shadow-md">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transition-transform duration-300
                        ${
                          member.name === 'Clarissa Clementia'
                            ? 'object-[center_10%]'
                            : member.name === 'Jonathan Tristan Aditya'
                            ? 'object-[center_40%]'
                            : 'object-center'
                        }
                      `}
                      style={
                        member.name === 'Jonathan Tristan Aditya'
                          ? { transform: 'scale(1.35)' }
                          : {}
                      }
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[56px] flex items-center justify-center">
                {member.name}
              </h3>

              <p className="text-emerald-600 font-semibold text-center mb-2 min-h-[48px] flex items-center justify-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>
            <div className="relative p-10 md:p-16 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shadow-lg backdrop-blur-md">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                From <span className="text-emerald-100">Bina Nusantara University</span>
              </h3>
              <p className="text-emerald-50 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6">
                Cleanify was founded as part of the{' '}
                <span className="font-semibold">Entrepreneurship</span> course at Bina Nusantara University.  
                Our diverse team combines expertise in{' '}
                <span className="font-semibold">
                  business, operations, marketing, finance,
                </span>{' '}
                and <span className="font-semibold">technology</span> to deliver innovative
                solutions promoting cleanliness and hygiene across Indonesia.
              </p>
              <div className="mt-6">
                <a
                  href="https://binus.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Learn More About BINUS →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
