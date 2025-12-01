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

import GlassCard from "../../components/common/GlassCard";

const Solutions = () => (
  <section
    className="
      section-padding max-w-6xl mx-auto
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    <h1
      className="
        text-4xl font-bold mb-12
        bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent
      "
    >
      Our Solutions
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {solutions.map(({ icon, title, desc }) => (
        <GlassCard
          key={title}
          className="flex flex-col items-center text-center p-6 h-full hover:shadow-blue-500/20 transition-all duration-300"
        >
          <div className="mb-4 p-3 rounded-full bg-blue-500/10 text-blue-400">
            {React.cloneElement(icon, { className: "text-3xl" })}
          </div>
          <h2
            className="
              mb-3 text-xl font-bold
              text-white
            "
          >
            {title}
          </h2>
          <p className="text-gray-300 leading-relaxed">{desc}</p>
        </GlassCard>
      ))}
    </div>
  </section>
);

export default Solutions;
