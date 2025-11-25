"use client";

interface Award {
  title: string;
  year: number;
  tier: "gold" | "silver" | "bronze";
}

const awards: Award[] = [
  { title: "1st Place Overall", year: 2017, tier: "gold" },
  { title: "Fastest Toboggan", year: 2017, tier: "gold" },
  { title: "1st Technical Display", year: 2017, tier: "gold" },
  { title: "Best Braking Performance", year: 2019, tier: "gold" },
  { title: "Best Safety", year: 2019, tier: "gold" },
  { title: "2nd Best Steering Performance", year: 2019, tier: "silver" },
];

const getTierStyles = (tier: string) => {
  switch (tier) {
    case "gold":
      return {
        border: "border-yellow-400",
        bg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
        glow: "shadow-yellow-300",
        icon: "text-yellow-600",
        ribbon: "bg-gradient-to-r from-yellow-400 to-yellow-500",
      };
    case "silver":
      return {
        border: "border-gray-400",
        bg: "bg-gradient-to-br from-gray-50 to-gray-100",
        glow: "shadow-gray-300",
        icon: "text-gray-600",
        ribbon: "bg-gradient-to-r from-gray-400 to-gray-500",
      };
    case "bronze":
      return {
        border: "border-orange-400",
        bg: "bg-gradient-to-br from-orange-50 to-orange-100",
        glow: "shadow-orange-300",
        icon: "text-orange-600",
        ribbon: "bg-gradient-to-r from-orange-400 to-orange-500",
      };
    default:
      return {
        border: "border-gray-300",
        bg: "bg-light-grey",
        glow: "shadow-gray-200",
        icon: "text-gray-500",
        ribbon: "bg-baby-blue",
      };
  }
};

const AwardsSection = () => {
  return (
    <section className="min-h-screen pt-44 pb-20 md:pt-52 md:pb-24 bg-gradient-to-b from-white to-light-grey">
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-baby-blue">Awards</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Celebrating our achievements and recognition at the Great Northern
            Concrete Toboggan Race
          </p>
        </div>

        {/* Trophy Case Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {awards.map((award, index) => {
            const styles = getTierStyles(award.tier);
            return (
              <div
                key={index}
                className={`relative group ${styles.bg} rounded-2xl p-8 border-2 ${styles.border} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                {/* Trophy Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-28 h-28 ${styles.icon} flex items-center justify-center relative`}
                  >
                    {/* Trophy Cup */}
                    <svg
                      viewBox="0 0 100 120"
                      fill="currentColor"
                      className="w-full h-full drop-shadow-lg"
                    >
                      {/* Cup Base */}
                      <path d="M20 100 L20 80 Q20 60 30 50 L30 30 Q30 20 40 20 L60 20 Q70 20 70 30 L70 50 Q80 60 80 80 L80 100 Q80 110 70 110 L30 110 Q20 110 20 100 Z" />
                      {/* Cup Handle Left */}
                      <path
                        d="M20 50 Q10 50 10 60 Q10 70 20 70"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                      />
                      {/* Cup Handle Right */}
                      <path
                        d="M80 50 Q90 50 90 60 Q90 70 80 70"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                      />
                      {/* Star on Trophy */}
                      <path
                        d="M50 30 L52 38 L60 38 L53 43 L55 51 L50 46 L45 51 L47 43 L40 38 L48 38 Z"
                        fill="currentColor"
                        opacity="0.8"
                      />
                    </svg>
                  </div>
                </div>

                {/* Ribbon */}
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${styles.ribbon} text-white px-6 py-2 rounded-full shadow-lg`}
                >
                  <span className="font-bold text-sm md:text-base">
                    {award.year}
                  </span>
                </div>

                {/* Award Title */}
                <div className="text-center mt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {award.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        award.tier === "gold"
                          ? "bg-yellow-400"
                          : award.tier === "silver"
                          ? "bg-gray-400"
                          : "bg-orange-400"
                      }`}
                    />
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      {award.tier}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-baby-blue/30 to-transparent opacity-50" />
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-baby-blue mb-2">
              {awards.length}
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Total Awards
            </div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
              {awards.filter((a) => a.tier === "gold").length}
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Gold Awards
            </div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-2">
              {awards.filter((a) => a.tier === "silver").length}
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Silver Awards
            </div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-baby-blue mb-2">
              2
            </div>
            <div className="text-sm md:text-base text-gray-600">
              Competition Years
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

