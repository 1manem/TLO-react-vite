import { motion } from 'framer-motion';

const Commercial = () => {
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
          Corporate/Commercial
        </h2>
      </div>

      <div className="w-full lg:w-3/5 bg-[#8B0000] text-white flex items-center justify-center p-10">
        <p className="max-w-3xl text-lg sm:text-xl lg:text-3xl font-roboto-condensed font-bold leading-relaxed text-justify">
          TLO Advocates assists a wide range of clients in various business sectors such as mining, shipping, plantation, property, trading, aviation, information technology and finance companies in relation to the structuring, establishment and maintenance of the companies' operations which also includes assisting on all aspects of manpower and industrial relations issues. In recent years, our role in employment-related legal matters has increased significantly as employment issues have rapidly become more important and sensitive.
        </p>
      </div>
    </motion.div>
  );
};

export default Commercial;
