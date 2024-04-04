import OurBeginning from "./components/OurBeginning";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import { useState, useEffect } from "react";

export const App = () => {
  const [visibleSection, setVisibleSection] = useState('');  
  
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSection(entry.target.getAttribute('id')!)
            }
        } )
    },
    {
      threshold: 0.5,
    }
    )
    sections.forEach(section => observer.observe(section));
  }, [])

  return (
    <>
      <Header visibleSection={visibleSection} />
      <OurBeginning />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
};
