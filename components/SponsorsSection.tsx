import {
  sponsors,
  SponsorTier,
  totalRaised,
  SPONSOR_GOAL_AMOUNT,
  progress,
} from "@/data/sponsors";

const SponsorsSection = () => {
  const getTierColor = (tier: SponsorTier) => {
    switch (tier) {
      case "Platinum":
        return "bg-gradient-to-r from-gray-200 to-gray-300 border-gray-400";
      case "Gold":
        return "bg-gradient-to-r from-yellow-200 to-yellow-300 border-yellow-400";
      case "Silver":
        return "bg-gradient-to-r from-gray-300 to-gray-400 border-gray-500";
      case "Bronze":
        return "bg-gradient-to-r from-orange-200 to-orange-300 border-orange-400";
      default:
        return "bg-light-grey border-gray-300";
    }
  };

  const getTierTextColor = (tier: SponsorTier) => {
    switch (tier) {
      case "Platinum":
        return "text-gray-700";
      case "Gold":
        return "text-yellow-800";
      case "Silver":
        return "text-gray-700";
      case "Bronze":
        return "text-orange-800";
      default:
        return "text-gray-700";
    }
  };

  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<SponsorTier, typeof sponsors>);

  const tierOrder: SponsorTier[] = ["Platinum", "Gold", "Silver", "Bronze"];

  return (
    <section
      id="sponsors"
      className="min-h-screen pt-40 pb-20 bg-light-grey"
    >
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Sponsors
        </h2>

        {/* Progress Card */}
        <div className="bg-white rounded-2xl p-8 md:p-10 mb-12 shadow-lg">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Funding Progress
            </h3>
            <p className="text-gray-600">
              Help us reach our goal for GNCTR 2026 in London, ON
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl md:text-3xl font-bold text-baby-blue">
                ${totalRaised.toLocaleString()}
              </span>
              <span className="text-lg text-gray-600">
                of ${SPONSOR_GOAL_AMOUNT.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-light-grey rounded-full h-4 md:h-5 overflow-hidden">
              <div
                className="h-full bg-baby-blue rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <span className="text-xs font-semibold text-white">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Interested in sponsoring? Contact our Finance team!
          </p>
        </div>

        {/* Sponsors by Tier */}
        <div className="space-y-12">
          {tierOrder.map((tier) => {
            const tierSponsors = groupedSponsors[tier] || [];
            if (tierSponsors.length === 0) return null;

            return (
              <div key={tier}>
                <h3
                  className={`text-xl md:text-2xl font-bold mb-6 ${getTierTextColor(
                    tier
                  )}`}
                >
                  {tier} Sponsors
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tierSponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className={`bg-white p-6 rounded-xl border-2 ${getTierColor(
                        tier
                      )} shadow-md hover:shadow-lg transition-shadow duration-200`}
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {sponsor.name}
                      </h4>
                      <p className="text-baby-blue font-semibold">
                        ${sponsor.amount.toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
