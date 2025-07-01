import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="px-4 py-16">
      <div className="text-center">
        <h2 className="text-4xl mb-3 md:text-5xl font-semibold">
          Subscribe To Get The Latest News About Us
        </h2>
        <p className="text-gray-500 font-light">
          We recommend you to subscribe, drop your email below to get daily updates about us.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center max-w-xl mx-auto">
        <div className="flex items-center gap-2 w-full">
          <Mail className="text-rose-400 w-5 h-5" />
          <Input type="email" placeholder="Enter your email" className="flex-1" />
        </div>
        <Button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 w-full sm:w-auto">
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default CTA;