import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-1080 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Development Consultancy Services
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Professional Architectural & Engineering Services
            </h1>
            <p className="max-w-520 mb-14 body-1 max-md:mb-10">
              ISO 9001 Certified organization with over 30 Billion PKR worth of building projects, providing nationwide professional services since 2009.
            </p>
            <LinkScroll to="projects" offset={-100} spy smooth>
              <Button icon="/images/hero-construction1.png">View Our Projects</Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero-construction.png"
              className="size-1230 max-lg:h-auto"
              alt="construction project"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;