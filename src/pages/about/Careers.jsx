import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown, FaBriefcase, FaMapMarkerAlt, FaClock, FaCheckCircle,
  FaLaptopCode, FaBullhorn, FaPaintBrush, FaGraduationCap,
  FaHeartbeat, FaGlobeAmericas, FaCoffee, FaMoneyBillWave, FaRocket
} from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

const categories = [
  { id: "engineering", label: "Engineering", icon: <FaLaptopCode /> },
  { id: "marketing", label: "Marketing", icon: <FaBullhorn /> },
  { id: "design", label: "Design", icon: <FaPaintBrush /> },
  { id: "internships", label: "Internships", icon: <FaGraduationCap /> },
];

const benefits = [
  { icon: <FaGlobeAmericas className="text-blue-400" />, title: "Remote-First", desc: "Work from anywhere in the US. We focus on output, not hours in a chair." },
  { icon: <FaMoneyBillWave className="text-green-400" />, title: "Competitive Pay & Equity", desc: "Top-tier salary packages and meaningful stock options in a high-growth startup." },
  { icon: <FaHeartbeat className="text-red-400" />, title: "100% Health Coverage", desc: "Premium medical, dental, and vision insurance for you and your dependents." },
  { icon: <FaCoffee className="text-yellow-400" />, title: "Learning Stipend", desc: "$2,000/year for conferences, courses, and books to keep your skills sharp." },
];

const openings = {
  engineering: [
    {
      id: "eng-1",
      title: "Senior Full Stack Engineer",
      location: "Remote (US)",
      type: "Full-time",
      desc: "Architect and build scalable web applications using React, Node.js, and AWS. You'll lead major feature development and mentor junior engineers.",
      responsibilities: [
        "Design and implement high-performance APIs and UI components.",
        "Optimize database queries and serverless architecture cost/performance.",
        "Lead code reviews and enforce best practices.",
        "Collaborate with product and design to define roadmap."
      ],
      requirements: [
        "5+ years of experience with React and Node.js.",
        "Deep knowledge of AWS (Lambda, DynamoDB, API Gateway).",
        "Experience with TypeScript and modern build tools.",
        "Strong problem-solving skills and ownership mindset."
      ]
    },
    {
      id: "eng-2",
      title: "Lead AI Engineer",
      location: "San Francisco / Remote",
      type: "Full-time",
      desc: "Push the boundaries of Generative AI. You'll fine-tune LLMs, build RAG pipelines, and deploy autonomous agents for enterprise clients.",
      responsibilities: [
        "Fine-tune open-source LLMs (Llama 3, Mistral) for specific domains.",
        "Build and optimize vector search pipelines (Pinecone, Milvus).",
        "Develop frameworks for autonomous agent reasoning and tool use.",
        "Stay up-to-date with the latest AI research papers."
      ],
      requirements: [
        "MS/PhD in CS/AI or equivalent experience.",
        "Strong proficiency in Python, PyTorch, and LangChain.",
        "Experience deploying models to production (vLLM, TGI).",
        "Understanding of transformer architecture and attention mechanisms."
      ]
    },
    {
      id: "eng-3",
      title: "Cloud DevOps Architect",
      location: "Remote (US)",
      type: "Full-time",
      desc: "Build the infrastructure that powers our AI revolution. Focus on security, scalability, and developer experience.",
      responsibilities: [
        "Manage multi-cloud infrastructure (AWS, Azure) using Terraform.",
        "Build robust CI/CD pipelines with GitHub Actions.",
        "Implement comprehensive monitoring and alerting (Prometheus/Grafana).",
        "Ensure SOC2 and HIPAA compliance across all systems."
      ],
      requirements: [
        "5+ years of DevOps/SRE experience.",
        "Expertise in Kubernetes (EKS/AKS) and Docker.",
        "Strong scripting skills (Bash, Python, Go).",
        "Experience with security hardening and compliance automation."
      ]
    },
    {
      id: "eng-4",
      title: "QA Automation Engineer",
      location: "Remote (US)",
      type: "Full-time",
      desc: "Ensure our software is bulletproof. You'll build automated test suites that catch bugs before they ever reach production.",
      responsibilities: [
        "Develop end-to-end test frameworks using Cypress/Playwright.",
        "Integrate automated testing into CI/CD pipelines.",
        "Perform load and performance testing (k6, JMeter).",
        "Collaborate with devs to reproduce and fix complex issues."
      ],
      requirements: [
        "3+ years of QA automation experience.",
        "Strong JavaScript/TypeScript coding skills.",
        "Experience testing complex single-page applications.",
        "Detail-oriented with a passion for quality."
      ]
    }
  ],
  marketing: [
    {
      id: "mkt-1",
      title: "Product Marketing Manager",
      location: "New York / Remote",
      type: "Full-time",
      desc: "Own the narrative. You'll define how we position our AI products to the market and drive adoption through compelling storytelling.",
      responsibilities: [
        "Develop product positioning and messaging strategies.",
        "Create sales enablement assets (decks, one-pagers, case studies).",
        "Plan and execute product launches.",
        "Conduct competitive analysis and market research."
      ],
      requirements: [
        "4+ years of PMM experience in B2B SaaS.",
        "Exceptional writing and storytelling skills.",
        "Ability to translate technical features into business value.",
        "Experience working with sales and product teams."
      ]
    },
    {
      id: "mkt-2",
      title: "Growth Marketing Manager",
      location: "Remote (US)",
      type: "Full-time",
      desc: "Drive our user acquisition engine. You'll experiment with channels, optimize funnels, and scale our lead generation efforts.",
      responsibilities: [
        "Manage paid acquisition campaigns (LinkedIn, Google Ads).",
        "Optimize website conversion rates (CRO) and landing pages.",
        "Set up and manage marketing automation workflows (HubSpot).",
        "Analyze data to identify growth opportunities."
      ],
      requirements: [
        "3+ years of growth marketing experience.",
        "Strong analytical skills and proficiency with GA4/Mixpanel.",
        "Experience with B2B lead generation tactics.",
        "Results-driven mindset."
      ]
    },
    {
      id: "mkt-3",
      title: "Content Strategy Lead",
      location: "Remote (US)",
      type: "Full-time",
      desc: "Be the voice of Tfour. You'll lead our content efforts, from technical blog posts to thought leadership pieces.",
      responsibilities: [
        "Develop and execute a comprehensive content calendar.",
        "Write and edit high-quality blog posts, whitepapers, and newsletters.",
        "Manage freelance writers and content contributors.",
        "Optimize content for SEO and organic reach."
      ],
      requirements: [
        "5+ years of content marketing experience.",
        "Strong portfolio of B2B tech content.",
        "Understanding of SEO best practices.",
        "Ability to simplify complex technical topics."
      ]
    }
  ],
  design: [
    {
      id: "des-1",
      title: "Senior Product Designer",
      location: "Remote (US)",
      type: "Full-time",
      desc: "Shape the future of our products. You'll design intuitive, beautiful interfaces for complex AI workflows.",
      responsibilities: [
        "Lead end-to-end design process from discovery to handoff.",
        "Create high-fidelity prototypes in Figma.",
        "Maintain and evolve our design system.",
        "Conduct user research and usability testing."
      ],
      requirements: [
        "5+ years of product design experience.",
        "Strong portfolio showcasing complex web applications.",
        "Proficiency in Figma and prototyping tools.",
        "Experience working closely with engineers."
      ]
    },
    {
      id: "des-2",
      title: "UI/UX Designer",
      location: "Remote (US)",
      type: "Full-time",
      desc: "Craft delightful user experiences. You'll focus on the details that make our software a joy to use.",
      responsibilities: [
        "Design user flows, wireframes, and visual interfaces.",
        "Create custom icons and illustrations.",
        "Collaborate with the marketing team on brand assets.",
        "Ensure design consistency across all touchpoints."
      ],
      requirements: [
        "3+ years of UI/UX design experience.",
        "Strong visual design skills and attention to detail.",
        "Experience with responsive design principles.",
        "Passion for creating polished, modern interfaces."
      ]
    }
  ],
  internships: [
    {
      id: "int-1",
      title: "AI Research Intern (Summer 2025)",
      location: "Remote (US)",
      type: "Internship",
      desc: "Work alongside top AI researchers. You'll explore new model architectures and contribute to real-world R&D projects.",
      responsibilities: [
        "Conduct literature reviews and reproduce research papers.",
        "Experiment with model fine-tuning and evaluation.",
        "Build prototypes to demonstrate new capabilities.",
        "Present findings to the engineering team."
      ],
      requirements: [
        "Currently pursuing MS/PhD in CS, AI, or Math.",
        "Strong Python coding skills.",
        "Familiarity with PyTorch/TensorFlow.",
        "Curiosity and willingness to learn."
      ]
    },
    {
      id: "int-2",
      title: "Frontend Engineering Intern",
      location: "Remote (US)",
      type: "Internship",
      desc: "Learn how to build production-grade software. You'll ship real code that impacts thousands of users.",
      responsibilities: [
        "Build and test UI components using React.",
        "Fix bugs and improve application performance.",
        "Participate in code reviews and agile ceremonies.",
        "Collaborate with senior engineers on feature development."
      ],
      requirements: [
        "Currently pursuing BS in CS or related field.",
        "Experience with JavaScript/React.",
        "Basic understanding of git and web development.",
        "Eager to learn best practices."
      ]
    }
  ]
};

const JobCard = ({ job, expanded, onToggle }) => {
  return (
    <GlassCard className={`transition-all duration-500 overflow-hidden ${expanded ? 'border-blue-500/50 bg-blue-900/10' : 'hover:bg-white/5'}`}>
      <div
        className="p-6 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        onClick={onToggle}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-white">{job.title}</h3>
            {job.type === "Internship" && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/20 uppercase tracking-wider">
                Internship
              </span>
            )}
            {job.location.includes("San Francisco") && (
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/20 uppercase tracking-wider">
                Hub
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-2">
            <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-blue-400" /> {job.location}</span>
            <span className="flex items-center gap-1"><FaClock className="text-pink-400" /> {job.type}</span>
          </div>
          {!expanded && (
            <p className="text-gray-400 text-sm mt-2 line-clamp-1">{job.desc}</p>
          )}
        </div>
        <button
          className={`p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors ${expanded ? 'rotate-180' : ''}`}
        >
          <FaChevronDown className="text-blue-400" />
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-8 border-t border-white/10 pt-6">
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {job.desc}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                        <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                    Requirements
                  </h4>
                  <ul className="space-y-3">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end">
                <a
                  href="#apply-form"
                  className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20"
                >
                  Apply for this Role
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
};

const Careers = () => {
  const [activeTab, setActiveTab] = useState("engineering");
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    about: "",
  });
  const [loading, setLoading] = useState(false);

  const toggleJob = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="min-h-screen text-[var(--color-text)] bg-[#0F172A] pb-20">
      {/* Hero Section */}
      <div className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold text-sm tracking-wide uppercase flex items-center gap-2">
                <FaRocket /> We are Hiring
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join the Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
              We're building the intelligence layer of the future.
              Come do the best work of your life with a team that refuses to settle for "good enough."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="p-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center text-2xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400">{benefit.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Job Listings */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400">Find the role that fits your superpowers.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setExpandedJobId(null);
                }}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300
                  ${activeTab === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="space-y-4 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {openings[activeTab].map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    expanded={expandedJobId === job.id}
                    onToggle={() => toggleJob(job.id)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Application Form */}
        <div id="apply-form" className="max-w-3xl mx-auto">
          <GlassCard className="p-10 border-t-4 border-t-blue-500">
            <h2 className="text-3xl font-bold mb-2 text-center text-white">
              Ready to Apply?
            </h2>
            <p className="text-center text-gray-400 mb-8">
              Don't see a perfect fit? Drop your resume anyway. We're always looking for talent.
            </p>

            {!submitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Role of Interest</label>
                  <select
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none appearance-none"
                  >
                    <option value="" className="bg-slate-900">Select a position...</option>
                    {Object.values(openings).flat().map((job) => (
                      <option key={job.id} value={job.title} className="bg-slate-900">
                        {job.title}
                      </option>
                    ))}
                    <option value="Other" className="bg-slate-900">Other / General Application</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Why Tfour?</label>
                  <textarea
                    name="about"
                    rows={4}
                    required
                    value={formData.about}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                    placeholder="Tell us what drives you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending Application..." : "Submit Application"}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-12 rounded-2xl bg-green-500/10 border border-green-500/20 text-center"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
                  <FaCheckCircle className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                <p className="text-gray-300">
                  Thanks for throwing your hat in the ring, {formData.name}.<br />
                  Our team will review your profile and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-400 hover:text-blue-300 font-medium"
                >
                  Submit another application
                </button>
              </motion.div>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Careers;
