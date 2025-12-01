import React from "react";
import GlassCard from "../../components/common/GlassCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFileContract, FaGavel, FaExclamationTriangle } from "react-icons/fa";

const Terms = () => {
  return (
    <section className="min-h-screen py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-3 rounded-2xl bg-purple-500/10 text-purple-400 mb-6 border border-purple-500/20">
            <FaFileContract className="text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
            Terms and Conditions
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
            {/* AGREEMENT */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 text-sm">1</span>
                Agreement to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                By accessing or using Tfour Technologies’ services, website, or
                products, you agree to be bound by these Terms and Conditions and
                applicable laws. If you disagree with any part of the terms, please
                refrain from using our services.
              </p>
            </section>

            {/* INTELLECTUAL PROPERTY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm">2</span>
                Intellectual Property Rights
              </h2>
              <p className="text-gray-300 leading-relaxed">
                All content on this site, including text, graphics, logos, images,
                and software, is the property of Tfour Technologies or its
                licensors and protected by intellectual property laws. You agree not
                to reproduce, distribute, or create derivative works without written
                permission.
              </p>
            </section>

            {/* USER RESPONSIBILITIES */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 text-sm">3</span>
                User Responsibilities
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to use our services lawfully and not infringe on the
                rights or restrict others from enjoying them. Abusive, illegal, or
                disruptive use is prohibited.
              </p>
            </section>

            {/* PROHIBITED ACTIVITIES */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400 text-sm">4</span>
                Prohibited Activities
              </h2>
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
                <p className="mb-4 text-gray-300 font-medium">
                  You must not engage in any activities including but not limited to:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    "Unauthorized access or use of data or systems.",
                    "Transmission of harmful or illegal material.",
                    "Interference with service integrity or security.",
                    "Impersonation or false representation of identity."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaExclamationTriangle className="text-red-400 mt-1 shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* DISCLAIMER */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 text-sm">5</span>
                Disclaimer of Warranties
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are provided “as is” without warranties of any kind,
                express or implied. We disclaim all warranties including but not
                limited to merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
            </section>

            {/* LIMITATION OF LIABILITY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">6</span>
                Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Tfour Technologies shall not be liable for any indirect, incidental,
                special, or punitive damages arising from your use of our services,
                even if we’ve been advised of such possibilities.
              </p>
            </section>

            {/* GOVERNING LAW */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 text-sm">7</span>
                Governing Law
              </h2>
              <div className="flex items-start gap-4 bg-teal-500/10 p-4 rounded-xl border border-teal-500/20">
                <FaGavel className="text-teal-400 text-xl mt-1 shrink-0" />
                <p className="text-gray-300 leading-relaxed">
                  These terms are governed by the laws of the jurisdiction where
                  Tfour Technologies is headquartered, without regard to conflict of
                  law principles.
                </p>
              </div>
            </section>

            {/* DISPUTE RESOLUTION */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 text-sm">8</span>
                Dispute Resolution
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Any disputes arising from these terms or services will first be
                resolved through arbitration or mediation before any legal action.
              </p>
            </section>

            {/* MODIFICATIONS */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">9</span>
                Modifications to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may modify these Terms at any time. Continued use of our services
                constitutes acceptance of any changes.
              </p>
            </section>

            {/* CONTACT */}
            <section className="bg-purple-600/10 border border-purple-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">
                10. Contact Us
              </h2>
              <p className="mb-6 text-gray-300">
                If you have questions about these Terms, contact us at:
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                  href="mailto:legal@TfourTechnologies.com"
                  className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
                >
                  legal@TfourTechnologies.com
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
                >
                  Contact Page
                </Link>
              </div>
            </section>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Terms;
