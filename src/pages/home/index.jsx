import React from "react";
import Hero from "../../components/sections/Hero";
import Features from "../../components/sections/Features";
import Newsletter from "../../components/sections/Newsletter";

const Home = () => (
  <div
    className="
      relative min-h-screen
      flex flex-col
      bg-[var(--color-bg)]
      text-[var(--color-text)]
      transition-colors duration-300
    "
  >
    {/* Futuristic Overlay Pattern - same as Hero */}
    <div className="
      absolute inset-0 pointer-events-none
      bg-gradient-to-tr from-[var(--color-primary)]/5 to-transparent
      z-0
    ">
      {/* Optional subtle geometric pattern */}
      <div className="
        absolute inset-0 
        bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww%2Ew3%2Eorg%2Fsvg%22%3E%3Cg%20fill%3D%22%23cccccc%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020zM40%2040V20L20%2040z%22/%3E%3C/g%3E%3C/svg%3E')]
      " />
    </div>
    
    <div className="relative z-10">
      {/* HERO Section */}
      <Hero />

      {/* AI Features Snapshot */}
      <section className="pt-16 pb-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-primary)]">
            Discover Our Gen AI Capabilities
          </h2>

          {/* Tfour Innovations Blurb—matches Scalable stuff font/style */}
          <p className="max-w-2xl mx-auto text-base md:text-lg opacity-80 mb-8">
            <span className="font-normal">
              Where imagination meets implementation. We power bold enterprises with AI agents that learn, adapt, and collaborate, transforming data into insights, and strategy into measurable action. At Tfour, innovation isn’t an add-on, it’s our foundation, woven tightly into every scalable solution we build.
            </span>
          </p>

          <p className="max-w-2xl mx-auto text-base md:text-lg opacity-80 mb-8">
            Scalable cloud AI, custom workflows, advanced data automation — 
            built for transformative possibilities.
          </p>
          <Features />
        </div>
      </section>

      {/* Simple Newsletter CTA */}
      <section className="pt-10 pb-20 bg-transparent">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Newsletter />
        </div>
      </section>
    </div>
  </div>
);

export default Home;
