import { useRef } from "react";

import Header from "./header/Header";
import Hero from "./hero/Hero";
import Banner from "./banner/Banner";
import AboutMe from "./about-me/AboutMe";
import Jobs from "./work/Jobs";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

import ScrollToTopButton from "../components/ScrollToTopButton";

export default function App() {
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <Header
        aboutRef={aboutRef}
        expRef={expRef}
        workRef={workRef}
        contactRef={contactRef}
      />
      <Hero aboutRef={aboutRef} />
      <Banner />
      <AboutMe ref={aboutRef} contactRef={contactRef} />
      <Banner />
      <Jobs ref={expRef} />
      <Banner />
      <Contact />
      <Footer ref={contactRef} />
      <ScrollToTopButton />
    </>
  );
}
