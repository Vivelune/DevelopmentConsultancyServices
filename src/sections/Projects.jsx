import { Element } from "react-scroll";
import { useState } from "react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "SZAB Medical University Hospital & School of Dentistry",
      client: "SZAB Medical University, Islamabad",
      cost: "PKR 1,251 Million",
      status: "Completed in 2020",
      images: [
        "/images/SZAB.png",
        "/images/SZAB2.png",
       "/images/SZAB3.png",
       "/images/SZAB4.png",
      ]
    },
    {
      title: "OGRA Head Office Building",
      client: "Oil & Gas Regulatory Authority",
      cost: "PKR 1,050 Million",
      status: "Completed",
      images: [
        "/images/orga.png",
        "/images/orga1.png",
        "/images/orga2.png",
        "/images/orga3.png",
      ]
    },
    {
      title: "Virtual University Main Campus",
      client: "Virtual University of Pakistan",
      cost: "PKR 25,405 Million",
      status: "Master planning completed",
      images: [
        "/images/vu.png",
       "/images/vu1.png",
       "/images/v2.png",
       "/images/v3.png",
       "/images/vu2.png",
       "/images/vu4.png",
       "/images/vu5.png",
       
      ]
    },
    {
      title: "Special Children School - Bahria College",
      client: "Bahria College, Pakistan Navy",
      cost: "PKR 450 Million",
      status: "Design stage completed",
      images: [
       "/images/b1.png",
       "/images/b2.png",
       "/images/b3.png",
       "/images/b4.png",
       "/images/b5.png",
       "/images/b6.png",
       "/images/b7.png",
       "/images/b8.png",
      ]
    }
  ];

  return (
    <section>
      <Element name="projects">
        <div className="g7 py-28 max-md:py-16">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="h3 text-p4 mb-6">Key Projects</h2>
              <p className="body-1 max-w-3xl">
                DCS has over 30 Billion PKR worth of building projects at various stages including feasibility study, design, tender, construction and project closure.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-3xl border-2 cursor-pointer transition-all duration-500 ${
                      activeProject === index ? 'border-p3 bg-s1' : 'border-s3 hover:border-s4'
                    }`}
                    onClick={() => setActiveProject(index)}
                  >
                    <h3 className="h6 text-p4 mb-3">{project.title}</h3>
                    <div className="space-y-2 body-3">
                      <p><strong>Client:</strong> {project.client}</p>
                      <p><strong>Cost:</strong> {project.cost}</p>
                      <p><strong>Status:</strong> {project.status}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-s1 rounded-3xl p-8 border-2 border-s3">
                <h3 className="h5 text-p4 mb-6">{projects[activeProject].title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {projects[activeProject].images.map((image, index) => (
                    <div key={index} className="bg-s2 rounded-xl h-32 flex items-center justify-center overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${projects[activeProject].title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Projects;