import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Define the structure for a pricing plan
interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean; // Optional flag for a "most popular" plan
}

const PricingSection: React.FC = () => {
  // State to manage the pricing period: 'monthly' or 'yearly'
  const [isYearly, setIsYearly] = useState(false);

  // Initialize AOS (Animate On Scroll) when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  // Define your pricing plans
  const pricingPlans: PricingPlan[] = [
    {
      id: "basic",
      name: "Basic Plan",
      monthlyPrice: 29,
      yearlyPrice: 299, // ~25% discount for yearly
      features: [
        "Up to 5 Projects",
        "Basic Analytics",
        "24/7 Email Support",
        "5 GB Storage",
      ],
    },
    {
      id: "pro",
      name: "Pro Plan",
      monthlyPrice: 79,
      yearlyPrice: 799, // ~20% discount for yearly
      features: [
        "Unlimited Projects",
        "Advanced Analytics",
        "Priority Chat Support",
        "50 GB Storage",
        "Custom Integrations",
      ],
      isPopular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      monthlyPrice: 199,
      yearlyPrice: 1999, // ~17% discount for yearly
      features: [
        "Everything in Pro",
        "Dedicated Account Manager",
        "On-premise Solutions",
        "Unlimited Storage",
        "Custom Development",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-[#F9FAFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h4 className="text-xl font-semibold text-[#2DD4BF] font-['Poppins']">
            Flexible Pricing
          </h4>
          <h3 className="text-5xl font-extrabold text-[#171717] font-['Poppins'] mt-3">
            Choose Your Plan
          </h3>
          <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto font-['Roboto']">
            Simple, transparent pricing for all business sizes.
          </p>
        </div>

        {/* Monthly/Yearly Toggle Switch */}
        <div
          className="flex justify-center mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative flex p-1 bg-gray-200 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`py-2 px-6 rounded-full text-lg font-medium transition-colors duration-300 ${
                !isYearly ? "text-white bg-[#4F46E5]" : "text-gray-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`py-2 px-6 rounded-full text-lg font-medium transition-colors duration-300 ${
                isYearly ? "text-white bg-[#4F46E5]" : "text-gray-700"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              data-aos="fade-up" // AOS for scroll animation
              data-aos-delay={`${index * 150 + 300}`} // Stagger delay
              className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col justify-between
                ${plan.isPopular ? "border-2 border-[#4F46E5] relative" : ""}`}
              whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)" }} // Framer Motion hover
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#4F46E5] text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-3xl font-bold text-[#171717] font-['Poppins'] mb-4">
                  {plan.name}
                </h3>
                <div className="text-gray-600 font-['Roboto'] mb-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={isYearly ? plan.yearlyPrice : plan.monthlyPrice} // Key change for animation
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="text-5xl font-extrabold text-[#171717]"
                    >
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      <span className="text-xl font-medium text-gray-500">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </motion.p>
                  </AnimatePresence>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700 font-['Roboto']">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#2DD4BF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle mr-2 flex-shrink-0"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-8.5" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.button
                className="mt-auto w-full py-4 rounded-xl text-lg font-bold transition-colors duration-300"
                style={{
                  backgroundColor: plan.isPopular ? "#4F46E5" : "#2DD4BF",
                  color: "white",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: plan.isPopular ? "#3b35b0" : "#24a390", // Darker shade on hover
                }}
                whileTap={{ scale: 0.95 }} // Small press effect
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Choose {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;