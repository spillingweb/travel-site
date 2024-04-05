import OurBeginning from "./components/OurBeginning";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";

export const App = () => {
  const [visibleSection, setVisibleSection] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.getAttribute("id")!);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  // Handle esc-event when modal open
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        setModalVisible(false);
      }
    }

    document.addEventListener("keyup", handleEscapeKey);
    return () => document.removeEventListener("keyup", handleEscapeKey);
  }, []);

  return (
    <>
      <Header
        visibleSection={visibleSection}
        onBtnClick={() => setModalVisible(true)}
      />
      <OurBeginning />
      <Features />
      <Testimonials />
      <Footer onBtnClick={() => setModalVisible(true)} />
      <Modal open={modalVisible} onCloseModal={() => setModalVisible(false)} />
    </>
  );
};
