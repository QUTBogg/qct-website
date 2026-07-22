"use client";

import Image from "next/image";
import { teamMembers, RoleType } from "@/data/team";

// Helper function to convert name to image filename
// Files have double .jpg.jpg extension
const getNameToImagePath = (name: string): string => {
  return `/headshots/${name.toLowerCase().replace(/\s+/g, "-")}.jpg.jpg`;
};

const TeamSection = () => {
  const leadershipRoles: RoleType[] = [
    "Captain",
    "Concrete Head",
    "Mechanical Head",
    "Ski Profile Head",
    "Finance Head",
    "Spirit Head",
    "Tech Ex Head",
    "Grad Advisor",
  ];

  const leadership = teamMembers.filter((member) =>
    leadershipRoles.includes(member.role)
  );

  const generalMembers = teamMembers.filter(
    (member) => member.role === "General Member"
  );

  const getRoleColor = (role: RoleType) => {
    switch (role) {
      case "Captain":
        return "bg-baby-blue text-white";
      case "Concrete Head":
      case "Mechanical Head":
      case "Ski Profile Head":
      case "Finance Head":
        return "bg-baby-blue/20 text-baby-blue";
      case "Tech Ex Head":
      case "Spirit Head":
      case "Grad Advisor":
        return "bg-baby-blue/10 text-baby-blue";
      default:
        return "bg-light-grey text-gray-700";
    }
  };

  return (
    <section
      id="team"
      className="min-h-screen pt-40 pb-20 bg-light-grey"
    >
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Team
        </h2>

        {/* Leadership Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Leadership
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {leadership.map((member, index) => {
              const imagePath = getNameToImagePath(member.name);
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 text-center"
                >
                  {/* Headshot */}
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-baby-blue/20 shadow-md bg-light-grey">
                    <Image
                      src={imagePath}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 128px"
                    />
                  </div>

                  {/* Role Badge */}
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${getRoleColor(
                      member.role
                    )}`}
                  >
                    {member.role}
                  </div>

                  {/* Name */}
                  <h4 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* General Members */}
        {generalMembers.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              General Members
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {generalMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
                >
                  <div
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${getRoleColor(
                      member.role
                    )}`}
                  >
                    {member.role}
                  </div>

                  <h4 className="text-sm font-medium text-gray-900">
                    {member.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
