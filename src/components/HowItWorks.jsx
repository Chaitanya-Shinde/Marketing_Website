import { useState } from "react";
import { CheckCircle, ArrowRight, Zap, Search, MessageSquare, ArrowDown } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { hover, motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext";


const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { darkMode } = useDarkMode(); // Access dark mode state


  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Upload License",
      description:
        "Browse through our extensive collection of services tailored to your needs. Submit your software license securely.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Get Valuation",
      description: "Receive an instant market-based quote.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Get Paid",
      description: "Receive your payout via your preferred method.",
    },
  ];

  return (
    <section className={`w-full py-16 ${darkMode ? "bg-gradient-to-b from-gray-800 to-black": "bg-gradient-to-b from-gray-50 to-white"} `}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#E8C999]">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes it easy to get started and achieve results quickly.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-[calc(20%-50px)] right-[calc(20%-50px)] h-0.5 bg-[#8E1616]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col justify-center items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div
                  className={`${darkMode? "bg-gray-700" : "bg-white"}  rounded-xl p-6 shadow-md transition-all duration-300 h-full w-[80%] ${
                    hoveredIndex === index ? "shadow-xl transform -translate-y-1" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {/* Step Number */}
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full ${darkMode ? "bg-gradient-to-b from-gray-800 to-black text-white": "bg-gradient-to-b from-amber-100 to-[#E8C999] text-[#8E1616]" } font-bold text-xl mb-6`}>
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className={`p-4 rounded-full mb-6 transition-colors duration-300 ${
                        hoveredIndex === index
                          ? `bg-gradient-to-b from-amber-100 to-[#E8C999] ${darkMode ? "text-black" : "text-[#8E1616]"}`
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {step.icon}
                    </div>

                    <h3 className={`text-lg md:text-xl font-bold mb-3 ${hoveredIndex ==index ? `${darkMode ? "text-[#E8C999]" : " text-[#8E1616]"}` : `${darkMode ? "text-white" : " text-[#8E1616]"}`} `}>{step.title}</h3>
                    <p className={` text-center ${hoveredIndex ==index ? `${darkMode ? "text-[#E8C999]" : " text-[#8E1616]"}` : `${darkMode ? "text-white" : " text-[#8E1616]"}`} `}>{step.description}</p>
                  </div>
                </div>

                {/* Arrow for Mobile/Tablets */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center sm:hidden mt-4">
                    <ArrowDown className="text-[#8E1616] h-12 w-6" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;