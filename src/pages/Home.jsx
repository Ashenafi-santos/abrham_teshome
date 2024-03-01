import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import MissionSection from "../components/MissionSection";
import VisionSection from "../components/VisionSection";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <HeroSection />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section>
        <VisionSection />
      </section>
      <section>
        <MissionSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
