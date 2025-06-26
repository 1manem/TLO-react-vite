import lawyerImg from '../assets/lwyr1.jpg'; 

const Lawyers = () => {
  return (
    <main className="min-h-screen bg-[#8B0000] text-white px-6 py-16">
      <h1 className="text-3xl sm:text-6xl font-bold font-roboto-condensed text-center mb-12">
        Meet the Lawyers
      </h1>

      <div className="flex justify-center">
        <div className="relative group w-[600px] h-[300px] bg-[#B91C1B] rounded border border-black shadow-lg overflow-hidden flex">

          {/* Lawyer Image - fixed 1:1 ratio */}
          <div className="w-[40%] h-full overflow-hidden">
            <img
              src={lawyerImg}
              alt="Rudy Eliezer Tiendas"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Info Text */}
          <div className="w-[60%] p-6 transition duration-300 ease-in-out group-hover:blur-sm flex flex-col justify-center">
            <h2 className="font-bold text-2xl font-roboto-condensed mb-2">
              Rudy Eliezer Tiendas
            </h2>
            <p className="text-base font-roboto-condensed">
              Language: English and Indonesia
            </p>
          </div>

          {/* Hover Overlay Bio */}
          <div className="absolute inset-0 bg-white/80 text-[#000000] p-6 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out flex items-center justify-center text-l font-roboto-condensed text-justify leading-relaxed">
            <p>
              Rudy Eliezer Tiendas is the founder of TLO Advocates. He has practiced as a lawyer in Indonesia since 1993. Mr. Tiendas is a licensed advocate and a registered capital markets lawyer with the Indonesian Financial Services Authority (Otoritas Jasa Keuangan).
              <br /><br />
              Rudy is a member of Indonesian Advocates Association (PERADI), Capital Markets Legal Consultant Association (HKHPM) and Inter Pacific-Bar Association.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Lawyers;
