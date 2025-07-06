import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Player from "lottie-react";
import { useTypewriter } from "react-simple-typewriter";
import { ChevronRight } from "lucide-react";
import Blob from "../../assets/Blob";
import heroAnimation from "../../assets/hero.json";

const HeroSection: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Craft digital experiences.", "Grow your business.", "Design that converts."],
    loop: true,
    delaySpeed: 2000,
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const lottieY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={ref} className="relative overflow-hidden animated-hero-bg py-28 text-[#171717]">
      <motion.div style={{ y: blobY }} className="absolute z-0">
        <Blob />
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-[50%] bg-gradient-to-br from-[#4F46E5] via-transparent to-[#2DD4BF] blur-3xl opacity-20 z-0" />

      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#2DD4BF] opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            x: [0, 5, -5, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random(),
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="bg-white/30 backdrop-blur-lg border border-white/20 rounded-3xl p-10 max-w-xl space-y-6 shadow-2xl"
        >
          <div className="text-sm font-semibold inline-block bg-[#2DD4BF]/20 text-[#2DD4BF] px-3 py-1 rounded-full uppercase">
            Trusted by startups & creators
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span>{text}</span>
            <span className="text-[#4F46E5]">|</span>
          </h1>

          <p className="text-gray-600 text-lg">
            We craft interfaces that deliver real results. Design, code, and convert.
          </p>

          <motion.button
            className="mt-4 bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 font-semibold rounded-lg flex items-center gap-2 shadow-lg transition-transform"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.03)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `translate(0px, 0px) scale(1)`;
            }}
          >
            Let’s Build Something Exceptional <ChevronRight size={18} />
          </motion.button>
        </motion.div>

        <motion.div
          style={{ y: lottieY }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full md:w-[480px] lg:w-[560px] p-4 bg-white/20 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl"
        >
          <Player animationData={heroAnimation} loop autoplay className="w-full h-auto" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <button
          className="flex flex-col items-center text-sm text-gray-500 animate-bounce"
          onClick={() => {
            const el = document.getElementById("services");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronRight className="rotate-90 mb-1" />
          Scroll down
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
