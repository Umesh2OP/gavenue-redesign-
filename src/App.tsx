// src/App.tsx

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HeroSection from "./components/Sections/Herosection";
import Services from "./components/Sections/Services";
import Portfolio from "./components/Sections/Portfoloio";
import Pricing from "./components/Sections/Pricing";
import FAQ from "./components/Sections/Faq";
import Contact from "./components/Sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
