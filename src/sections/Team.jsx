import { Element } from "react-scroll";

const Team = () => {
  const teamMembers = [
    {
      name: "Athar Saeed",
      position: "Principal Architect",
      experience: "25+ years",
      qualification: "B. Arch from NCA, Lahore"
    },
    {
      name: "Dr. Aftab Khan",
      position: "Principal Structure Engineer",
      experience: "10+ years",
      qualification: "PhD (Structure) from UET Peshawar"
    },
    {
      name: "Ghazanfar Ullah Khan",
      position: "Principal Mechanical Engineer",
      experience: "30+ years",
      qualification: "BSc. (Mech) from UET Lahore"
    },
    {
      name: "Tahir Mehmood",
      position: "Principal Electrical Engineer",
      experience: "25+ years",
      qualification: "BSc. (Elec.) from UET Taxila"
    },
    {
      name: "Jahanzeb Khan",
      position: "Principal Engineer (Civil)",
      experience: "25+ years",
      qualification: "BSc. (Civil) from UET Lahore"
    },
    {
      name: "Uzma Athar",
      position: "PI - Survey & Research",
      experience: "25+ years",
      qualification: "M.PH (Boston University, USA)"
    }
  ];

  return (
    <section>
      <Element name="team">
        <div className="container py-28 max-md:py-16">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="h3 text-p4 mb-6">Our Core Team</h2>
            <p className="body-1 max-w-3xl">
              Meet our experienced principals and core team members with diverse national and international expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="g7 rounded-3xl p-8 border-2 border-s3 hover:border-p3 transition-all duration-500">
                <h3 className="h5 text-p4 mb-2">{member.name}</h3>
                <p className="body-2 text-p3 mb-3">{member.position}</p>
                <div className="space-y-2">
                  <p className="body-3"><strong>Experience:</strong> {member.experience}</p>
                  <p className="body-3"><strong>Qualification:</strong> {member.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Team;