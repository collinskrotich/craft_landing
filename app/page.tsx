import About from "./components/About";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TestimonialSlider from "./components/TestimonialSlider";
import Collaborate from "./components/Collaborate";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TestimonialSlider />
      <Collaborate />
    </>
  );
}
