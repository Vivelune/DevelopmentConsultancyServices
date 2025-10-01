import { Element } from "react-scroll";
import { useState, useEffect } from "react";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const certifications = [
    {
      title: "ISO 9001 Certification",
      image: "/images/iso-certificate.png",
      description: "Quality Management System Certified"
    },
    {
      title: "SECP Registration",
      image: "/images/SECP.png",
      description: "Registered with Securities and Exchange Commission of Pakistan"
    },
    {
      title: "FBR Registration",
      image: "/images/FBR.png",
      description: "Registered with the Federal Board of Revenue"
    },
    {
      title: "PCATP Registration",
      image: "/images/PCATP.png",
      description: "Professional enlistment in the Category No Limit"
    },
    {
      title: "PEC Registration",
      image: "/images/PEC.png",
      description: "Professional enlistment with Pakistan Engineering Council"
    },
    {
      title: "CDA Registration",
      image: "/images/CDA.png",
      description: "Registered with Capital Development Authority"
    },
    {
      title: "Health & Safety Policy",
      image: "/images/health1.png",
      description: "Comprehensive health and safety certification"
    },
    {
      title: "OHSAS Policy",
      image: "/images/health2.png",
      description: "Achieving High Standard of Occupational Health & Safety"
    },
    {
      title: "Enviromental Policy",
      image: "/images/health3.png",
      description: "Safe and Healthy Workplace For All Stakeholders"
    }
  ];

  const openModal = (image, title) => {
    setSelectedImage({ image, title });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'unset'; // Re-enable scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section>
      <Element name="certifications">
        <div className="container py-28 max-md:py-16">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="h3 text-p4 mb-6">Certifications & Registrations</h2>
            <p className="body-1 max-w-3xl">
              Professional registrations and certifications with major regulatory bodies and organizations across Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="g7 rounded-3xl p-6 border-2 border-s3 hover:border-p3 transition-all duration-500">
                <div 
                  className="bg-s2 rounded-xl h-48 mb-4 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openModal(cert.image, cert.title)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-[140px] max-h-[120px] object-contain"
                  />
                </div>
                <h3 className="h6 text-p4 mb-2">{cert.title}</h3>
                <p className="body-3 text-p5">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
              onClick={closeModal}
            >
              <div 
                className="relative max-w-4xl max-h-full bg-white rounded-lg p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  ✕
                </button>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">
                    {selectedImage.title}
                  </h3>
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="max-w-full max-h-[70vh] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Element>
    </section>
  );
};

export default Certifications;