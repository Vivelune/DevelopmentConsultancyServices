import { Element } from "react-scroll";

const About = () => {
  return (
    <section>
      <Element name="about">
        <div className="container py-28 max-md:py-16">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="h3 text-p4 mb-6">About DCS</h2>
            <p className="body-1 max-w-3xl">
              Development Consultancy Services (Pvt) Ltd. is an ISO 9001 certified organization incorporated in 2009, registered with SECP Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="g7 rounded-3xl p-8 border-2 border-s3">
              <h3 className="h5 text-p3 mb-4">Our Vision</h3>
              <p className="body-1">
                To be a Nationwide Professional Architectural & Engineering Service Provider.
              </p>
            </div>

            <div className="g7 rounded-3xl p-8 border-2 border-s3">
              <h3 className="h5 text-p3 mb-4">Our Mission</h3>
              <p className="body-1">
                To provide best customer service through team work and continuous staff training in order to maximize returns on investment for the benefit of stakeholders.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="g7 rounded-3xl p-6 border-2 border-s3">
              <div className="h4 text-p3 mb-2">14+</div>
              <div className="body-2">Years Experience</div>
            </div>
            <div className="g7 rounded-3xl p-6 border-2 border-s3">
              <div className="h4 text-p3 mb-2">30B+</div>
              <div className="body-2">Projects Value</div>
            </div>
            <div className="g7 rounded-3xl p-6 border-2 border-s3">
              <div className="h4 text-p3 mb-2">100+</div>
              <div className="body-2">Organizations Registered</div>
            </div>
            <div className="g7 rounded-3xl p-6 border-2 border-s3">
              <div className="h4 text-p3 mb-2">ISO</div>
              <div className="body-2">9001 Certified</div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default About;