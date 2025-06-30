import { useState } from 'react';
import { Mail, Phone, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#660000] to-[#660000] text-white px-6 py-24">
      <div className="w-full max-w-4xl mx-auto space-y-10 text-left">
        <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-bold font-roboto-condensed">
          For more information, please contact:
        </h1>

        <div>
          <button onClick={() => setShowEmail(!showEmail)} className="flex items-center gap-4 text-[clamp(1.5rem,3vw,2rem)] font-roboto-condensed font-semibold hover:text-gray-300 transition">
            <Mail size={44} />
            Email
            {showEmail ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <AnimatePresence>
            {showEmail && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }} className="mt-3 ml-8 space-y-4 text-[clamp(1rem,2.5vw,1.375rem)] font-roboto-condensed">
                <div><span className="font-bold">Rudy E. Tiendas</span><br />rudy.tiendas@tloadvocates.co.id</div>
                <div><span className="font-bold">Ajeng Aurelia Chairunissa</span><br />ajeng.aurelia@tloadvocates.co.id</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
          <button onClick={() => setShowPhone(!showPhone)} className="flex items-center gap-4 text-[clamp(1.25rem,3vw,2rem)] font-roboto-condensed font-semibold hover:text-gray-300 transition">
            <Phone size={44} />
            Phone
            {showPhone ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <AnimatePresence>
            {showPhone && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }} className="mt-3 ml-8 space-y-4 text-[clamp(1rem,2.5vw,1.375rem)] font-roboto-condensed">
                <div><span className="font-bold">Phone Number:</span><br />+62 21 835 1069 / +62 21 8378 6061</div>
                <div><span className="font-bold">Company Number:</span><br />+62 21 835 1076</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
          <button onClick={() => setShowAddress(!showAddress)} className="flex items-center gap-4 text-[clamp(1.25rem,3vw,2rem)] font-roboto-condensed font-semibold hover:text-gray-300 transition">
            <MapPin size={44} />
            Address
            {showAddress ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          <AnimatePresence>
            {showAddress && (
              <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }} className="mt-3 ml-8 text-[clamp(1rem,2.5vw,1.375rem)] font-roboto-condensed">
                <div>
                  <span className="font-bold">TLO Advocates</span><br />
                  22nd Floor, Menara Imperium<br />
                  Jl. H.R. Rasuna Said Kav. 1,<br />
                  Jakarta 12980,<br />
                  Indonesia
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