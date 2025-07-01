"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Plane } from 'lucide-react';
import Home from '@/app/page';

const particlePositions = [
  0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95
].map(pos => pos * 1000); 

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    const timers = [
      setTimeout(() => setCurrentStep(1), 500),
      setTimeout(() => setCurrentStep(2), 1500),
      setTimeout(() => setShowSplash(false), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (!showSplash) return <Home />;

  return (
    <div className="fixed inset-0 bg-teal-50 flex items-center justify-center overflow-hidden">
      {/* Floating particles */}
      {particlePositions.map((xPos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-300 rounded-full opacity-50"
          initial={{ x: xPos % dimensions.width, y: dimensions.height }}
          animate={{ y: -100, opacity: [0.5, 1, 0] }}
          transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center">
        <AnimatePresence>
          {currentStep >= 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="relative w-20 h-20 mx-auto"
              >
                <Compass className="w-20 h-20 text-cyan-600" />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <Plane className="w-6 h-6 text-teal-700 absolute top-0 left-1/2 -translate-x-1/2" />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {currentStep >= 1 && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl text-teal-800 tracking-tight"
            >
              {'Traventure'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {currentStep >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 flex justify-center space-x-4"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-cyan-500 rounded-full"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Corner decoration */}
      <motion.div
        className="absolute inset-0 border-2 border-cyan-200 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      />
    </div>
  );
};

export default SplashScreen;