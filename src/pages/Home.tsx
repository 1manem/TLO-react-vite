import React, { useState } from 'react';
import sampleImage from '../assets/office.jpg';
import stockImage from '../assets/stockimage.png';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

const Home = () => {
  const [showTextBox, setShowTextBox] = useState(false);
  const navigate = useNavigate();
  
  const [section1Ref, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [section2Ref, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [section3Ref, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [section4Ref, inView4] = useInView({ triggerOnce: false, threshold: 0.2 });


  return (
    <main className="min-h-screen bg-[#660000] text-white relative overflow-hidden">
    {/* Section 1: */}
    <div className="relative w-full overflow-hidden">
      <img
        src={sampleImage}
        alt="Office"
        className="w-full max-h-[400px] object-cover object-top"
      />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#660000] pointer-events-none" />
    </div>

    <motion.div
      ref={section1Ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView1 ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-10 px-6 sm:px-10 py-16"
    >
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="font-bold font-roboto-condensed leading-none mb-6 text-[clamp(2rem,8vw,6rem)]">
            We Serve.
          </h1>
          <p className="font-normal font-roboto-condensed leading-snug mb-4 text-[clamp(1rem,3.2vw,2rem)]">
            Crossing all obstacles<br />
            to achieve our client’s goals
          </p>
          <button
            onClick={() => setShowTextBox(!showTextBox)}
            className={`px-5 py-2 rounded-md transition-colors duration-300 font-roboto-condensed border ${
              showTextBox
                ? 'bg-white text-black'
                : 'bg-transparent text-white border-white hover:bg-white hover:text-black'
            }`}
          >
            GET TO KNOW US
          </button>
        </div>

        <AnimatePresence>
          {showTextBox && (
            <motion.div
              key="text-box"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full lg:w-1/2 bg-white/20 backdrop-blur-md p-6 rounded shadow-lg text-white relative"
            >
              <button
                onClick={() => setShowTextBox(false)}
                className="absolute top-4 right-4 text-white hover:text-red-300 transition-colors"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              <h2 className="text-xl sm:text-2xl font-bold font-roboto-condensed mb-4">
                Welcome to TLO Advocates
              </h2>
              <p className="text-base font-roboto-condensed mb-4">
                  TLO Advocates is a corporate and finance law firm who always puts client’s interest and
                  agenda in the first place. We concentrate on our clients and treat our clients as we
                  would treat ourselves. We listen to our clients and determine how we can help and solve
                  our client’s concerns.
              </p>
              <p className="text-base font-roboto-condensed">
                  In the era where the credibility of the term 'business ethics' has come into question,
                  many believe that business and ethics cannot coexist and businesses are said to thrive
                  on unethical practices. We strictly base our practice on uncompromised principal values
                  of integrity and trust. We convert these values into rules of behavior—being honest,
                  fair, and ethical—that must be upheld by our lawyers and staff at all times and in any
                  circumstances.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>

      {/* SECTION 2 */}
      <motion.section
        ref={section2Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full flex flex-col lg:flex-row"
      >
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={stockImage}
            alt="Library"
            className="w-full h-auto object-cover object-center"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 bg-white text-[#660000] flex items-center">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 py-12 flex justify-end">
            <div className="text-right max-w-2xl w-full">
              <h2
                className="font-roboto-condensed font-extrabold leading-tight mb-10 text-[clamp(2rem,5vw,3.5rem)]"
              >
                Indonesian Law Firm<br />
                Global Clients
              </h2>

              <div className="flex flex-wrap gap-6 justify-end">
                <button
                  onClick={() => navigate('/principal-values')}
                  className="w-[219px] h-[69px] text-[16px] font-roboto-condensed font-normal border border-[#B91C1B] text-[#660000] hover:bg-[#B91C1B] hover:text-white transition-all"
                >
                  DISCOVER OUR PRINCIPLE
                </button>

                <button
                  onClick={() => navigate('/aboutus')}
                  className="w-[219px] h-[69px] text-[16px] font-roboto-condensed font-normal border border-[#B91C1B] text-[#660000] hover:bg-[#B91C1B] hover:text-white transition-all"
                >
                  DISCOVER OUR FIRM
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 3 */}
      <motion.section
        ref={section3Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full bg-[#660000] text-white px-6 sm:px-10 py-20 min-h-[600px]"
      >
        <div className="max-w-[1440px] mx-auto w-full text-center">
          <h2 className="font-roboto-condensed font-bold text-[clamp(2rem,5vw,3rem)] mb-6">
            Our Practice Areas
          </h2>
          <p className="font-roboto-condensed text-white/90 max-w-7xl mx-auto mb-10 text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed">
            The lawyers at TLO Advocates have the depth and breadth of Indonesian legal knowledge and experience. 
            We take pride in the timely and high caliber of service provided to our clients, the accuracy of our legal 
            analysis and results-oriented advice that we are able to provide. We emphasize the paramount importance of 
            providing only the most appropriate level of legal expertise to our clients, complemented by commercial and 
            business advice.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Mergers & acquisitions', path: 'mergers-acquisitions' },
              { label: 'Capital markets', path: 'capital-markets' },
              { label: 'Corporate/Commercial', path: 'corporate-commercial' },
              { label: 'Corporate Finance and banking matters', path: 'corporate-finance' },
              { label: 'Restructuring and Insolvency', path: 'restructuring-insolvency' }
            ].map(({ label, path }) => (
              <button
                key={path}
                onClick={() => navigate(`/practice/${path}`)}
                className="px-6 py-4 rounded-full border border-white font-roboto-condensed font-bold hover:bg-white hover:text-[#660000] transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

 {/* SECTION 4: Our Lawyers Philosophy */}
      <motion.section
        ref={section4Ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full bg-white text-[#660000] px-6 sm:px-10 py-24"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-10">
          
          {/* Left Side - Headline & Button */}
          <div className="w-full lg:w-1/2 text-left flex flex-col justify-center items-start">
            <h2 className="text-[clamp(2.5rem,8vw,72px)] font-bold font-roboto-condensed leading-tight mb-8">
              We treat our clients<br className="hidden sm:block" /> as we would treat<br className="hidden sm:block" /> ourselves
            </h2>
            <button
              onClick={() => navigate('/lawyers')}
              className="px-6 py-3 rounded bg-[#B91C1B] text-white font-bold font-roboto-condensed text-lg transition-colors duration-300 hover:bg-[#9a1717] active:bg-[#7d1414]"
            >
              MEET OUR LAWYERS
            </button>
          </div>

          {/* Right Side - Description */}
          <div className="w-full lg:w-1/2 bg-[#B91C1B] text-white p-6 sm:p-10 flex items-center">
            <p className="text-right font-bold font-roboto-condensed text-[clamp(1.25rem,3vw,28px)] leading-relaxed">
              TLO Advocates strives to develop the finest lawyers. We take extra steps to develop our lawyers to maximize the important qualities of intelligence, integrity, creativity, excellence, commitment and staying power. All lawyers at TLO Advocates provide thoughtful yet practical and results-oriented legal advice and practice law with integrity and commitment that focus only on clients' interests.
            </p>
          </div>

        </div>
      </motion.section>


    </main>
  );
};

export default Home;
