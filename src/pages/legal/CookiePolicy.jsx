import React from "react";
import { Link } from "react-router-dom";
import GlassCard from "../../components/common/GlassCard";
import { motion } from "framer-motion";
import { FaCookieBite, FaInfoCircle, FaToggleOn } from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <section className="min-h-screen py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-3 rounded-2xl bg-yellow-500/10 text-yellow-400 mb-6 border border-yellow-500/20">
            <FaCookieBite className="text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-yellow-100 to-yellow-200 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: October 10, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-8 md:p-12 border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                  <FaInfoCircle className="text-blue-400" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Cookies are small text files that are placed on your computer or
                  mobile device when you visit a website. They help websites
                  function efficiently and provide useful information to the site
                  owners. Cookies remember your preferences, improve user
                  experience, and enable certain features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 text-white">
                  Types of Cookies We Use
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-2">Strictly Necessary</h3>
                    <p className="text-sm text-gray-400">
                      Essential to operate our website and provide secure access to personalized
                      features. These cannot be disabled.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-2">Performance & Analytics</h3>
                    <p className="text-sm text-gray-400">
                      Collect anonymized data on website usage and traffic patterns to help us
                      understand how our users interact with the site.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-2">Functionality</h3>
                    <p className="text-sm text-gray-400">
                      Remember your preferences such as language settings, theme selections, or
                      login state.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-2">Advertising</h3>
                    <p className="text-sm text-gray-400">
                      Used to deliver relevant advertisements and measure the effectiveness of
                      marketing campaigns.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  How We Use Cookies
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Keep you signed in and secure your account",
                    "Understand how you use our website to improve it",
                    "Personalize your experience and remember choices",
                    "Analyze aggregated user behavior for R&D",
                    "Deliver relevant advertising and promotions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Third-Party Cookies
                </h2>
                <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-xl">
                  <p className="text-gray-300 mb-4">
                    We may also use cookies from trusted third-party services such as:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-gray-300">
                      <strong className="text-white min-w-[140px]">Google Analytics:</strong>
                      <span>Gathers insights on visitor behavior with strict privacy.</span>
                    </li>
                    <li className="flex gap-3 text-gray-300">
                      <strong className="text-white min-w-[140px]">Ad Partners:</strong>
                      <span>Help target and measure ads delivered across the internet.</span>
                    </li>
                    <li className="flex gap-3 text-gray-300">
                      <strong className="text-white min-w-[140px]">Social Media:</strong>
                      <span>Enable sharing and integration features on our site.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                  <FaToggleOn className="text-green-400" />
                  Managing Cookies
                </h2>
                <p className="text-gray-300 mb-4">
                  You have options to manage and control cookies:
                </p>
                <ul className="space-y-3 ml-2 text-gray-300">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 shrink-0" />
                    <span>Most browsers allow you to block or delete cookies via settings.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 shrink-0" />
                    <span>
                      Visit <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">youronlinechoices.com</a> to manage ad preferences.
                    </span>
                  </li>
                </ul>
              </section>

              <section className="bg-yellow-600/10 border border-yellow-500/20 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Contact Us
                </h2>
                <p className="mb-6 text-gray-300">
                  If you have questions about this Cookie Policy, reach us:
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <a
                    href="mailto:reachus@TfourTechnologies.com"
                    className="px-6 py-3 rounded-xl bg-yellow-600 hover:bg-yellow-500 text-white font-medium transition-colors"
                  >
                    reachus@TfourTechnologies.com
                  </a>
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
                  >
                    Contact Page
                  </Link>
                </div>
              </section>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CookiePolicy;
