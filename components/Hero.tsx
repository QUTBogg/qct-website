"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { totalRaised, SPONSOR_GOAL_AMOUNT } from "@/data/sponsors";

const Hero = () => {
  const router = useRouter();

  const goTo = (path: string) => {
    router.push(path);
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-44 pb-20 md:pt-52 md:pb-24 bg-white"
    >
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-baby-blue/10 text-baby-blue rounded-full text-sm font-medium">
                Queen&apos;s University Engineering Design Team
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Queen&apos;s Concrete Toboggan Team
              <span className="text-baby-blue"> (QCT)</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2001, the Queen&apos;s Concrete Toboggan Team is one
              of Queen&apos;s longest-running engineering design teams. With
              over 100 multidisciplinary engineering students, we combine
              hands-on design, concrete materials science, mechanical systems,
              roll cage design, and rigorous testing to compete at the Great
              Northern Concrete Toboggan Race.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => goTo("/sponsors")}
                className="px-8 py-3 bg-baby-blue text-white rounded-lg font-semibold hover:bg-baby-blue/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View Sponsorship Opportunities
              </button>
              <button
                onClick={() => goTo("/team")}
                className="px-8 py-3 border-2 border-baby-blue text-baby-blue rounded-lg font-semibold hover:bg-baby-blue/5 transition-colors duration-200"
              >
                Meet the Team
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/qct-hero.jpg"
              alt="Queen's Concrete Toboggan Team"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Funding Progress */}
        <div className="mt-16 md:mt-20 p-6 bg-light-grey rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-700 font-medium">
              Raised ${totalRaised.toLocaleString()} of $
              {SPONSOR_GOAL_AMOUNT.toLocaleString()} goal
            </span>
            <span className="text-baby-blue font-semibold">
              {Math.round((totalRaised / SPONSOR_GOAL_AMOUNT) * 100)}%
            </span>
          </div>
          <div className="w-full bg-white rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-baby-blue rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(
                  (totalRaised / SPONSOR_GOAL_AMOUNT) * 100,
                  100
                )}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
