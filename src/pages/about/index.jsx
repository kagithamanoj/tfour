import React from "react";

const About = () => (
  <section
    className="
      min-h-screen 
      py-20
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    <div className="max-w-4xl mx-auto px-4">
      {/* USA Badge with Flag */}
      <div className="mb-8 flex flex-col md:flex-row items-center gap-4 justify-center">
        <span className="
          text-lg md:text-xl font-extrabold text-white px-5 py-2 rounded-full shadow-lg 
          inline-block uppercase tracking-wider"
          style={{ background: 'linear-gradient(90deg,#174ea6 80%,#e94444 110%)', letterSpacing: '2px', border: '3px solid #174ea6' }}
        >
          <span className="mr-2 align-middle" role="img" aria-label="USA Flag">
            🇺🇸
          </span>
          Proudly Engineered in the USA
        </span>
        <span className="text-base text-[var(--color-primary)] font-semibold uppercase tracking-wide">
          Forging America’s Next-Tech Future
        </span>
      </div>

      <h1
        className="
          text-5xl font-extrabold mb-8
          text-[var(--color-primary)]
        "
      >
        About Tfour Technologies
      </h1>

      <p
        className="
          mb-8 text-xl leading-relaxed
          opacity-90
        "
      >
        <span className="font-semibold text-[var(--color-primary)]">
          Tfour Technologies
        </span>{" "}
        is a proudly American, next-generation technology company transforming today’s industries through artificial intelligence, automation, and secure cloud infrastructure. From our US headquarters, we partner with visionary enterprises nationwide to unleash transformational growth, drive competitive advantage, and strengthen American technological leadership on the world stage.
      </p>

      <h2
        className="
          text-2xl font-bold mt-12 mb-4
          text-[var(--color-primary)]
        "
      >
        Our Mission
      </h2>
      <p
        className="
          mb-8 text-lg leading-relaxed
          opacity-80
        "
      >
        To advance America’s innovation edge by democratizing advanced AI and cloud technology—so every business can thrive with measurable impact, ethical responsibility, and sustainable growth. Tfour engineers solutions here at home that make a difference everywhere.
      </p>

      <h2
        className="
          text-2xl font-bold mt-12 mb-4
          text-[var(--color-primary)]
        "
      >
        Why Choose Tfour?
      </h2>
      <ul
        className="
          list-disc pl-6 mb-8 text-lg
          opacity-85
        "
      >
        <li>
          Deep expertise in generative AI, LLMs, automation, and multi-cloud architectures, cultivated by a cross-disciplinary US-based team.
        </li>
        <li>
          True end-to-end project delivery for American businesses: from strategic consulting and custom ML R&D to secure cloud deployment and continuous optimization.
        </li>
        <li>
          Proven impact across core sectors—healthcare, finance, retail, sports, and technology—accelerating digital transformation for the US market.
        </li>
        <li>
          Fierce commitment to transparency, data privacy, compliance, and responsible innovation “Made in the USA”.
        </li>
      </ul>

      <h2
        className="
          text-2xl font-bold mt-12 mb-4
          text-[var(--color-primary)]
        "
      >
        Core Values at Tfour
      </h2>
      <ul
        className="
          list-disc pl-6 mb-8 text-lg
          opacity-85
        "
      >
        <li>Integrity, trust, and true collaboration with every US client</li>
        <li>Continuous learning, leadership, and American innovation spirit</li>
        <li>Ethical, inclusive, and secure AI for all</li>
        <li>Measurable outcomes and real business value—at home and abroad</li>
      </ul>

      <h2
        className="
          text-2xl font-bold mt-12 mb-4
          text-[var(--color-primary)]
        "
      >
        Our Team
      </h2>
      <p
        className="
          mb-8 text-lg leading-relaxed
          opacity-90
        "
      >
        Our diverse, US-based team unites software engineers, AI researchers, cloud architects, and consultants forged at top American institutions and enterprises. With a culture of curiosity and tenacity, we push boundaries and deliver practical, real-world AI results.
      </p>

      <h2
        className="
          text-2xl font-bold mt-12 mb-4
          text-[var(--color-primary)]
        "
      >
        Innovation & Impact
      </h2>
      <p
        className="
          mb-8 text-lg leading-relaxed
          opacity-85
        "
      >
        At Tfour, we pioneer generative AI, real-time analytics, and secure automation that fuel US progress and business growth. Every solution is engineered for performance, security, and positive American impact—empowering clients to lead in the era of digital transformation.
      </p>
    </div>
  </section>
);

export default About;
