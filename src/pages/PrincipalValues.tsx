import { motion } from 'framer-motion';

const PrincipalValues = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#E5E5E5] flex flex-col lg:flex-row min-h-[54.7vh]"
    >
      {/* Left Title */}
      <div className="w-full lg:w-2/5 bg-[#8B0000] flex items-center justify-center p-6 sm:p-10">
        <h2 className="text-[#E5E5E5] font-roboto-condensed text-[clamp(2rem,5vw,3.5rem)] font-bold text-center leading-snug">
          Principle Values
        </h2>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-3/5 bg-[#E5E5E5] text-white flex items-center justify-center p-6 sm:p-10">
        <ul className="text-[#B91C1B] font-roboto-condensed font-bold text-[clamp(1rem,2.5vw,1.75rem)] leading-relaxed text-justify space-y-4 list-disc list-inside max-w-2xl">
          <li>Honesty, fairness, and ethical standards</li>
          <li>Responsiveness</li>
          <li>Unvarying integrity and quality</li>
          <li>
            Highest caliber and results-oriented legal services at competitive rates
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default PrincipalValues;
