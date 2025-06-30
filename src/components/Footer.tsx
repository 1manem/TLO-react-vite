import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#9B999A] text-white px-6 sm:px-10 py-12 text-left">
      <div className="max-w-[1440px] mx-auto space-y-6">
        {/* Contact Info */}
        <div>
          <h2 className="font-roboto text-[clamp(1.25rem,2vw,20px)] font-bold mb-2">TLO Advocates</h2>
          <p className="font-roboto-condensed text-[clamp(1.25rem,2vw,20px)] font-normal leading-snug">
            22nd Floor, Menara Imperium<br />
            Jl. H.R. Rasuna Said Kav. 1,<br />
            Jakarta 12980,<br />
            Indonesia
          </p>
        </div>

        <hr className="border-t border-white/50" />

        {/* Social & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/tloadvocates/"
              aria-label="Instagram"
              className="text-white text-2xl hover:text-black transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://id.linkedin.com/company/tloadvocates"
              aria-label="LinkedIn"
              className="text-white text-2xl hover:text-black transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/people/TLO-Advocates/100068967224468/"
              aria-label="Facebook"
              className="text-white text-2xl hover:text-black transition-colors"
            >
              <FaFacebook />
            </a>
          </div>

          <p className="text-sm font-roboto-condensed text-white/80">
            © {new Date().getFullYear()} TLO Advocates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
