"use client";

const TobogganSection = () => {
  return (
    <section
      id="toboggan"
      // remove padding here; ScrollController will add/remove hidden classes
      className="hidden opacity-0 min-h-screen bg-white transition-all duration-300"
    >
      {/* 👇 THIS is the padding that pushes the whole section down below navbar */}
      <div className="pt-56 md:pt-64 w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          The Toboggan
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Overview */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-baby-blue">
              Engineering the fastest, safest sled possible
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our toboggan combines cutting-edge engineering principles with rigorous testing to
              create a competitive racing machine.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Concrete Running Surface</h4>
                <p className="text-gray-600 text-sm">
                  Advanced concrete mix design optimized for speed, durability, and performance on
                  the track.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Roll Cage Design</h4>
                <p className="text-gray-600 text-sm">
                  Lightweight aluminum roll cage engineered for safety and structural integrity while
                  minimizing weight.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Braking System</h4>
                <p className="text-gray-600 text-sm">
                  Precision braking mechanism designed for controlled deceleration and competition
                  performance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Steering & Control</h4>
                <p className="text-gray-600 text-sm">
                  Responsive steering system allowing precise control during high-speed runs.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Testing & Validation</h4>
                <p className="text-gray-600 text-sm">
                  Comprehensive testing protocols ensuring reliability and performance before
                  competition.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Model Placeholder */}
          <div className="relative">
            <div className="bg-light-grey rounded-2xl p-12 md:p-16 aspect-square flex items-center justify-center border-2 border-dashed border-baby-blue/30">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-baby-blue/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-baby-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">3D Model Coming Soon</h4>
                <p className="text-gray-600 text-sm">
                  Interactive 3D visualization will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TobogganSection;
