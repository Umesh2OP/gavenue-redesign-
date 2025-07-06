import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#171717] mb-2">Let’s Work Together</h2>
          <p className="text-gray-500">Have a project in mind? Drop us a message or reach out directly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-[#4F46E5]" />
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:info@gavenue.agency" className="text-lg font-medium text-[#171717] hover:underline">
                  info@gavenue.agency
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#4F46E5]" />
              <div>
                <p className="text-sm text-gray-600">Phone / WhatsApp</p>
                <a
                  href="https://api.whatsapp.com/send?phone=919984294923"
                  className="text-lg font-medium text-[#171717] hover:underline"
                >
                  +91 99842 94923
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-[#4F46E5]" />
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="text-lg font-medium text-[#171717]">Varanasi, UP, 212011</p>
              </div>
            </div>
          </div>

          <form className="bg-[#F9FAFB] p-8 rounded-2xl shadow-lg space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#171717]">Company Name</label>
              <input
                type="text"
                placeholder="Your company"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#2DD4BF] outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#171717]">Phone Number</label>
              <input
                type="tel"
                placeholder="Include country code"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#2DD4BF] outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#171717]">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#2DD4BF] outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#171717]">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#2DD4BF] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300"
            >
              Let’s Talk
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
