import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

// Project images
import Project1 from "../../assets/Project1.png";
import Project2 from "../../assets/Project2.png";
import Project3 from "../../assets/Project 3.png";
import Project4 from "../../assets/Project 4.png";

interface Project {
  id: string;
  title: string;
  stack: string;
  imageSrc: string;
  liveUrl: string;
  category: string;
}

const allProjects: Project[] = [
  {
    id: "1",
    title: "E-commerce Store",
    stack: "Next.js, Tailwind, Stripe",
    imageSrc: Project1,
    liveUrl: "https://gavenue.shop/",
    category: "Web",
  },
  {
    id: "2",
    title: "Personal Portfolio",
    stack: "React, AOS, Netlify",
    imageSrc: Project2,
    liveUrl: "https://jeewithajay.live/",
    category: "Portfolio",
  },
  {
    id: "3",
    title: "Agency Website",
    stack: "HTML, CSS, Bootstrap",
    imageSrc: Project3,
    liveUrl: "https://dayhomdigital.com/",
    category: "Web",
  },
  {
    id: "4",
    title: "Corporate Site",
    stack: "WordPress, Elementor",
    imageSrc: Project4,
    liveUrl: "https://vijaymetalworks.com/",
    category: "Company",
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (inView && !isLoading && visibleCount < filteredProjects.length) {
      setTimeout(() => {
        setVisibleCount((prev) => prev + 2);
      }, 500);
    }
  }, [inView]);

  const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="portfolio" className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-xl font-semibold text-[#2DD4BF]">Check our Work</h4>
        <h3 className="text-5xl font-extrabold text-[#171717] mt-3 mb-12">
          Some of our Recent Projects
        </h3>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setFilter(cat);
                  setVisibleCount(2);
                  setIsLoading(false);
                }, 500);
              }}
              className={`px-4 py-2 rounded-full border text-sm transition active:scale-95 duration-150 ${
                filter === cat
                  ? "bg-[#4F46E5] text-white"
                  : "bg-white text-black border-gray-300 hover:border-[#4F46E5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-[280px] rounded-xl bg-gray-200 animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {visibleProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="zoom-in-up"
                className="group relative rounded-xl overflow-hidden shadow-md transition-all duration-300 transform-gpu hover:scale-[1.02] hover:-rotate-1 cursor-pointer"
              >
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 z-10" />
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-md bg-black/30 p-4 rounded-lg text-white">
                  <h4 className="text-lg font-bold">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack.split(",").map((tech, i) => (
                      <span
                        key={tech}
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                        className="text-xs px-2 py-1 rounded-full bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/30"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm bg-[#4F46E5] hover:bg-[#3b35b0] text-white px-4 py-2 rounded-md transition"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Infinite Scroll Trigger */}
        <div ref={ref} className="h-10 mt-10 flex justify-center items-center">
          {visibleCount < filteredProjects.length && !isLoading && (
            <span className="text-sm text-gray-500 animate-pulse">
              Loading more projects...
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
