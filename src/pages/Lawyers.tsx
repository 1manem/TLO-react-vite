import { useState } from 'react';
import { X } from 'lucide-react';
import lawyerImg from '../assets/lawyer1.png';

const Lawyers = () => {
  const [showBioMobile, setShowBioMobile] = useState(false);

  const toggleBio = () => {
    setShowBioMobile((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-[#8B0000] text-white px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-6xl font-bold font-roboto-condensed text-center mb-12">
        Meet the Lawyers
      </h1>

      <div className="flex justify-center">
        <div
          className={`relative group w-full max-w-md sm:max-w-2xl h-[350px] bg-[#B91C1B] rounded border border-black shadow-lg overflow-hidden flex flex-col sm:flex-row`}
          onClick={() => {
            if (window.innerWidth < 640) toggleBio(); // only toggle on mobile
          }}
        >
          {/* Lawyer Image */}
          <div className="w-full sm:w-[40%] h-[200px] sm:h-full overflow-hidden shrink-0">
            <img
              src={lawyerImg}
              alt="Rudy Eliezer Tiendas"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Info Text */}
          <div
            className={`w-full sm:w-[60%] p-4 sm:p-6 transition duration-300 ease-in-out ${
              showBioMobile ? 'blur-sm sm:group-hover:blur-sm' : ''
            } flex flex-col justify-center`}
          >
            <h2 className="font-bold text-xl sm:text-2xl font-roboto-condensed mb-2">
              Rudy Eliezer Tiendas
            </h2>
            <p className="text-base font-roboto-condensed">
              Language: English and Indonesia
            </p>
          </div>

          {/* Hover/Bio Overlay */}
          <div
            className={`absolute inset-0 bg-white/90 text-black p-6 overflow-y-auto text-sm sm:text-base leading-relaxed font-roboto-condensed text-justify transition duration-500 ease-in-out
              ${showBioMobile ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}
              sm:group-hover:opacity-100 sm:pointer-events-auto`}
          >
            {/* Mobile close button */}
            <button
              className="absolute top-3 right-3 sm:hidden text-black hover:text-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                setShowBioMobile(false);
              }}
              aria-label="Close bio"
            >
              <X size={20} />
            </button>

            <p>
              Rudy Eliezer Tiendas is the founder of TLO Advocates. He has practiced as a lawyer in Indonesia since 1993. Mr. Tiendas is a licensed advocate and a registered capital markets lawyer with the Indonesian Financial Services Authority (Otoritas Jasa Keuangan).
              <br /><br />
              Rudy is a member of Indonesian Advocates Association (PERADI), Capital Markets Legal Consultant Association (HKHPM) and Inter Pacific-Bar Association.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile tap hint */}
      <div className="mt-6 sm:hidden text-center text-sm text-white/80">
        Tap the card to {showBioMobile ? 'hide' : 'view'} bio
      </div>
    </main>
  );
};

export default Lawyers;
