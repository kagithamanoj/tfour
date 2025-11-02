import React from "react";
import { Link } from "react-router-dom";

// Icon Components using theme color variable
const BrainCircuitIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-[var(--color-primary)]"
  >
    <path d="M12 2a10 10 0 0 0-4.3 19.42" />
    <path d="M12 2a10 10 0 0 1 4.3 19.42" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
    <path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
    <path d="M12 15a6 6 0 0 0 6-6" />
    <path d="M12 9a6 6 0 0 0-6 6" />
  </svg>
);

const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-[var(--color-primary)]"
  >
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const CloudCogIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-[var(--color-primary)]"
  >
    <path d="M12 22a5.52 5.52 0 0 0 5.5-5.5c0-1.63-2.06-3.5-5.5-3.5s-5.5 1.87-5.5 3.5A5.52 5.52 0 0 0 12 22Z" />
    <path d="M12 13.5V11a4 4 0 1 1 4 4h-1.5" />
  </svg>
);

const AppWindowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-[var(--color-primary)]"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 8h20" />
  </svg>
);

const ServiceCard = ({ icon, title, description, items }) => (
  <div
    className="
      p-8 rounded-lg shadow-xl transition-transform duration-300
      bg-[var(--color-card)] border border-[var(--color-border)]
      hover:-translate-y-2
    "
  >
    <div className="flex items-center mb-4">
      {icon}
      <h3
        className="
          text-2xl font-bold ml-4
          text-[var(--color-text)]
        "
      >
        {title}
      </h3>
    </div>
    <p className="mb-6 opacity-85">{description}</p>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="
              h-5 w-5 flex-shrink-0 mr-2 mt-1
              text-[var(--color-primary)]
            "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="opacity-85">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const servicesData = [
    {
      icon: <BrainCircuitIcon />,
      title: "Custom AI Development",
      description:
        "We design and build tailored AI solutions to transform business data into intelligent actions.",
      items: [
        "Generative AI & LLM Apps",
        "Predictive Analytics",
        "Computer Vision",
        "Natural Language Processing",
        "Recommendation Engines",
      ],
    },
    {
      icon: <ZapIcon />,
      title: "AI Integration & Automation",
      description:
        "Integrate artificial intelligence into existing workflows and CRM/ERP systems for peak efficiency.",
      items: [
        "AI Chatbots & Voice Assistants",
        "Intelligent Document Processing",
        "Workflow & RPA Automation",
        "API Integration (OpenAI, Gemini, Claude)",
      ],
    },
    {
      icon: <CloudCogIcon />,
      title: "Cloud & DevOps Excellence",
      description:
        "Robust infrastructure and automation supporting your AI deployments with security and scale.",
      items: [
        "Cloud Migration (Azure, AWS, GCP)",
        "CI/CD Pipeline Automation",
        "Kubernetes & Containerization",
        "MLOps & Model Deployment",
      ],
    },
    {
      icon: <AppWindowIcon />,
      title: "Digital Product Engineering",
      description:
        "Build scalable, intuitive, full-stack web and mobile applications that power your business.",
      items: [
        "Web & Mobile App Development",
        "UI/UX Design",
        "Backend Architecture",
        "Third‑Party Integrations",
      ],
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-[var(--color-bg)] text-[var(--color-text)]
        transition-colors duration-300
      "
    >
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1
            className="
              text-5xl md:text-6xl font-extrabold mb-4
              text-[var(--color-primary)]
            "
          >
            Our Services
          </h1>
          <p className="text-xl opacity-85">
            From AI‑powered applications to cloud engineering, we deliver
            end‑to‑end innovation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2
            className="
              text-4xl font-bold mb-4
              text-[var(--color-primary)]
            "
          >
            Our Approach to Innovation
          </h2>
          <p className="text-lg mb-12 opacity-85">
            We follow a collaborative, proven methodology—delivering success
            from concept to global deployment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {["Discover", "Design", "Develop", "Deploy"].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="
                    h-16 w-16 rounded-full flex items-center justify-center mb-4
                    text-[var(--color-bg)] bg-[var(--color-primary)]
                    font-bold text-2xl
                  "
                >
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold">{step}</h3>
                <p className="mt-2 opacity-80">
                  {[
                    "Research goals, plan strategy.",
                    "Craft intuitive designs.",
                    "Develop, test, refine.",
                    "Deploy securely at scale.",
                  ][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="
              text-3xl font-bold mb-4
              text-[var(--color-primary)]
            "
          >
            Have a project in mind?
          </h2>
          <p className="text-lg opacity-85 mb-8">
            Turn your vision into a reality. Contact us today for your free
            consultation.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
