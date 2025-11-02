import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div
      className="
        min-h-screen py-12
        bg-[var(--color-bg)]
        text-[var(--color-text)]
        transition-colors duration-300
      "
    >
      <div
        className="
          max-w-4xl mx-auto px-4 sm:px-6 lg:px-8
          py-10 rounded-lg shadow-md
          bg-[var(--color-card)]
          border border-[var(--color-border)]
          transition-colors duration-300
        "
      >
        <h1
          className="
            text-3xl font-bold mb-4
            text-[var(--color-primary)]
          "
        >
          Privacy Policy
        </h1>
        <p className="text-sm mb-8 opacity-75">
          Last Updated: October 10, 2025
        </p>

        {/* INTRODUCTION */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            1. Introduction
          </h2>
          <p className="opacity-85">
            Tfour Technologies ("we," "our," or "us") is committed to
            protecting your privacy and personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services. Please
            read this policy carefully. If you do not agree with the terms,
            please do not use our services.
          </p>
        </section>

        {/* INFORMATION WE COLLECT */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            2. Information We Collect
          </h2>
          <p className="mb-2 opacity-85">
            We collect various types of information to provide and improve our
            services:
          </p>
          <ul className="list-disc list-inside opacity-90 space-y-1">
            <li>
              <strong>Personal Data:</strong> Includes your name, email,
              address, billing info, and other details you provide during
              registration or inquiries.
            </li>
            <li>
              <strong>Usage Data:</strong> Includes IP address, browser,
              operating system, and interaction metrics from our site.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> Used for
              analytics and personalization. See our{" "}
              <Link
                to="/cookie-policy"
                className="text-[var(--color-primary)] hover:underline"
              >
                Cookie Policy
              </Link>{" "}
              for more details.
            </li>
          </ul>
        </section>

        {/* HOW WE USE INFORMATION */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            3. How We Use Your Information
          </h2>
          <p className="mb-2 opacity-85">
            We use your information for the following purposes:
          </p>
          <ul className="list-disc list-inside opacity-90 space-y-1">
            <li>To provide, operate, and maintain our services.</li>
            <li>To process registrations, payments, and communications.</li>
            <li>To send updates, marketing messages, and support responses.</li>
            <li>To analyze and enhance our platform performance.</li>
            <li>
              To comply with legal obligations and protect both users and
              company.
            </li>
          </ul>
        </section>

        {/* SHARING INFORMATION */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            4. Sharing and Disclosure of Information
          </h2>
          <p className="mb-2 opacity-85">
            We do not sell or rent your personal information. However, we may
            share it:
          </p>
          <ul className="list-disc list-inside opacity-90 space-y-1">
            <li>With trusted third-party service providers bound by NDAs.</li>
            <li>
              To comply with legal requirements or enforce our terms and
              policies.
            </li>
            <li>To prevent fraud, abuse, or threats to our infrastructure.</li>
            <li>
              As part of a merger, acquisition, or business transfer, if
              applicable.
            </li>
          </ul>
        </section>

        {/* DATA SECURITY */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            5. Data Security
          </h2>
          <p className="opacity-85">
            We employ industry-standard security measures to protect data from
            unauthorized access or alteration. While we strive for
            comprehensive security, no online system is completely risk-free.
          </p>
        </section>

        {/* YOUR RIGHTS */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            6. Your Rights and Choices
          </h2>
          <p className="mb-2 opacity-85">
            Depending on your region, you may have rights regarding your data:
          </p>
          <ul className="list-disc list-inside opacity-90 space-y-1">
            <li>Access and receive a copy of your personal data.</li>
            <li>Correct or update inaccurate information.</li>
            <li>Request deletion or limit processing.</li>
            <li>Opt-out of direct marketing communications.</li>
            <li>Withdraw consent and request data portability.</li>
          </ul>
          <p className="opacity-85">
            To exercise these rights, please reach out through our contact
            details below.
          </p>
        </section>

        {/* INTERNATIONAL TRANSFERS */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            7. International Transfers
          </h2>
          <p className="opacity-85">
            Your personal data may be processed on servers outside your
            location, following global compliance standards.
          </p>
        </section>

        {/* CHILDREN POLICY */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            8. Children's Privacy
          </h2>
          <p className="opacity-85">
            Our services are not intended for individuals under 13. We do not
            knowingly collect children’s data without parental consent.
          </p>
        </section>

        {/* CHANGES */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            9. Changes to This Privacy Policy
          </h2>
          <p className="opacity-85">
            We may revise this policy as laws or business practices evolve.
            Updates will be shared on this page with the effective date.
          </p>
        </section>

        {/* CONTACT */}
        <section>
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            10. Contact Us
          </h2>
          <p className="mb-4 opacity-85">
            If you have questions or privacy-related concerns, contact us:
          </p>
          <ul className="list-disc list-inside opacity-90 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:privacy@TfourTechnologies.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                privacy@TfourTechnologies.com
              </a>
            </li>
            <li>
              Via our{" "}
              <Link
                to="/contact"
                className="text-[var(--color-primary)] hover:underline"
              >
                Contact Page
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
