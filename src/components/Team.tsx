import { Users, GraduationCap } from 'lucide-react';
import Hubertus from "../assets/Hubertus.jpeg";
import Vyone from "../assets/Vyone.jpeg";
import Clarissa from "../assets/Clarissa.jpeg";

export default function Team() {
  const team = [
    {
      name: 'Hubertus Kenneth Alfragisa',
      role: 'Chief Executive Officer (CEO)',
      // id: '2702214514',
      image: Hubertus,
    },
    {
      name: 'Vyone Louis',
      role: 'Chief Operating Officer (COO)',
      // id: '2702212452',
      image: Vyone,
    },
    {
      name: 'Clarissa Clementia',
      role: 'Chief Marketing Officer (CMO)',
      // id: '2702218393',
      image: Clarissa,
    },
    {
      name: 'Jonathan Tristan Aditya',
      role: 'Chief Financial Officer (CFO)',
      // id: '2702255501',
      image: '/profile-jonathan.png',
    },
    {
      name: 'Jason Julius Then',
      role: 'Chief Technology Officer (CTO)',
      // id: '2702322172',
      image: '/profile-jason.png',
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-emerald-100"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center min-h-[56px] flex items-center justify-center">
                {member.name}
              </h3>

              <p className="text-emerald-600 font-semibold text-center mb-2 min-h-[48px] flex items-center justify-center">
                {member.role}
              </p>

              {/* ID */}
              {/* <p className="text-gray-500 text-sm text-center">{member.id}</p> */}
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
                Cleanify was founded as part of the <span className="font-semibold">Entrepreneurship</span> course at Bina Nusantara University.  
                Our diverse team combines expertise in <span className="font-semibold">business, operations, marketing, finance,</span> and <span className="font-semibold">technology</span>  
                to deliver innovative solutions promoting cleanliness and hygiene across Indonesia.
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
