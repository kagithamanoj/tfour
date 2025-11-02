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
        is a next-generation technology company committed to revolutionizing
        industries through artificial intelligence, intelligent automation, and
        scalable cloud infrastructure. We partner with visionary enterprises to
        unleash transformative growth, enhance decision-making with data-driven
        insights, and securely automate complex workflows at scale.
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
        Our mission is to democratize advanced AI and cloud technologies, making
        them accessible, ethical, and actionable for businesses of all
        sizes—enabling measurable impact, sustainable innovation, and superior
        user experiences.
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
          Deep expertise in Large Language Models (LLMs), AI-driven automation,
          and multi-cloud architectures.
        </li>
        <li>
          End-to-end project delivery: from strategic consulting and ML model
          development to cloud-native deployment and continuous optimization.
        </li>
        <li>
          Proven impact with enterprise-scale AI solutions spanning healthcare,
          finance, retail, and media sectors.
        </li>
        <li>
          Commitment to transparency, data privacy, and inclusive innovation for
          our clients and partners.
        </li>
      </ul>

      <h2
        className="
          text-2xl font-bold mt-12 mb-4
          text-[var(--color-primary)]
        "
      >
        Our Core Values
      </h2>
      <ul
        className="
          list-disc pl-6 mb-8 text-lg
          opacity-85
        "
      >
        <li>Integrity, transparency, and client-first collaboration</li>
        <li>Continuous learning and technological leadership</li>
        <li>Inclusive innovation and responsible AI ethics</li>
        <li>Delivering measurable business outcomes and ROI</li>
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
        Our diverse team unites software engineers, AI researchers, cloud
        architects, UX designers, and industry consultants. We cultivate a
        culture of curiosity and experimentation, fostering cross-functional
        collaboration to push the boundaries of intelligent automation and
        data-driven insights.
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
        At Tfour, we continuously pioneer solutions harnessing generative
        AI, real-time transcription, and advanced search analytics. Our products
        and projects empower clients to accelerate digital transformation while
        maintaining security, scalability, and ethical AI practices.
      </p>
    </div>
  </section>
);

export default About;
