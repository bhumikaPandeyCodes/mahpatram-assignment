import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from "./components/About";
import Services from "./components/Services";
import Ourteam from "./components/Ourteam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Brands />
      <About />
      <Services/>
      <Ourteam />
      <Contact/>
      <Footer />
    </div>
  );
}
