import React from "react";
import { FaChartBar, FaUser, FaRobot, FaCloud } from "react-icons/fa";

const stats = [
  { label: "Active Projects", value: "8", icon: <FaChartBar className="text-[var(--color-primary)]" /> },
  { label: "Registered Users", value: "125", icon: <FaUser className="text-[var(--color-primary)]" /> },
  { label: "AI Models Deployed", value: "4", icon: <FaRobot className="text-[var(--color-primary)]" /> },
  { label: "Cloud Services Active", value: "3", icon: <FaCloud className="text-[var(--color-primary)]" /> },
];

const recentActivities = [
  { id: 1, text: "✔️ New project “Tinykola ERP” started (Oct 2025)" },
  { id: 2, text: "✔️ Last invoice paid (Sep 2025)" },
  { id: 3, text: "✔️ “Web Design Sprint” completed (Aug 2025)" },
];

const Dashboard = () => (
  <section
    className="
      min-h-screen py-10 px-4
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    <div className="max-w-5xl mx-auto">
      <h1
        className="
          text-4xl font-bold mb-10
          text-[var(--color-primary)]
          transition-colors duration-300
        "
      >
        Client Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {stats.map(({ label, value, icon }) => (
          <div
            key={label}
            className="
              flex items-center p-6 shadow-xl rounded-xl
              border border-[var(--color-border)]
              bg-[var(--color-card)]
              text-[var(--color-text)]
              transition-colors duration-300
            "
          >
            <div className="mr-5 text-3xl">{icon}</div>
            <div>
              <div
                className="
                  text-3xl font-bold
                  text-[var(--color-text)]
                "
              >
                {value}
              </div>
              <div className="opacity-70">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div
        className="
          p-6 shadow-xl rounded-xl
          border border-[var(--color-border)]
          bg-[var(--color-card)]
          text-[var(--color-text)]
          transition-colors duration-300
        "
      >
        <h2
          className="
            text-xl font-semibold mb-4
            text-[var(--color-primary)]
          "
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
