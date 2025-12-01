import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AIChatbot from "./components/sections/AIChatbot";


// Main Pages
import Home from "./pages/home/index.jsx";
import Contact from "./pages/contact/index.jsx";
import About from "./pages/about/index.jsx";
import Careers from "./pages/about/Careers.jsx";
import Partner from "./pages/about/Partner.jsx";
import Expertise from "./pages/expertise/index.jsx";
import Industries from "./pages/industries/index.jsx";
import Products from "./pages/products/index.jsx";
import Resources from "./pages/resources/index.jsx";

// Solutions
import Solutions from "./pages/solutions/index.jsx";
import Dashboard from "./pages/auth/Dashboard.jsx"; // Added under Solutions
import AIDemos from "./pages/solutions/AIDemos.jsx";
import CaseStudies from "./pages/solutions/CaseStudies.jsx";
import Services from "./pages/solutions/Services.jsx";
import Portfolio from "./pages/solutions/Portfolio.jsx";
import AIShowcase from "./components/sections/AIShowcase.jsx";

// AI Detail Pages
import ChatbotDetails from "./pages/solutions/ChatbotDetails.jsx";
import DocumentAI from "./pages/solutions/DocumentAI.jsx";
import CrmLeadAI from "./pages/solutions/CrmLeadAI.jsx";
import PrivateLLM from "./pages/solutions/PrivateLLM.jsx";

// Service Pages
import VideoSynthesis from "./pages/services/VideoSynthesis.jsx";
import SupplyChain from "./pages/services/SupplyChain.jsx";
import CodeAgents from "./pages/services/CodeAgents.jsx";
import VoiceCloning from "./pages/services/VoiceCloning.jsx";

// Legal Pages
import PrivacyPolicy from "./pages/legal/PrivacyPolicy.jsx";
import Terms from "./pages/legal/Terms.jsx";
import CookiePolicy from "./pages/legal/CookiePolicy.jsx";

// FAQ
import FAQ from "./components/sections/FAQ.jsx";

// Design Preview
import DesignPreview from "./pages/DesignPreview.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        {/* Solutions main and subpages */}
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/dashboard" element={<Dashboard />} /> {/* Dashboard: first under solutions */}
        <Route path="/solutions/ai-demos" element={<AIDemos />} />
        <Route path="/solutions/case-studies" element={<CaseStudies />} />
        <Route path="/solutions/services" element={<Services />} />
        <Route path="/solutions/portfolio" element={<Portfolio />} />
        <Route path="/solutions/ai-showcase" element={<AIShowcase />} />
        {/* AI Detail Routes */}
        <Route path="/solutions/chatbot-details" element={<ChatbotDetails />} />
        <Route path="/solutions/document-ai" element={<DocumentAI />} />
        <Route path="/solutions/crm-lead-ai" element={<CrmLeadAI />} />
        <Route path="/solutions/private-llm" element={<PrivateLLM />} />

        {/* Detailed Service Pages */}
        <Route path="/services/video-synthesis" element={<VideoSynthesis />} />
        <Route path="/services/supply-chain" element={<SupplyChain />} />
        <Route path="/services/code-agents" element={<CodeAgents />} />
        <Route path="/services/voice-cloning" element={<VoiceCloning />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/design-preview" element={<DesignPreview />} />
        {/* Fallback to Home for unknown routes */}
        <Route path="*" element={<Home />} />
      </Routes>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        style={{ background: "#101014" }}
        buttonStyle={{ background: "#ff9100", color: "#fff", borderRadius: "4px", fontWeight: "600" }}
        expires={365}
      >
        This website uses cookies to enhance the user experience.{" "}
        <a href="/cookie-policy" style={{ color: "#ff9100" }}>Read our policy</a>.
      </CookieConsent>
      <AIChatbot />
      <Footer />

      {/* Global SVG Filter for Logo Transparency */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
        <filter id="remove-black-bg" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    3 3 3 0 -1"
          />
        </filter>
      </svg>
    </Router>
  );
}

export default App;
