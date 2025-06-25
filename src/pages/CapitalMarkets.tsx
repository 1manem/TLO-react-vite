import React from 'react';
import { motion } from 'framer-motion';

const CapitalMarkets = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row min-h-[54.7vh]"
    >
      <div className="w-full lg:w-2/5 bg-[#E5E5E5] flex items-center justify-center p-10">
        <h2 className="text-[#B91C1B] font-roboto-condensed text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug">
          Capital Markets
        </h2>
      </div>

      <div className="w-full lg:w-3/5 bg-[#8B0000] text-white flex items-center justify-center p-10">
        <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl font-roboto-condensed font-bold leading-relaxed text-justify">
          Some of our lawyers are amongst recognized experts in the area of capital markets and securities law. We are acclaimed as possessing comprehensive knowledge and very efficient when providing capital markets and securities legal advice.
        </p>
      </div>
    </motion.div>
  );
};

export default CapitalMarkets;
