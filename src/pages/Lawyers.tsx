import { useState } from 'react';
import { X } from 'lucide-react';
import lawyerImg1 from '../assets/lawyer1.png';
import lawyerImg2 from '../assets/lawyer2.png';
import lawyerImg3 from '../assets/lawyer3.png';

const lawyersData = [
  {
    name: 'Rudy Eliezer Tiendas',
    language: 'English and Indonesia',
    image: lawyerImg1,
    bio: `Rudy Eliezer Tiendas is the founder of TLO Advocates. He has practiced as a lawyer in Indonesia since 1993. Mr. Tiendas is a licensed advocate and a registered capital markets lawyer with the Indonesian Financial Services Authority (Otoritas Jasa Keuangan).'
     'Rudy is a member of Indonesian Advocates Association (PERADI), Capital Markets Legal Consultant Association (HKHPM) and Inter Pacific-Bar Association.`,
  },
  {
    name: 'Ajeng',
    language: 'Indonesia and English',
    image: lawyerImg2,
    bio: `Ajeng specializes in corporate and commercial law, providing legal support for both local and international clients. She is passionate about empowering businesses through legal clarity.`,
  },
  {
    name: 'Chelsy',
    language: 'English, Indonesia, Mandarin',
    image: lawyerImg3,
    bio: `Chelsy has a solid background in mergers and acquisitions and capital markets. Known for her analytical thinking and dedication, she delivers strategic legal advice.`,
  },
];

const Lawyers = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleBio = (index: number) => {
    if (window.innerWidth >= 640) return;
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="min-h-screen bg-[#8B0000] text-white px-4 sm:px-6 py-16">
      <h1 className="text-3xl sm:text-6xl font-bold font-roboto-condensed text-center mb-16">
        Meet the Lawyers
      </h1>

      {/* Desktop Triangle Layout */}
      <div className="hidden sm:block relative h-[800px] max-w-6xl mx-auto">
        {/* Top Center - Rudy */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <LawyerCard
            index={0}
            activeIndex={activeIndex}
            toggleBio={toggleBio}
            lawyer={lawyersData[0]}
          />
        </div>

        {/* Bottom Left - Ajeng */}
        <div className="absolute bottom-0 left-[-15%]">
          <LawyerCard
            index={1}
            activeIndex={activeIndex}
            toggleBio={toggleBio}
            lawyer={lawyersData[1]}
          />
        </div>

        {/* Bottom Right - Chelsy */}
        <div className="absolute bottom-0 right-[-15%]">
          <LawyerCard
            index={2}
            activeIndex={activeIndex}
            toggleBio={toggleBio}
            lawyer={lawyersData[2]}
          />
        </div>
      </div>

      {/* Mobile Stacked Layout */}
      <div className="sm:hidden flex flex-col items-center gap-12">
        {lawyersData.map((lawyer, index) => (
          <LawyerCard
            key={index}
            index={index}
            activeIndex={activeIndex}
            toggleBio={toggleBio}
            lawyer={lawyer}
          />
        ))}
      </div>

      {/* Mobile Tap Hint */}
      <div className="mt-6 sm:hidden text-center text-sm text-white/80">
        Tap the card to {activeIndex !== null ? 'hide' : 'view'} bio
      </div>
    </main>
  );
};

type LawyerProps = {
  index: number;
  lawyer: {
    name: string;
    language: string;
    image: string;
    bio: string;
  };
  activeIndex: number | null;
  toggleBio: (index: number) => void;
};

const LawyerCard = ({ index, lawyer, activeIndex, toggleBio }: LawyerProps) => {
  return (
    <div
      className="relative group w-full max-w-md sm:max-w-2xl h-[350px] bg-[#B91C1B] rounded border border-black shadow-lg overflow-hidden flex flex-col sm:flex-row cursor-pointer"
      onClick={() => toggleBio(index)}
    >
      {/* Image */}
      <div className="w-full sm:w-[40%] h-[200px] sm:h-full overflow-hidden shrink-0">
        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Basic Info */}
      <div
        className={`w-full sm:w-[60%] p-4 sm:p-6 transition duration-300 ease-in-out ${
          activeIndex === index ? 'blur-sm sm:group-hover:blur-sm' : ''
        } flex flex-col justify-center`}
      >
        <h2 className="font-bold text-xl sm:text-2xl font-roboto-condensed mb-2">
          {lawyer.name}
        </h2>
        <p className="text-base font-roboto-condensed">
          Language: {lawyer.language}
        </p>
      </div>

      {/* Bio Overlay */}
      <div
        className={`absolute inset-0 bg-white/90 text-black p-6 overflow-y-auto text-sm sm:text-base leading-relaxed font-roboto-condensed text-justify transition duration-500 ease-in-out
        ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}
        sm:group-hover:opacity-100 sm:pointer-events-auto`}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 sm:hidden text-black hover:text-gray-700"
          onClick={(e) => {
            e.stopPropagation();
            toggleBio(index);
          }}
          aria-label="Close bio"
        >
          <X size={20} />
        </button>

        <p>{lawyer.bio}</p>
      </div>
    </div>
  );
};

export default Lawyers;
