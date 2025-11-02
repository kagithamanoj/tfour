import React from "react";

const TestimonialCard = ({ quote, author, role, company }) => (
  <div
    className="
      p-8 rounded-xl shadow-xl border
      bg-[var(--color-card)]
      border-[var(--color-border)]
      transition-colors duration-300
    "
  >
    <p className="italic text-lg mb-6 opacity-85">"{quote}"</p>
    <div>
      <p className="font-bold text-[var(--color-text)]">{author}</p>
      <p className="text-[var(--color-primary)] text-sm">
        {role}, {company}
      </p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Tfour transformed our operations. Their AI-driven automation solution cut our manual data entry by 90% and allowed our team to focus on strategic growth. They are true partners, not just developers.",
      author: "Jane Doe",
      role: "COO",
      company: "Innovate Logistics Inc.",
    },
    {
      quote:
        "The custom CRM they built for us was a game-changer. It's intuitive, powerful, and perfectly tailored to our sales process. The project was delivered on time, on budget, and exceeded our expectations.",
      author: "John Smith",
      role: "VP of Sales",
      company: "Future Forward Tech",
    },
    {
      quote:
        "Working with the Tfour team was seamless. Their technical expertise is top-notch, and their ability to translate complex business needs into a functional, elegant cloud solution is unmatched.",
      author: "Emily White",
      role: "Founder & CEO",
      company: "SaaSify Startups",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto text-center px-4">
      <h2
        className="
          text-4xl font-extrabold mb-12
          text-[var(--color-primary)]
          transition-colors duration-300
        "
      >
        Trusted by Industry Leaders
      </h2>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      <p className="text-center opacity-70 mt-8 text-sm">
        Note: Customer names and companies have been changed for
        confidentiality.
      </p>
    </div>
  );
};

export default Testimonials;
