import React from "react";
import {
  FaReact, FaPython, FaAws, FaDocker, FaNodeJs, FaVuejs, FaAngular, FaJava, FaPhp, FaSwift
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiGo, SiCplusplus, SiCsharp, SiRubyonrails, SiPostgresql, SiMongodb, SiRedis, SiTensorflow, SiPytorch, SiFlutter, SiKotlin, SiRust
} from "react-icons/si";

const techs = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiGo />, name: "Go" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <FaJava />, name: "Java" },
  { icon: <SiRust />, name: "Rust" },
  { icon: <FaVuejs />, name: "Vue.js" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <SiKotlin />, name: "Kotlin" },
  { icon: <FaAngular />, name: "Angular" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiRubyonrails />, name: "Rails" },
];

const TechStackBanner = () => {
  return (
    <div className="w-full py-10 overflow-hidden border-y border-white/5 backdrop-blur-sm">
      <div className="text-center mb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
          Powering Innovation With
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-white mt-2">
          Experts in <span className="text-blue-400">100+</span> Technologies
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-4">
          {/* First Set */}
          {techs.map((tech, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
              <span className="text-3xl md:text-4xl">{tech.icon}</span>
              <span className="text-lg font-bold hidden md:block">{tech.name}</span>
            </div>
          ))}
          {/* Duplicate Set for Seamless Loop */}
          {techs.map((tech, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
              <span className="text-3xl md:text-4xl">{tech.icon}</span>
              <span className="text-lg font-bold hidden md:block">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-12 py-4">
          {/* Second Layer for smoothness (optional, but standard marquee usually just duplicates list in one container) 
              Actually, standard Tailwind marquee usually involves translating a long container. 
              Let's stick to the single container with double content and simple CSS animation.
          */}
        </div>
      </div>
    </div>
  );
};

export default TechStackBanner;
