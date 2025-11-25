const AboutSection = () => {
  const eventCards = [
    {
      title: "Technical Exhibition",
      description: "Showcase of engineering design and innovation",
    },
    {
      title: "Race Day",
      description: "High-speed competition on the concrete track",
    },
    {
      title: "Spirit Events",
      description: "Team spirit and camaraderie competitions",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 md:py-24 bg-white">
      <div className="w-full max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto px-3 sm:px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left - About QCT */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-baby-blue">About QCT</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Founded 2001</strong> - One of Queen's longest-running design teams
              </p>
              <p>
                <strong>100+ multidisciplinary members</strong> - Engineering students from across
                disciplines working together
              </p>
              <p>
                <strong>Innovation leaders</strong> - Pioneering technologies including:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li>CFRP (Carbon Fiber Reinforced Polymer) integration</li>
                <li>Advanced aluminum roll cage design</li>
                <li>Responsive steering systems</li>
              </ul>
              <p>
                <strong>Competitive excellence</strong> - History of podium finishes at GNCTR
              </p>
            </div>
          </div>

          {/* Right - About GNCTR */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-baby-blue">About GNCTR</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                The <strong>Great Northern Concrete Toboggan Race (GNCTR)</strong> is the largest
                and longest-running engineering competition in Canada.
              </p>
              <p>
                Teams from across the country design, build, and race concrete-running toboggans,
                competing across multiple categories:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li>Race performance</li>
                <li>Braking systems</li>
                <li>Team spirit</li>
                <li>Technical presentations</li>
                <li>Concrete mix design</li>
              </ul>
              <p className="pt-2">
                <strong>GNCTR 2026</strong> will be held in <strong>London, ON</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {eventCards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-light-grey rounded-xl hover:shadow-lg transition-shadow duration-200"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h4>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
