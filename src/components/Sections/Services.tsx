import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// You are importing your Lottie animation here:
import myLottieAnimation from '../../assets/services.json';
import Lottie from "lottie-react"; // Lottie import for animations

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDescription: string;
  longDescription: string;
  videoUrl?: string;
  features?: string[];
}

// Icon components (unchanged)
const WebDevelopmentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2DD4BF"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-code"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const GraphicDesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2DD4BF"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-palette"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="#2DD4BF"></circle>
    <circle cx="17.5" cy="10.5" r=".5" fill="#2DD4BF"></circle>
    <circle cx="8.5" cy="7.5" r=".5" fill="#2DD4BF"></circle>
    <circle cx="6.5" cy="12.5" r=".5" fill="#2DD4BF"></circle>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.83 0 1.64-.13 2.4-.35A4 4 0 0 0 18 20c.64-.18 1.25-.43 1.8-.75V13"></path>
    <path d="M22 22 13.5 13.5"></path>
  </svg>
);

const CustomSolutionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2DD4BF"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-settings"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const ServiceCard: React.FC<{ service: Service; isOpen: boolean; toggleOpen: () => void }> = ({
  service,
  isOpen,
  toggleOpen,
}) => {
  return (
    <motion.div
      layout
      data-aos="fade-up"
      className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 cursor-pointer overflow-hidden relative"
      onClick={toggleOpen}
      whileHover={{
        scale: 1.02, // Slightly enlarge the card on hover
        boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)", // More prominent shadow on hover
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth spring transition for hover and layout changes
      style={{
        boxShadow: isOpen
          ? "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0">
          <service.icon />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-[#171717] font-['Poppins']">
            {service.title}
          </h3>
          {!isOpen && (
            <p className="mt-2 text-gray-600 font-['Roboto']">
              {service.shortDescription}
            </p>
          )}
        </div>
        <div className="ml-auto text-[#4F46E5]">
          {isOpen ? (
            <ChevronUp size={24} className="transition-transform duration-300 transform rotate-0" />
          ) : (
            <ChevronDown size={24} className="transition-transform duration-300 transform rotate-180" />
          )}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mt-6 text-gray-700 font-['Roboto'] overflow-hidden"
      >
        <p>{service.longDescription}</p>
        {service.features && service.features.length > 0 && (
          <ul className="mt-4 list-disc list-inside space-y-1 text-gray-600">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        {service.videoUrl && (
          <div className="mt-6 rounded-lg overflow-hidden">
            <video controls src={service.videoUrl} className="w-full h-auto rounded-lg shadow-md"></video>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  const services: Service[] = [
    {
      id: "web-development",
      icon: WebDevelopmentIcon,
      title: "Web Development",
      shortDescription: "Crafting robust and scalable web solutions.",
      longDescription:
        "We specialize in building high-performance, secure, and user-friendly web applications tailored to your business needs. From custom websites to complex web platforms, we ensure a seamless digital experience.",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Content Management Systems (CMS)",
        "Progressive Web Apps (PWAs)",
      ],
    },
    {
      id: "video-graphic-design",
      icon: GraphicDesignIcon,
      title: "Video & Graphic Design",
      shortDescription: "Visually stunning designs and engaging video content.",
      longDescription:
        "Our creative team brings your brand to life with captivating graphic design and professional video production. We focus on visual storytelling that resonates with your audience and elevates your brand identity.",
      features: [
        "Brand Identity & Logo Design",
        "Marketing Collateral",
        "Motion Graphics & Animation",
        "Corporate Videos & Explainer Videos",
      ],
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: "web-custom-solution",
      icon: CustomSolutionIcon,
      title: "Web Custom Solutions",
      shortDescription: "Tailored web solutions for unique business challenges.",
      longDescription:
        "Beyond standard development, we provide bespoke web solutions to address your specific operational challenges and innovative ideas. Our custom approach ensures a perfect fit for your unique requirements.",
      features: [
        "Custom CRM/ERP Development",
        "API Integration Services",
        "Data Visualization Dashboards",
        "Legacy System Modernization",
      ],
    },
  ];

  const toggleService = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  // Remove the myLottieAnimationData placeholder object
  // const myLottieAnimationData = { ... };

  return (
    <section id="services" className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl font-extrabold text-[#171717] font-['Poppins']">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto font-['Roboto']">
            We offer a comprehensive suite of digital services designed to
            elevate your brand and drive measurable results.
          </p>
          <div className="mt-8 flex justify-center">
            {/* Lottie Animation: Now correctly using the imported `myLottieAnimation` */}
            <Lottie
              animationData={myLottieAnimation} // Use the imported JSON data directly
              loop={true}
              autoplay={true}
              style={{ width: 120, height: 120 }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isOpen={openServiceId === service.id}
              toggleOpen={() => toggleService(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;