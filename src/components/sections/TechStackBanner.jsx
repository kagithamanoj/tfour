import React from "react";

import linuxLogo from "/src/assets/linux-tux.svg";
import nextjsLogo from "/src/assets/nextjs-icon.svg";
import viteLogo from "/src/assets/vitejs.svg";
import azureLogo from "/src/assets/microsoft-azure.svg";
import awsLogo from "/src/assets/aws.svg";
import mongodbLogo from "/src/assets/mongodb.svg";
import mysqlLogo from "/src/assets/mysql.svg";
import postgresqlLogo from "/src/assets/postgresql.svg";
import tailwindLogo from "/src/assets/tailwindcss.svg";
import vscodeLogo from "/src/assets/visual-studio-code.svg";
import githubLogo from "/src/assets/github-icon.svg";
import dockerLogo from "/src/assets/docker-icon.svg";
import pythonLogo from "/src/assets/python.svg";
import nodeLogo from "/src/assets/nodejs-icon.svg";
import createReactAppLogo from "/src/assets/create-react-app.svg";

const logos = [
  { src: linuxLogo, alt: "Linux" },
  { src: nextjsLogo, alt: "Next.js" },
  { src: viteLogo, alt: "Vite" },
  { src: azureLogo, alt: "Microsoft Azure" },
  { src: awsLogo, alt: "AWS" },
  { src: mongodbLogo, alt: "MongoDB" },
  { src: mysqlLogo, alt: "MySQL" },
  { src: postgresqlLogo, alt: "PostgreSQL" },
  { src: tailwindLogo, alt: "TailwindCSS" },
  { src: vscodeLogo, alt: "VS Code" },
  { src: githubLogo, alt: "GitHub" },
  { src: dockerLogo, alt: "Docker" },
  { src: pythonLogo, alt: "Python" },
  { src: nodeLogo, alt: "Node.js" },
  { src: createReactAppLogo, alt: "Create React App" },
];

const TechStackBanner = () => (
  <div
    className="
      relative py-10 px-2 z-20 overflow-hidden
      border-t border-[var(--color-border)]
      transition-colors duration-300
    "
    style={{
      background: "#fff",
      maskImage:
        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    }}
  >
    {/* Removed blur and shadow; white background only */}

    <div className="relative w-full overflow-hidden">
      <div className="tech-logo-row flex items-center gap-x-14 md:gap-x-20">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={logo.alt + i}
            src={logo.src}
            alt={logo.alt}
            className="h-14 md:h-16 object-contain transition-all duration-300 opacity-75 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110"
            style={{
              maxWidth: 120,
              filter: "brightness(var(--img-brightness,1))",
            }}
            draggable={false}
          />
        ))}
      </div>
    </div>

    <style>
      {`
        .tech-logo-row {
          animation: modern-scroll 36s linear infinite;
          will-change: transform;
          min-width: max-content;
        }
        @keyframes modern-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
    </style>
  </div>
);

export default TechStackBanner;
