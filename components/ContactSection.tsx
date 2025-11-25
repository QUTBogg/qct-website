"use client";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen pt-40 pb-20 bg-light-grey"
    >
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 text-center">
          Contact Us
        </h2>

        <p className="max-w-2xl mx-auto text-sm md:text-base lg:text-lg text-gray-700 text-center mb-12">
          For sponsorships, partnerships, or general inquiries about the Queen&apos;s Concrete
          Toboggan Team, reach out to our Captains or Finance & Sponsorship leads below.
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Captains Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-baby-blue/10">
            <h3 className="text-2xl md:text-3xl font-bold text-baby-blue mb-4">
              Captains
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              For general team inquiries, media, and overall event coordination.
            </p>
            <div className="space-y-3 text-gray-800 text-base md:text-lg">
              <p>
                <strong>Thomas Carrie</strong>
              </p>
              <p>
                <strong>Ciaran Henning</strong>
              </p>
              <p className="pt-3">
                <a
                  href="mailto:toboggan@engsoc.queensu.ca"
                  className="text-baby-blue hover:underline font-semibold"
                >
                  toboggan@engsoc.queensu.ca
                </a>
              </p>
            </div>
          </div>

          {/* Finance & Sponsorship Card */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-baby-blue/10">
            <h3 className="text-2xl md:text-3xl font-bold text-baby-blue mb-4">
              Finance &amp; Sponsorship
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              For sponsorship packages, partnerships, and funding-related questions.
            </p>
            <div className="space-y-4 text-gray-800 text-base md:text-lg">
              <div>
                <p>
                  <strong>Evan Wansbrough</strong>
                </p>
                <p>
                  <a
                    href="mailto:21ejw11@queensu.ca"
                    className="text-baby-blue hover:underline font-semibold"
                  >
                    21ejw11@queensu.ca
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <strong>Jordan Raftis</strong>
                </p>
                <p>
                  <a
                    href="mailto:jordan.raftis@queensu.ca"
                    className="text-baby-blue hover:underline font-semibold"
                  >
                    jordan.raftis@queensu.ca
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
