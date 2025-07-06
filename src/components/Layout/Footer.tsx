import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171717] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Text Logo & Tagline */}
        <div className="md:col-span-1">
          <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#4F46E5] to-[#2DD4BF] bg-clip-text text-transparent tracking-tight">
            Gavenue Agency
          </h1>
          <p className="text-sm text-gray-400">
            Digital-first agency empowering modern businesses.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:text-[#2DD4BF]">Home</a></li>
            <li><a href="#services" className="hover:text-[#2DD4BF]">Services</a></li>
            <li><a href="#faq" className="hover:text-[#2DD4BF]">FAQ</a></li>
            <li><a href="#contact" className="hover:text-[#2DD4BF]">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="mailto:info@gavenue.agency" className="hover:text-[#2DD4BF]">
                info@gavenue.agency
              </a>
            </li>
            <li>
              <a href="tel:+919984294923" className="hover:text-[#2DD4BF]">
                +91 99842 94923
              </a>
            </li>
            <li>Varanasi, UP, 212011</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/gavenue-agency/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-gray-300 hover:text-[#2DD4BF]" />
            </a>
            <a href="https://www.instagram.com/gavenue.agency/" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-gray-300 hover:text-[#2DD4BF]" />
            </a>
            <a href="https://www.facebook.com/gavenue.agency/" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-gray-300 hover:text-[#2DD4BF]" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()}         Designed & Built by [Umesh Maniyar] for evaluation purposes only.

      </div>

      
    
    </footer>
  );
};

export default Footer;
