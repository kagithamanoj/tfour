import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChartBar, FaUser, FaRobot, FaCloud, FaBell, FaCog, FaSearch } from "react-icons/fa";
import GlassCard from "../../components/common/GlassCard";

// Simulated Chart Component
const Chart = ({ color }) => (
  <div className="flex items-end gap-1 h-16 w-full">
    {[40, 60, 45, 70, 50, 80, 65, 85, 75, 90].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        className={`flex-1 rounded-t-sm ${color}`}
      />
    ))}
  </div>
);

const stats = [
  { label: "Total Requests", value: "1.2M", change: "+12%", icon: <FaCloud />, color: "bg-blue-500" },
  { label: "Active Users", value: "8.5k", change: "+5%", icon: <FaUser />, color: "bg-purple-500" },
  { label: "Avg Latency", value: "45ms", change: "-8%", icon: <FaRobot />, color: "bg-green-500" },
  { label: "Error Rate", value: "0.01%", change: "-2%", icon: <FaChartBar />, color: "bg-red-500" },
];

const projects = [
  {
    name: "FinFlow AI",
    status: "Live",
    uptime: "99.99%",
    requests: "450k",
    statusColor: "text-green-400",
  },
  {
    name: "GenAI Support Bot",
    status: "Live",
    uptime: "99.95%",
    requests: "320k",
    statusColor: "text-green-400",
  },
  {
    name: "MedSight Vision",
    status: "Training",
    uptime: "N/A",
    requests: "0",
    statusColor: "text-yellow-400",
  },
  {
    name: "Smart Contracts",
    status: "Auditing",
    uptime: "N/A",
    requests: "12k",
    statusColor: "text-blue-400",
  },
];

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 text-[var(--color-text)] bg-[#0F172A]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Client Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome back, Manoj</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10">
              <FaSearch className="text-gray-400 mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-white text-sm" />
            </div>
            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white relative">
              <FaBell />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white">
              <FaCog />
            </button>
            <div className="text-right hidden md:block">
              <div className="text-white font-mono font-bold">{currentTime}</div>
              <div className="text-xs text-green-400 flex items-center justify-end gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                System Operational
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <GlassCard key={i} className="p-6 relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-gray-400 text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
                <div className={`p-3 rounded-xl ${stat.color} bg-opacity-20 text-white`}>
                  {stat.icon}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className={stat.change.startsWith("+") ? "text-green-400" : "text-green-400"}>
                  {stat.change}
                </span>
                <span className="text-gray-500">vs last month</span>
              </div>
              <div className="mt-4 opacity-50 group-hover:opacity-100 transition-opacity">
                <Chart color={stat.color} />
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Projects */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6 h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Active Deployments</h2>
                <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-gray-500 text-sm border-b border-white/10">
                      <th className="pb-4 font-medium">Project Name</th>
                      <th className="pb-4 font-medium">Status</th>
                      <th className="pb-4 font-medium">Uptime</th>
                      <th className="pb-4 font-medium">Requests (24h)</th>
                      <th className="pb-4 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {projects.map((proj, i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                        <td className="py-4 font-bold">{proj.name}</td>
                        <td className="py-4">
                          <span className={`flex items-center gap-2 text-sm ${proj.statusColor}`}>
                            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                            {proj.status}
                          </span>
                        </td>
                        <td className="py-4 font-mono text-sm">{proj.uptime}</td>
                        <td className="py-4 font-mono text-sm">{proj.requests}</td>
                        <td className="py-4 text-right">
                          <button className="text-gray-400 hover:text-white">•••</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>

          {/* Activity Feed */}
          <div>
            <GlassCard className="p-6 h-full">
              <h2 className="text-xl font-bold text-white mb-6">System Activity</h2>
              <div className="space-y-6 relative">
                <div className="absolute left-2 top-2 bottom-2 w-px bg-white/10"></div>
                {[
                  { time: "2 min ago", text: "Auto-scaled FinFlow API to 50 nodes", type: "info" },
                  { time: "15 min ago", text: "Deployment successful: Support Bot v2.1", type: "success" },
                  { time: "1 hour ago", text: "New user added to MedSight team", type: "neutral" },
                  { time: "3 hours ago", text: "Weekly backup completed", type: "neutral" },
                  { time: "5 hours ago", text: "High latency detected in US-East", type: "warning" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 relative">
                    <div className={`w-4 h-4 rounded-full border-2 border-[#0F172A] flex-shrink-0 z-10 
                      ${item.type === 'success' ? 'bg-green-500' : item.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}
                    `}></div>
                    <div>
                      <p className="text-sm text-gray-300 leading-snug">{item.text}</p>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
