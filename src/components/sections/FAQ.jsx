import React, { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        border-b py-4 
        border-[var(--color-border)]
        transition-colors duration-300
      "
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full flex justify-between items-center text-left 
          text-lg font-semibold
          text-[var(--color-text)]
          focus:outline-none transition-colors duration-300
        "
      >
        <span>{question}</span>
        <span
          className="
            transform transition-transform duration-300 
            text-[var(--color-primary)]
          "
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div
          className="
            mt-4 px-4 py-4 rounded-lg 
            bg-[var(--color-card)]
            text-[var(--color-text)]
            border border-[var(--color-border)]
            opacity-90
            transition-colors duration-300
          "
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "What kind of technologies do you specialize in?",
      answer:
        "We are full-stack specialists with deep expertise in cloud platforms (Azure, AWS), modern frontend frameworks (React, Angular), and robust backend technologies (Node.js, Spring Boot). Our core focus is leveraging AI and machine learning to build intelligent, scalable solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity, but we follow an agile methodology to deliver value quickly. A typical MVP can be developed in 8-12 weeks, with a detailed project roadmap defined post-discovery phase.",
    },
    {
      question: "What does your project engagement process look like?",
      answer:
        "We start with a free consultation to understand your goals. From there, we move to a discovery and planning phase, followed by iterative design, sprints, and testing. We emphasize transparency with regular updates and demos throughout the project.",
    },
    {
      question: "Do you provide support after the project is launched?",
      answer:
        "Absolutely. We offer flexible post-launch support and maintenance to ensure your application remains secure, updated, and optimal. We see ourselves as long-term partners, not one-time vendors.",
    },
  ];

  return (
    <section
      className="
        py-20 px-4 min-h-screen
        bg-[var(--color-bg)]
        text-[var(--color-text)]
        transition-colors duration-300
      "
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="
            text-4xl font-extrabold text-center mb-12
            text-[var(--color-primary)]
          "
        >
          Frequently Asked Questions
        </h2>

        <div
          className="
            space-y-4 rounded-xl p-8 shadow-xl
            bg-[var(--color-card)]
            border border-[var(--color-border)]
            transition-colors duration-300
          "
        >
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
