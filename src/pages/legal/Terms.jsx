import React from "react";

const Terms = () => {
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
          Terms and Conditions
        </h1>
        <p className="text-sm mb-8 opacity-75">
          Last Updated: October 10, 2025
        </p>

        {/* AGREEMENT */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            1. Agreement to Terms
          </h2>
          <p className="opacity-85">
            By accessing or using Tfour Technologies’ services, website, or
            products, you agree to be bound by these Terms and Conditions and
            applicable laws. If you disagree with any part of the terms, please
            refrain from using our services.
          </p>
        </section>

        {/* INTELLECTUAL PROPERTY */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            2. Intellectual Property Rights
          </h2>
          <p className="opacity-85">
            All content on this site, including text, graphics, logos, images,
            and software, is the property of Tfour Technologies or its
            licensors and protected by intellectual property laws. You agree not
            to reproduce, distribute, or create derivative works without written
            permission.
          </p>
        </section>

        {/* USER RESPONSIBILITIES */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            3. User Responsibilities
          </h2>
          <p className="opacity-85">
            You agree to use our services lawfully and not infringe on the
            rights or restrict others from enjoying them. Abusive, illegal, or
            disruptive use is prohibited.
          </p>
        </section>

        {/* PROHIBITED ACTIVITIES */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            4. Prohibited Activities
          </h2>
          <p className="opacity-85 mb-2">
            You must not engage in any activities including but not limited to:
          </p>
          <ul className="list-disc list-inside opacity-90 space-y-1">
            <li>Unauthorized access or use of data or systems.</li>
            <li>Transmission of harmful or illegal material.</li>
            <li>Interference with service integrity or security.</li>
            <li>Impersonation or false representation of identity.</li>
          </ul>
        </section>

        {/* DISCLAIMER */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            5. Disclaimer of Warranties
          </h2>
          <p className="opacity-85">
            Our services are provided “as is” without warranties of any kind,
            express or implied. We disclaim all warranties including but not
            limited to merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
        </section>

        {/* LIMITATION OF LIABILITY */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            6. Limitation of Liability
          </h2>
          <p className="opacity-85">
            Tfour Technologies shall not be liable for any indirect, incidental,
            special, or punitive damages arising from your use of our services,
            even if we’ve been advised of such possibilities.
          </p>
        </section>

        {/* GOVERNING LAW */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            7. Governing Law
          </h2>
          <p className="opacity-85">
            These terms are governed by the laws of the jurisdiction where
            Tfour Technologies is headquartered, without regard to conflict of
            law principles.
          </p>
        </section>

        {/* DISPUTE RESOLUTION */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            8. Dispute Resolution
          </h2>
          <p className="opacity-85">
            Any disputes arising from these terms or services will first be
            resolved through arbitration or mediation before any legal action.
          </p>
        </section>

        {/* MODIFICATIONS */}
        <section className="mb-6">
          <h2
            className="
              text-2xl font-semibold mb-2
              text-[var(--color-primary)]
            "
          >
            9. Modifications to Terms
          </h2>
          <p className="opacity-85">
            We may modify these Terms at any time. Continued use of our services
            constitutes acceptance of any changes.
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
          <p className="opacity-85">
            If you have questions about these Terms, contact us at:
          </p>
          <ul className="list-disc list-inside opacity-90 space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:legal@Tfoursolutions.com"
                className="text-[var(--color-primary)] hover:underline"
              >
                legal@Tfoursolutions.com
              </a>
            </li>
            <li>
              Visit our{" "}
              <a
                href="/contact"
                className="text-[var(--color-primary)] hover:underline"
              >
                Contact Page
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Terms;
