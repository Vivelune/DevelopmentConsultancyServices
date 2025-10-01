import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Team from "./sections/Team.jsx";
import Projects from "./sections/Projects.jsx";
import Certifications from "./sections/Certifications.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;