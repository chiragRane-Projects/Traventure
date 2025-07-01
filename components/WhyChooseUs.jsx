"use client";

import React from 'react';
import { Card } from './ui/card';
import { Globe, Mountain, Calendar } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      name: 'Lot Of Choices',
      desc: 'Total 500+ destinations that we work with',
      icon: <Globe className="w-6 h-6 text-sky-500" />,
    },
    {
      id: 2,
      name: 'Best Tour Guide',
      desc: 'Our tour guide with 10+ years of experience',
      icon: <Mountain className="w-6 h-6 text-green-600" />,
    },
    {
      id: 3,
      name: 'Easy Booking',
      desc: 'With an easy and fast ticket purchase process',
      icon: <Calendar className="w-6 h-6 text-gray-700" />,
    },
  ];

  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Top Value From Us For You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Try a variety of benefits when using our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feat) => (
            <Card
              key={feat.id}
              className="rounded-xl shadow-md p-6 flex flex-col items-start text-left hover:shadow-xl transition duration-300"
            >
              <div className="mb-2">{feat.icon}</div>
              <h3 className="text-xl font-semibold">{feat.name}</h3>
              <p className="text-gray-600 text-sm">{feat.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;