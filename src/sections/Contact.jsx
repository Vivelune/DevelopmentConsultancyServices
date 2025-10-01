import { Element } from "react-scroll";
import Button from "../components/Button.jsx";

const Contact = () => {
  return (
    <section>
      <Element name="contact">
        <div className="g7 py-28 max-md:py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="h3 text-p4 mb-6">Contact Us</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="h5 text-p3 mb-3">Head Office</h3>
                    <p className="body-1">Islamabad, Pakistan</p>
                  </div>
                  <div>
                    <h3 className="h5 text-p3 mb-3">Corporate Office</h3>
                    <p className="body-1">Peshawar, Pakistan</p>
                  </div>
                  <div>
                    <h3 className="h5 text-p3 mb-3">Professional Registrations</h3>
                    <ul className="body-1 space-y-2">
                      <li>• Pakistan Council of Architects and Town Planners (PCATP)</li>
                      <li>• Pakistan Engineering Council (PEC)</li>
                      <li>• Capital Development Authority (CDA)</li>
                      <li>• 100+ organizations and autonomous bodies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-s1 rounded-3xl p-8 border-2 border-s3">
                <h3 className="h5 text-p4 mb-6">Get In Touch</h3>
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-4 bg-s2 rounded-xl border-2 border-s3 focus:border-p3 outline-none transition-all duration-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-4 bg-s2 rounded-xl border-2 border-s3 focus:border-p3 outline-none transition-all duration-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      className="w-full p-4 bg-s2 rounded-xl border-2 border-s3 focus:border-p3 outline-none transition-all duration-500 resize-none"
                    ></textarea>
                  </div>
                  <Button>Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Contact;