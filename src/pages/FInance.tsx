import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Finance = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="flex flex-col lg:flex-row min-h-[54.7vh]">
      {/* Left: Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full lg:w-2/5 bg-[#E5E5E5] flex items-center justify-center p-10"
      >
        <h1 className="text-[#B91C1B] font-roboto-condensed text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug">
          Corporate Finance<br />& Banking Matters
        </h1>
      </motion.div>

      {/* Right: Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="w-full lg:w-3/5 bg-[#8B0000] text-white flex items-center justify-center p-10"
      >
        <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl font-roboto-condensed font-bold leading-relaxed text-justify">
          TLO Advocates represents a wide range of multinational banks and financial institutions as lenders, arrangers or agents as well as borrowers and collateral providers in various types of financing and refinancing activities. We possess extensive and up-to-date knowledge on Indonesian banking and financial institutions regulations and policies and maintain good relationship with banking and financial authorities in Indonesia.
        </p>
      </motion.div>
    </div>
  );
};

export default Finance;
