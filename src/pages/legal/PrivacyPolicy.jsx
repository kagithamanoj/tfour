import React from "react";
import { Link } from "react-router-dom";
import GlassCard from "../../components/common/GlassCard";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserShield } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20">
            <FaUserShield className="text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Privacy Policy
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
            {/* INTRODUCTION */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 text-sm">1</span>
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Tfour Technologies ("we," "our," or "us") is committed to
                protecting your privacy and personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services. Please
                read this policy carefully. If you do not agree with the terms,
                please do not use our services.
              </p>
            </section>

            {/* INFORMATION WE COLLECT */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 text-sm">2</span>
                Information We Collect
              </h2>
              <p className="mb-4 text-gray-300">
                We collect various types of information to provide and improve our
                services:
              </p>
              <ul className="space-y-4 ml-2">
                <li className="flex gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Personal Data:</strong> Includes your name, email,
                    address, billing info, and other details you provide during
                    registration or inquiries.
                  </span>
                </li>
                <li className="flex gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Usage Data:</strong> Includes IP address, browser,
                    operating system, and interaction metrics from our site.
                  </span>
                </li>
                <li className="flex gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-white">Cookies and Tracking Technologies:</strong> Used for
                    analytics and personalization. See our{" "}
                    <Link
                      to="/cookie-policy"
                      className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-500/30 hover:decoration-blue-500"
                    >
                      Cookie Policy
                    </Link>{" "}
                    for more details.
                  </span>
                </li>
              </ul>
            </section>

            {/* HOW WE USE INFORMATION */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 text-sm">3</span>
                How We Use Your Information
              </h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "To provide, operate, and maintain our services.",
                  "To process registrations, payments, and communications.",
                  "To send updates, marketing messages, and support responses.",
                  "To analyze and enhance our platform performance.",
                  "To comply with legal obligations and protect both users and company."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* SHARING INFORMATION */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 text-green-400 text-sm">4</span>
                Sharing and Disclosure
              </h2>
              <p className="mb-4 text-gray-300">
                We do not sell or rent your personal information. However, we may
                share it:
              </p>
              <ul className="space-y-3 ml-2">
                {[
                  "With trusted third-party service providers bound by NDAs.",
                  "To comply with legal requirements or enforce our terms and policies.",
                  "To prevent fraud, abuse, or threats to our infrastructure.",
                  "As part of a merger, acquisition, or business transfer, if applicable."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* DATA SECURITY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">5</span>
                Data Security
              </h2>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-xl flex gap-4 items-start">
                <FaLock className="text-yellow-400 text-xl mt-1 shrink-0" />
                <p className="text-gray-300 leading-relaxed">
                  We employ industry-standard security measures to protect data from
                  unauthorized access or alteration. While we strive for
                  comprehensive security, no online system is completely risk-free.
                </p>
              </div>
            </section>

            {/* YOUR RIGHTS */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 text-sm">6</span>
                Your Rights and Choices
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Access and receive a copy of your personal data.",
                  "Correct or update inaccurate information.",
                  "Request deletion or limit processing.",
                  "Opt-out of direct marketing communications.",
                  "Withdraw consent and request data portability."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 list-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </div>
              <p className="text-gray-400 text-sm italic">
                To exercise these rights, please reach out through our contact details below.
              </p>
            </section>

            {/* INTERNATIONAL TRANSFERS */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500/20 text-teal-400 text-sm">7</span>
                International Transfers
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your personal data may be processed on servers outside your
                location, following global compliance standards.
              </p>
            </section>

            {/* CHILDREN POLICY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 text-sm">8</span>
                Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for individuals under 13. We do not
                knowingly collect children’s data without parental consent.
              </p>
            </section>

            {/* CHANGES */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400 text-sm">9</span>
                Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may revise this policy as laws or business practices evolve.
                Updates will be shared on this page with the effective date.
              </p>
            </section>

            {/* CONTACT */}
            <section className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-white">
                10. Contact Us
              </h2>
              <p className="mb-6 text-gray-300">
                If you have questions or privacy-related concerns, contact us:
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a
                  href="mailto:privacy@TfourTechnologies.com"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
                >
                  privacy@TfourTechnologies.com
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

export default PrivacyPolicy;
