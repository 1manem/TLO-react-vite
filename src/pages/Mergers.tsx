import { motion } from 'framer-motion';

const Mergers = () => {
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
          Mergers & Acquisitions
        </h2>
      </div>

      <div className="w-full lg:w-3/5 bg-[#8B0000] text-white flex items-center justify-center p-10">
        <p className="max-w-3xl text-lg sm:text-xl lg:text-2xl font-roboto-condensed font-bold leading-relaxed text-justify">
          TLO Advocates represents both domestic and foreign investors in various merger and acquisition transactions involving private as well as publicly listed companies in Indonesia. We provide comprehensive services ranging from conducting legal due diligence, advising on acquisition procedures and various regulations on relevant industry sectors, structuring the acquisition scheme to document preparation. In many cases, we are also involved in the corresponding acquisition financing.
        </p>
      </div>
    </motion.div>
  );
};

export default Mergers;
