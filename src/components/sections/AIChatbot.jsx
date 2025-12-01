import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaPhone, FaEnvelope } from "react-icons/fa";

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: "bot",
            text: "👋 Hi! I'm Tfour AI Assistant. How can I help you today?",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Knowledge base for the chatbot
    const getResponse = (userMessage) => {
        const message = userMessage.toLowerCase();

        // Contact information
        if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("reach")) {
            return `You can reach us at:\n\n📧 Email: hello@tfourtechnologies.com\n📞 Phone: +1 (945) 998-5494\n\nOur team typically responds within 24 hours!`;
        }

        // Services
        if (message.includes("service") || message.includes("what do you do") || message.includes("offerings")) {
            return "We specialize in:\n\n🎥 Generative Video - AI-powered video synthesis\n🔗 Predictive Supply Chain - End-to-end visibility\n💻 Code Agents - Autonomous development\n🎤 Voice Cloning - Hyper-realistic dubbing\n\nWould you like to know more about any specific service?";
        }

        // Pricing
        if (message.includes("price") || message.includes("cost") || message.includes("pricing")) {
            return "Our pricing is customized based on your specific needs and scale. For a detailed quote, please contact us at hello@tfourtechnologies.com or call +1 (945) 998-5494.";
        }

        // About
        if (message.includes("about") || message.includes("who are you") || message.includes("company")) {
            return "Tfour Technologies is a cutting-edge AI solutions provider specializing in generative AI, autonomous systems, and enterprise automation. We build next-generation intelligence for forward-thinking businesses.";
        }

        // Careers
        if (message.includes("career") || message.includes("job") || message.includes("hiring") || message.includes("work")) {
            return "We're always looking for talented individuals! Check out our careers page for current openings, or send your resume to hello@tfourtechnologies.com.";
        }

        // Demo
        if (message.includes("demo") || message.includes("trial") || message.includes("test")) {
            return "We'd love to show you what we can do! Please reach out to hello@tfourtechnologies.com or call +1 (945) 998-5494 to schedule a personalized demo.";
        }

        // Location
        if (message.includes("location") || message.includes("where") || message.includes("office")) {
            return "For office location and meeting inquiries, please contact us at hello@tfourtechnologies.com or +1 (945) 998-5494.";
        }

        // Default response
        return "I'm here to help! For detailed information, please contact our team:\n\n📧 hello@tfourtechnologies.com\n📞 +1 (945) 998-5494\n\nYou can also ask me about our services, pricing, careers, or demos!";
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const userMessage = {
            type: "user",
            text: inputValue,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot typing and response
        setTimeout(() => {
            const botResponse = {
                type: "bot",
                text: getResponse(inputValue),
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="
              fixed bottom-6 right-6 z-50
              w-16 h-16 rounded-full
              bg-gradient-to-br from-blue-600 to-purple-600
              shadow-[0_0_30px_rgba(59,130,246,0.5)]
              flex items-center justify-center
              backdrop-blur-xl border border-white/20
              transition-all duration-300
              hover:shadow-[0_0_40px_rgba(59,130,246,0.7)]
            "
                    >
                        <FaRobot className="text-white text-2xl" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="
              fixed bottom-6 right-6 z-50
              w-[380px] h-[600px]
              rounded-2xl
              bg-[#0b1221]/95 backdrop-blur-3xl
              border border-white/10
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]
              flex flex-col
              overflow-hidden
            "
                    >
                        {/* Header */}
                        <div className="
              bg-gradient-to-r from-blue-600/20 to-purple-600/20
              border-b border-white/10
              p-4 flex items-center justify-between
            ">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                    <FaRobot className="text-white text-lg" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Tfour AI Assistant</h3>
                                    <p className="text-gray-400 text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="
                  w-8 h-8 rounded-lg
                  bg-white/5 hover:bg-white/10
                  flex items-center justify-center
                  transition-colors duration-200
                "
                            >
                                <FaTimes className="text-gray-400 hover:text-white" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`
                      max-w-[80%] rounded-2xl px-4 py-3
                      ${message.type === "user"
                                                ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                                                : "bg-white/5 text-gray-300 border border-white/10"
                                            }
                    `}
                                    >
                                        <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="px-4 py-2 border-t border-white/10 bg-white/5">
                            <div className="flex gap-2">
                                <a
                                    href="mailto:hello@tfourtechnologies.com"
                                    className="
                    flex-1 flex items-center justify-center gap-2
                    px-3 py-2 rounded-lg
                    bg-white/5 hover:bg-white/10
                    text-gray-300 hover:text-white
                    text-xs font-medium
                    transition-all duration-200
                  "
                                >
                                    <FaEnvelope className="text-sm" />
                                    Email
                                </a>
                                <a
                                    href="tel:+19459985494"
                                    className="
                    flex-1 flex items-center justify-center gap-2
                    px-3 py-2 rounded-lg
                    bg-white/5 hover:bg-white/10
                    text-gray-300 hover:text-white
                    text-xs font-medium
                    transition-all duration-200
                  "
                                >
                                    <FaPhone className="text-sm" />
                                    Call
                                </a>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="
                    flex-1 px-4 py-3 rounded-xl
                    bg-white/5 border border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-blue-500/50
                    transition-colors duration-200
                    text-sm
                  "
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="
                    w-12 h-12 rounded-xl
                    bg-gradient-to-br from-blue-600 to-purple-600
                    disabled:opacity-50 disabled:cursor-not-allowed
                    flex items-center justify-center
                    hover:shadow-lg hover:shadow-blue-500/25
                    transition-all duration-200
                  "
                                >
                                    <FaPaperPlane className="text-white text-sm" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
