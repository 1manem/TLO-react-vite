import stockImage2 from '../assets/stockimage2.jpg';

const AboutUs = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#910000] to-[#660000] text-white px-6 sm:px-10 pt-10 pb-10">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-8">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            src={stockImage2}
            alt="Firm Background"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-2/3 flex flex-col justify-center space-y-6 text-justify">
          <h1 className="font-roboto-condensed font-bold text-left text-[clamp(2.5rem,4vw,3rem)]">
            Firm Background
          </h1>

          <p className="font-roboto-condensed text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
            TLO Advocates (the "Firm") was established in February 2006 to be a highly competent law firm that fully understands clients' problems and promptly formulates the most appropriate and result-oriented solutions.
          </p>

          <hr className="border-t border-white/20 w-1/2" />

          <p className="font-roboto-condensed text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
            Lawyers at the Firm are qualified to practice Indonesian law and each lawyer specializes in certain legal areas where he/she consistently maintains and develops legal and other relevant skills as well as maintaining relationship with relevant government authorities. We ensure timely completion in a professional and cost-effective manner.
          </p>

          <hr className="border-t border-white/20 w-1/2" />

          <p className="font-roboto-condensed text-[clamp(1rem,2vw,1.25rem)] leading-relaxed">
            The Firm’s Statement of Purpose are (i) serving, helping and adding values to clients, and (ii) help ensuring that clients do the right thing and do the thing right, effectively and efficiently.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
