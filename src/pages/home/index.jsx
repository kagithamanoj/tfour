import React from "react";
import { Link } from "react-router-dom";

// AI-focused components
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";
import Newsletter from "../../components/sections/Newsletter";
import Testimonials from "../../components/sections/Testimonials";
import { FaChartBar, FaUser, FaRobot, FaCloud } from "react-icons/fa";

// Dashboard data
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

const Home = () => (
  <div
    className="
      relative min-h-screen
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    {/* Optional Overlay Pattern */}
    <div
      className="
        absolute inset-0 
        bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2Fsvg%22%3E%3Cg%20fill%3D%22%23cccccc%22%20fill-opacity%3D%220.04%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020zM40%2040V20L20%2040z%22/%3E%3C/g%3E%3C/svg%3E')]
        opacity-30 pointer-events-none
      "
    ></div>

    <div className="relative z-10">
      {/* HERO Section */}
      <Hero />

      {/* Features Section */}
      <section
        className="
          py-20
          bg-[var(--color-card)]
          text-[var(--color-text)]
          border-t border-[var(--color-border)]
          transition-colors duration-300
        "
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14 text-center">
            <h2
              className="
                text-5xl font-extrabold mb-4
                text-[var(--color-primary)]
              "
            >
              Your End-to-End AI Partner
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl mb-2 opacity-85">
              From discovery to deployment, Tfour drives successful AI initiatives — combining data expertise, 
              engineering rigor, and cloud scalability.
            </p>
          </div>
          <Features />
        </div>
      </section>

      {/* Embedded Dashboard Snapshot Section */}
      <section
        className="
          py-20
          bg-[var(--color-bg)]
          text-[var(--color-text)]
          border-t border-b border-[var(--color-border)]
          transition-colors duration-300
        "
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-3">
              Tfour Insights Dashboard
            </h2>
            <p className="text-lg opacity-85 max-w-2xl mx-auto">
              A quick overview of ongoing projects, platform activity, and deployment metrics —
              showcasing the heartbeat of Tfour's ecosystem.
            </p>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {stats.map(({ label, value, icon }) => (
              <div
                key={label}
                className="
                  flex items-center p-6 shadow-lg rounded-xl
                  border border-[var(--color-border)]
                  bg-[var(--color-card)]
                  text-[var(--color-text)]
                  transition
                "
              >
                <div className="mr-5 text-3xl">{icon}</div>
                <div>
                  <div className="text-3xl font-bold text-[var(--color-text)]">{value}</div>
                  <div className="opacity-70">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div
            className="
              p-6 shadow-lg rounded-xl
              border border-[var(--color-border)]
              bg-[var(--color-card)]
              text-[var(--color-text)]
              transition
            "
          >
            <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
              Recent Activity
            </h3>
            <ul className="list-disc list-inside opacity-90">
              {recentActivities.map(({ id, text }) => (
                <li key={id} className="mb-2">
                  {text}
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <Link
                to="/contact"
                className="
                  inline-block px-6 py-2 btn-primary text-base rounded-md font-semibold mt-2
                "
              >
                Discuss Your Project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tfour AI */}
      <section
        className="
          pt-16 pb-4
          bg-[var(--color-bg)]
          text-[var(--color-text)]
          transition-colors duration-300
        "
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="
              text-3xl font-bold mb-4
              text-[var(--color-primary)]
            "
          >
            Why Tfour AI?
          </h2>
          <p className="font-medium mb-6 text-lg opacity-85">
            We combine deep AI development and DevOps to build intelligent, reliable, and scalable applications that deliver real results.
          </p>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-lg font-semibold mb-10">
            <div className="flex items-center justify-center">
              <span className="text-[var(--color-primary)] mr-2 text-2xl">✓</span>
              <span>Expertise in Large Language Models (LLMs)</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-[var(--color-primary)] mr-2 text-2xl">✓</span>
              <span>End-to-end AI project implementation</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-[var(--color-primary)] mr-2 text-2xl">✓</span>
              <span>Rapid deployment and continuous improvement</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-[var(--color-primary)] mr-2 text-2xl">✓</span>
              <span>Transparent process with measurable ROI</span>
            </div>
          </div>

          {/* Newsletter Component */}
          <div className="mt-2 mx-auto max-w-xl">
            <Newsletter />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="
          py-12 
          bg-[var(--color-card)]
          text-[var(--color-text)]
          border-t border-[var(--color-border)]
          transition
        "
      >
        <Testimonials />
      </section>
    </div>
  </div>
);

export default Home;
