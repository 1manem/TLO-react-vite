import { useState } from 'react';
import { Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#910000] to-[#660000] text-white px-6 py-24">
      <div className="w-full max-w-4xl mx-auto space-y-10 text-left">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-roboto-condensed">
          For more information, please contact:
        </h1>

        {/* Email Toggle */}
        <div>
          <button
            onClick={() => setShowEmail(!showEmail)}
            className="flex items-center gap-4 text-4xl font-roboto-condensed font-semibold hover:text-gray-300 transition"
          >
            <Mail size={44} />
            Email
            {showEmail ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          <AnimatePresence>
            {showEmail && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="mt-3 ml-8 space-y-4 text-[20px] sm:text-[22px] font-roboto-condensed"
              >
                <div>
                  <span className="font-bold">Rudy E. Tiendas</span><br />
                  rudy.tiendas@tloadvocates.co.id
                </div>
                <div>
                  <span className="font-bold">Ajeng Aurelia Chairunissa</span><br />
                  ajeng.aurelia@tloadvocates.co.id
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Phone Toggle */}
        <div>
          <button
            onClick={() => setShowPhone(!showPhone)}
            className="flex items-center gap-4 text-3xl font-roboto-condensed font-semibold hover:text-gray-300 transition"
          >
            <Phone size={44} />
            Phone
            {showPhone ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          <AnimatePresence>
            {showPhone && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="mt-3 ml-8 space-y-4 text-[20px] sm:text-[22px] font-roboto-condensed"
              >
                <div>
                  <span className="font-bold">Phone Number:</span><br />
                  +62 21 835 1069 / +62 21 8378 6061
                </div>
                <div>
                  <span className="font-bold">Company Number:</span><br />
                  +62 21 835 1076
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Contact;
