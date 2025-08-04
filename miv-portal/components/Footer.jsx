import { FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-6 bg-white border-t text-sm">
      <div>
        <img src="/logo.png" alt="MiV Logo" className="h-10 mb-2" />
        <p>Mekong Inclusive Ventures</p>
      </div>
      <div className="text-center mt-4 md:mt-0">
        <p>Contact Details</p>
        <p>#1381, National Road 2,<br />
          Phum Tuol Roka,<br />
          Sangkat Chat Angre Krom, Khan Meanchey<br />
          Phnom Penh, Cambodia</p>
        <p className="font-bold mt-2">
          +855 17 350 544<br />
          +855 16 708 848<br />
          +855 88 733 4902
        </p>
      </div>
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="#"><FaFacebook size={24} className="text-blue-600" /></a>
        <a href="#"><FaLinkedin size={24} className="text-blue-600" /></a>
      </div>
    </footer>
  );
}
