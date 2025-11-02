import React from "react";
import { FaUtensils, FaRunning, FaDesktop, FaCode } from "react-icons/fa";

const solutions = [
  {
    icon: <FaUtensils className="text-3xl text-[var(--color-primary)]" />,
    title: "Restaurant Technology",
    desc: "POS, online ordering, kitchen automation, customer analytics",
  },
  {
    icon: <FaRunning className="text-3xl text-[var(--color-primary)]" />,
    title: "Sports Platforms",
    desc: "Athlete tracking, fan engagement, tournament management, live scoring",
  },
  {
    icon: <FaDesktop className="text-3xl text-[var(--color-primary)]" />,
    title: "Web Design & Development",
    desc: "Responsive websites, e-commerce, UI/UX consulting, brand identity",
  },
  {
    icon: <FaCode className="text-3xl text-[var(--color-primary)]" />,
    title: "Custom Software",
    desc: "Enterprise apps, API development, cloud migration, mobile applications",
  },
];

const Solutions = () => (
  <section
    className="
      section-padding max-w-6xl mx-auto
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    <h1
      className="
        text-4xl font-bold mb-12
        text-[var(--color-primary)]
      "
    >
      Our Solutions
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {solutions.map(({ icon, title, desc }) => (
        <div
          key={title}
          className="
            card flex flex-col items-center text-center
            bg-[var(--color-card)]
            border border-[var(--color-border)]
            transition hover:-translate-y-1 hover:shadow-lg
          "
        >
          {icon}
          <h2
            className="
              mt-4 mb-2 text-xl font-bold
              text-[var(--color-text)]
            "
          >
            {title}
          </h2>
          <p className="opacity-85">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Solutions;
