"use client";

const TobogganSection = () => {
  return (
    <section
      id="toboggan"
      className="min-h-screen pt-40 pb-20 bg-white"
    >
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          The Toboggan
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Overview */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-baby-blue text-center mb-6">
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
                  Lightweight aluminum roll cage engineered for safety and structural integrity
                  while minimizing weight.
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

          {/* Right Column - 3D Model */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-baby-blue text-center mb-6">
              Our 2026 Design
            </h4>

            <div className="relative">
              <div className="bg-light-grey rounded-2xl p-4 md:p-6 h-80 md:h-96 lg:h-[500px] flex items-center justify-center border-2 border-baby-blue/30">
              
                {/* @ts-ignore */}
                <model-viewer
                  src="/models/toboggan.glb"
                  alt="QCT Toboggan 3D Model"
                  camera-controls
                  auto-rotate
                  shadow-intensity="1"
                  exposure="1"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "transparent"
                  }}
              />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TobogganSection;
