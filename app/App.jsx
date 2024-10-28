import Header from "./header/Header";
import Hero from "./hero/Hero";
import Banner from "./banner/Banner";
import AboutMe from "./about-me/AboutMe";
import Jobs from "./work/Jobs";
import WorkProcess from "./work/WorkProcess";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <AboutMe />
      <Banner />
      <Jobs />
      <Banner />
      <WorkProcess />
    </>
  );
}
