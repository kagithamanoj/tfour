import React from "react";
import { FaChartBar, FaUser, FaRobot, FaCloud } from "react-icons/fa";

const stats = [
  { label: "GenAI Projects", value: "3", icon: <FaChartBar className="text-[var(--color-primary)]" /> },
  { label: "Enterprise Clients", value: "6", icon: <FaUser className="text-[var(--color-primary)]" /> },
  { label: "AI Models Deployed", value: "9", icon: <FaRobot className="text-[var(--color-primary)]" /> },
  { label: "Cloud Services Running", value: "5", icon: <FaCloud className="text-[var(--color-primary)]" /> },
];

// Diverse projects - All new, no Tinykola!
const projects = [
  {
    name: "FinFlow AI",
    status: "Live",
    description: "Automated finance workflow management platform, powered by advanced GenAI for real-time reporting and compliance (Oct 2025)",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "GenAI Support Bot",
    status: "Live",
    description: "Multilingual generative AI chatbot for enterprise customer support, built on RAG and GPT-4 Vision (Sep 2025)",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "MedSight Vision",
    status: "Testing",
    description: "AI-driven medical imaging analytics platform with deep CNNs for x-ray & MRI diagnostics—now onboarding U.S. healthcare partners (Aug 2025)",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Smart Contracts Analyzer",
    status: "In Progress",
    description: "Automated Ethereum contract auditing using natural language processing and fraud detection algorithms (July 2025)",
    color: "bg-purple-100 text-purple-700",
  },
];

const recentActivities = [
  { id: 1, text: "✔️ Support bot upgraded to GPT-4 Vision; multi-region rollout (Oct 2025)" },
  { id: 2, text: "✔️ Automated FinFlow reporting launched for two new enterprise clients (Sep 2025)" },
  { id: 3, text: "✔️ MedSight Vision received FDA sandbox approval (Aug 2025)" },
];

const Dashboard = () => (
  <section
    className="
      min-h-screen py-10 px-4
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
      flex flex-col
    "
  >
    <div className="max-w-5xl mx-auto">
      <h1
        className="
          text-4xl font-bold mb-3 text-[var(--color-primary)]
        "
      >
        Client Dashboard
      </h1>
      <p className="mb-12 text-base opacity-85">
        Track your deployment progress, live projects, and recent activity from the Tfour Technologies AI ecosystem.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map(({ label, value, icon }) => (
          <div
            key={label}
            className="
              glass-card flex flex-col items-center py-6 px-3
              rounded-xl shadow-md border border-[var(--color-primary)]/20
              bg-[var(--color-card)]/85 backdrop-blur-md
              transition
            "
            style={{ minWidth: 120 }}
          >
            <div className="mb-2 text-2xl">{icon}</div>
            <div className="text-2xl font-bold text-[var(--color-primary)]">{value}</div>
            <div className="opacity-80 text-sm text-center">{label}</div>
          </div>
        ))}
      </div>

      {/* Project Cards */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">Current Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className={`rounded-xl p-5 shadow flex flex-col justify-between
                          border border-[var(--color-border)]
                          ${proj.color} bg-opacity-70
                          transition`}
            >
              <div>
                <div className="text-lg font-extrabold mb-1">{proj.name}</div>
                <div className="text-sm opacity-90 mb-2">{proj.description}</div>
              </div>
              <span className="mt-2 px-3 py-1 text-xs rounded font-bold bg-[var(--color-primary)]/10 text-[var(--color-primary)] w-fit">
                {proj.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div
        className="
          p-6 shadow-xl rounded-xl border border-[var(--color-border)]
          bg-[var(--color-card)]/85
          backdrop-blur-lg
          text-[var(--color-text)]
          transition
        "
      >
        <h2
          className="text-lg font-semibold mb-4 text-[var(--color-primary)]"
        >
          Recent Activity
        </h2>
        <ul className="list-disc list-inside opacity-90">
          {recentActivities.map(({ id, text }) => (
            <li key={id} className="mb-2">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Dashboard;
