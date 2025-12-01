import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaSearch, FaQuestionCircle, FaCogs, FaShieldAlt, FaHandshake } from "react-icons/fa";
import GlassCard from "../common/GlassCard";

const faqCategories = [
  { id: "general", label: "General & Company", icon: <FaQuestionCircle /> },
  { id: "services", label: "Services & Solutions", icon: <FaCogs /> },
  { id: "technical", label: "Technical & Security", icon: <FaShieldAlt /> },
  { id: "engagement", label: "Engagement & Process", icon: <FaHandshake /> },
];

const faqData = {
  general: [
    {
      q: "What is Tfour Technologies?",
      a: "Tfour Technologies is a US-based, next-generation technology firm specializing in Artificial Intelligence, Cloud Engineering, and Custom Software Development. We partner with enterprises to build autonomous agents, scalable cloud infrastructure, and transformative digital products."
    },
    {
      q: "Where are you located?",
      a: "We are proudly headquartered in the United States. All our engineering, design, and project management teams are US-based, ensuring high-quality communication, time-zone alignment, and adherence to American data privacy standards."
    },
    {
      q: "Which industries do you serve?",
      a: "We serve a diverse range of sectors including Healthcare (HIPAA compliant AI), Finance (FinTech & Fraud Detection), Retail (E-commerce & Personalization), Manufacturing (Predictive Maintenance), and Logistics (Supply Chain Optimization)."
    },
    {
      q: "Do you work with startups or only large enterprises?",
      a: "We work with both! We help ambitious startups build scalable MVPs and foundational tech, while also partnering with Fortune 500 enterprises on complex digital transformation and AI integration initiatives."
    },
    {
      q: "What makes Tfour different from other dev shops?",
      a: "Unlike traditional dev shops that just 'write code', we are strategic innovation partners. We combine deep R&D in Generative AI with enterprise-grade engineering discipline. Our 'Proudly Engineered in the USA' commitment guarantees quality, security, and intellectual property protection."
    },
    {
      q: "Are you hiring?",
      a: "Yes, we are always looking for top-tier talent in AI research, full-stack engineering, and cloud architecture. Check our Careers page for current openings."
    },
    {
      q: "How can I contact you for a partnership?",
      a: "You can reach out via our Contact page, email us directly at partnerships@tfour.tech, or schedule a discovery call through our website. We typically respond within 24 hours."
    }
  ],
  services: [
    {
      q: "What AI services do you offer?",
      a: "Our AI capabilities include Custom LLM Development, RAG (Retrieval-Augmented Generation) Systems, Computer Vision (Object Detection), Voice Cloning & Synthesis, and Autonomous AI Agents for workflow automation."
    },
    {
      q: "Can you build mobile applications?",
      a: "Yes, we build high-performance native (iOS/Swift, Android/Kotlin) and cross-platform (React Native, Flutter) mobile applications designed for scalability and superior user experience."
    },
    {
      q: "Do you offer Cloud Migration services?",
      a: "Absolutely. We specialize in migrating legacy on-premise systems to the cloud (AWS, Azure, GCP). We handle the entire process: strategy, re-platforming, data migration, and post-migration optimization."
    },
    {
      q: "What is 'Code Agents'?",
      a: "Code Agents is our proprietary service where we deploy autonomous AI developers that can write, test, and debug code within your repository, acting as a force multiplier for your human engineering team."
    },
    {
      q: "Do you provide UI/UX Design services?",
      a: "Yes. We believe technology must be usable. Our in-house design team creates intuitive, accessible, and visually stunning interfaces (Figma prototypes, design systems) before a single line of code is written."
    },
    {
      q: "Can you integrate AI into my existing software?",
      a: "Yes. We specialize in 'Brownfield' AI integration. We can inject AI capabilities (like chatbots, predictive analytics, or smart search) into your existing legacy ERP, CRM, or web platforms via secure APIs."
    },
    {
      q: "What is your approach to Supply Chain AI?",
      a: "We build digital twins and predictive models that analyze your supply chain data in real-time to forecast demand, optimize routes, and predict disruptions before they happen."
    }
  ],
  technical: [
    {
      q: "What is your technology stack?",
      a: "We are agnostic but opinionated. We favor modern stacks: Frontend (React, Next.js, Vue), Backend (Node.js, Python/FastAPI, Go), AI (PyTorch, TensorFlow, LangChain), and Cloud (AWS, Azure, Kubernetes, Docker)."
    },
    {
      q: "How do you handle Data Security and Privacy?",
      a: "Security is paramount. We adhere to SOC2, HIPAA, and GDPR standards. We use encryption in transit and at rest, strict IAM policies, and can deploy 'Private LLMs' that run entirely within your secure VPC, ensuring your data never leaves your control."
    },
    {
      q: "Do you use Open Source models or proprietary ones?",
      a: "We use the best tool for the job. We leverage top-tier proprietary models (GPT-4, Claude) for general tasks, and fine-tune open-source models (Llama 3, Mistral) for cost-effective, private, and domain-specific applications."
    },
    {
      q: "What is RAG (Retrieval-Augmented Generation)?",
      a: "RAG is a technique we use to connect an AI model to your private company data (PDFs, databases, wikis). This allows the AI to answer questions accurately based on *your* specific knowledge base, reducing hallucinations."
    },
    {
      q: "How do you ensure code quality?",
      a: "We employ rigorous CI/CD pipelines, automated testing (unit, integration, e2e), mandatory code reviews, and static analysis tools. We treat infrastructure as code (Terraform/Pulumi) to ensure reproducibility."
    },
    {
      q: "Can you handle high-scale applications?",
      a: "Yes. Our architects have experience building systems that handle millions of concurrent users. We design for horizontal scalability using microservices, serverless functions, and distributed databases."
    },
    {
      q: "Who owns the Intellectual Property (IP)?",
      a: "You do. Upon project completion and final payment, 100% of the code, design assets, and trained model weights are transferred to your ownership. We work on a 'work for hire' basis."
    }
  ],
  engagement: [
    {
      q: "What is your pricing model?",
      a: "We offer flexible models: 'Time & Materials' for agile, evolving projects; 'Fixed Price' for well-defined scopes; and 'Dedicated Team' retainers for long-term staff augmentation."
    },
    {
      q: "How do we get started?",
      a: "It starts with a Discovery Call. We discuss your vision, technical needs, and business goals. Then, we provide a proposal outlining the scope, timeline, and investment. Once approved, we kick off with a design sprint."
    },
    {
      q: "Do you provide post-launch support?",
      a: "Yes. We offer Service Level Agreements (SLAs) for 24/7 monitoring, bug fixes, security patching, and feature enhancements to ensure your software stays healthy and secure."
    },
    {
      q: "How do you communicate during a project?",
      a: "We believe in radical transparency. You get access to our Slack/Teams, Jira/Linear board, and GitHub repo. We hold weekly sprint demos and daily standups (optional) so you always know exactly where the project stands."
    },
    {
      q: "What if I need to change the scope mid-project?",
      a: "We follow Agile methodology, which embraces change. We can adjust the backlog and priorities for future sprints. Significant scope increases may require a change order, which we will discuss and approve with you transparently."
    },
    {
      q: "Do you offer a warranty on your code?",
      a: "Yes. We typically provide a 30-90 day warranty period post-launch where any bugs related to the original scope are fixed at no additional cost."
    }
  ]
};

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = faqData[activeCategory].filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 px-4 min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our technology, process, and services.
          </p>
        </div>

        {/* Search & Navigation */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Categories Sidebar (Desktop) / Topbar (Mobile) */}
          <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIndex(0);
                }}
                className={`
                  flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 whitespace-nowrap
                  ${activeCategory === cat.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <span className="text-lg">{cat.icon}</span>
                <span className="font-bold text-sm">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full md:w-3/4">
            {/* Search Bar */}
            <div className="relative mb-8">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
              />
            </div>

            {/* Questions Accordion */}
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <GlassCard className="overflow-hidden border border-white/5 hover:border-white/10 transition-colors">
                        <button
                          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                          className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                        >
                          <span className={`font-bold text-lg ${openIndex === index ? "text-blue-400" : "text-white"}`}>
                            {item.q}
                          </span>
                          <FaChevronDown
                            className={`transform transition-transform duration-300 text-gray-500 ${openIndex === index ? "rotate-180 text-blue-400" : ""
                              }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </GlassCard>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    No questions found matching your search.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
