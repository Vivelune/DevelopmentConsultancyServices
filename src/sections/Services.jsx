import { Element } from "react-scroll";

const Services = () => {
  const services = [
    {
      icon: "/images/architecture.png",
      title: "Architecture & Town Planning",
      description: "Professional architectural services and urban planning solutions"
    },
    {
      icon: "/images/structure.png",
      title: "Structural Engineering",
      description: "High-rise, prefabricated and RCC buildings structures design"
    },
    {
      icon: "/images/mechanical.png",
      title: "Mechanical Engineering",
      description: "HVAC and mechanical engineering solutions"
    },
    {
      icon: "/images/electrical.png",
      title: "Electrical Engineering",
      description: "Comprehensive electrical engineering services"
    },
    {
      icon: "/images/construction.png",
      title: "Construction Management",
      description: "Contract administration and construction management"
    },
    {
      icon: "/images/survey.png",
      title: "Survey & Research",
      description: "Professional survey and research services"
    }
  ];

  return (
    <section>
      <Element name="services">
        <div className="g7 py-28 max-md:py-16">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="h3 text-p4 mb-6">Our Services</h2>
              <p className="body-1 max-w-3xl">
                Comprehensive professional services across all aspects of architectural and engineering consultancy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-s1 rounded-3xl p-8 border-2 border-s3 hover:border-p3 transition-all duration-500">
                  <div className="flex items-center mb-6">
                    <img src={service.icon} alt={service.title} className="size-16 mr-4" />
                    <h3 className="h6 text-p4">{service.title}</h3>
                  </div>
                  <p className="body-3 text-p5">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Services;