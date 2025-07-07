import { motion } from 'framer-motion';
import stockImage2 from '../assets/jktmalam.jpg';

const AboutUs = () => {
  return (
    <main className="relative min-h-screen bg-white text-[#660000] px-6 sm:px-10 pt-10 pb-10">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-8">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3"
        >
          <img
            src={stockImage2}
            alt="Firm Background"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 flex flex-col justify-center space-y-6 text-justify"
        >
          <h1 className="font-roboto-condensed font-bold text-left text-[clamp(2.5rem,4vw,3rem)]">
            Firm Background
          </h1>

          <p className="font-roboto-condensed font-bold text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
            TLO Advocates (the "Firm") was established in February 2006 to be a highly competent law firm that fully understands clients' problems and promptly formulates the most appropriate and result-oriented solutions.
          </p>

          <hr className="border-t border-[#660000]/20 w-1/2" />

          <p className="font-roboto-condensed font-bold text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
            Lawyers at the Firm are qualified to practice Indonesian law and each lawyer specializes in certain legal areas where he/she consistently maintains and develops legal and other relevant skills as well as maintaining relationship with relevant government authorities. We ensure timely completion in a professional and cost-effective manner.
          </p>

          <hr className="border-t border-[#660000]/20 w-1/2" />

          <p className="font-roboto-condensed font-bold text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
            The Firm’s Statement of Purpose are (i) serving, helping and adding values to clients, and (ii) help ensuring that clients do the right thing and do the thing right, effectively and efficiently.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutUs;
