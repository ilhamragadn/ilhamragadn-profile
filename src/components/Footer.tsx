import GmailIcon from "../assets/icons/icons-gmail.svg?react";
import LinkedInIcon from "../assets/icons/icons-linkedin.svg?react";
import InstagramIcon from "../assets/icons/icons-instagram.svg?react";

const Footer = () => {
  return (
    <footer id="connect" className="pt-14">
      <div className="flex flex-col justify-center items-center bg-linear-to-b from-gray-50 to bg-gray-800 via-30% via-gray-400/85 backdrop-blur-md py-12 space-y-2">
        <h3 className="text-white text-2xl font-semibold tracking-tight underline underline-offset-2">
          Let's Connect.
        </h3>
        <div className="flex space-x-6 mt-1">
          <a
            href="mailto:nayokoilham@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GmailIcon className="w-12 h-12 hover:scale-110 transition-all duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/ilhamragadn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="w-12 h-12 hover:scale-110 transition-all duration-200" />
          </a>
          <a
            href="https://instagram.com/ilhamragadn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className="w-12 h-12 hover:scale-110 transition-all duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
