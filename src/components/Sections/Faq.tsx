import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What services does Gavenue Agency provide?",
    answer: "We offer full-stack web development, UI/UX design, custom digital solutions, video editing, and branding support for businesses of all sizes."
  },
  {
    question: "How quickly can we start a project?",
    answer: "We typically begin within 2–3 business days after the initial consultation and onboarding, depending on availability."
  },
  {
    question: "Can I get a custom quote for my business needs?",
    answer: "Absolutely. Contact us via the contact form, and we’ll provide a detailed proposal tailored to your goals."
  },
  {
    question: "Do you offer ongoing support or maintenance?",
    answer: "Yes, we offer flexible post-launch support packages to help you maintain, update, and scale your project."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    const alreadyActive = activeIndex === index;
    setActiveIndex(alreadyActive ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeIndex]);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <section id="faq" className="bg-[#F9FAFB] py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#171717] mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-500">Answers to common questions about our agency and services.</p>
        </div>

        <div className="relative mb-10 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />
          <Search className="absolute top-3.5 left-4 text-gray-400" size={20} />
        </div>

        <div className="space-y-4">
          {filteredFaqs.length === 0 && (
            <p className="text-center text-gray-400 italic">No results found.</p>
          )}
          {filteredFaqs.map((faq, index) => {
            const originalIndex = faqs.findIndex(f => f.question === faq.question);
            return (
              <motion.div
                key={faq.question}
                ref={(el) => {
                  itemRefs.current[originalIndex] = el;
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white"
              >
                <button
                  onClick={() => toggle(originalIndex)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#2DD4BF]" />
                    <span className="text-lg font-medium text-[#171717] group-hover:text-[#4F46E5]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeIndex === originalIndex ? "rotate-180 text-[#4F46E5]" : "text-gray-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === originalIndex && (
                    <motion.div
                      className="px-6 pb-6 pt-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    >
                      <div className="bg-[#F3F4F6] rounded-xl p-4 text-sm text-gray-700 border-l-4 border-[#4F46E5]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
