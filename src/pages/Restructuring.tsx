import { motion } from 'framer-motion';

const Restructuring = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#8B0000] flex flex-col lg:flex-row min-h-[54.7vh]"
    >
      <div className="w-full lg:w-2/5 bg-[#E5E5E5] flex items-center justify-center p-10">
        <h2 className="text-[#B91C1B] font-roboto-condensed text-3xl sm:text-4xl lg:text-5xl font-bold text-center leading-snug">
          Restructuring <br />& Insolvency
        </h2>
      </div>

      <div className="w-full lg:w-3/5 bg-[#8B0000] text-white flex items-center justify-center p-10">
        <p className="max-w-3xl text-lg sm:text-xl lg:text-3xl font-roboto-condensed font-bold leading-relaxed text-justify">
          Our lawyers are well acquainted in financial restructurings, which can also involve necessary corporate restructurings. We possess the experience, legal knowledge as well as business sensitivity required to ensure the successful and timely completion of large and complex transactions involving multinational banks and financial institutions. In recent years we have been involved in financial restructurings that involved restructuring of security package, bond issuance, debt-to-equity swap and share swap.
        </p>
      </div>
    </motion.div>
  );
};

export default Restructuring;
