import { Zap, Shield, Briefcase, PhoneCall } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { hover, motion } from "framer-motion";
import { useDarkMode } from "../context/DarkModeContext"; // Import DarkModeContext
import { useState } from "react";

const reasons = [
  { 
    icon: Zap, 
    title: "Fast Process", 
    desc: "Get offers in minutes, not days.", 
  },
  { 
    icon: Shield, 
    title: "Secure", 
    desc: "We value your privacy and security.",
  },
  { 
    icon: Briefcase, 
    title: "Business Friendly", 
    desc: "Tailored solutions for all sizes.", 
  },
  { 
    icon: PhoneCall, 
    title: "24/7 Support", 
    desc: "We're always here to help.",
  },
];

const WhyChooseUs = () => {
  const { darkMode } = useDarkMode(); // Access dark mode state
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className={`py-20 w-full ${
        darkMode ? "bg-gradient-to-b from-black to-gray-800" : " text-gray-900"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className={`text-4xl font-bold tracking-tight mb-4 ${
              darkMode ? "text-[#E8C999]" : "text-[#8E1616]"
            }`}
          >
            Why Choose Us
          </h2>
          <p
            className={`text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We provide exceptional service with these key benefits
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)} 
            >
              <div
                className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group rounded-lg ${
                  darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-card text-card-foreground"
                }`}
              >
                <div
                  className={`h-2 ${
                    darkMode
                      ? hoveredIndex == index? `bg-gradient-to-r from-gray-700 to-[#E8C999] transition` : `bg-gradient-to-r from-gray-700 to-gray-500`
                      : "bg-gradient-to-r from-amber-100 to-[#8E1616]"
                  }`}
                ></div>
                <div className="pt-6 pb-8 px-6 p-6">
                  <div
                    className={`mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full ${
                      darkMode
                        ? `bg-gray-700 ${hoveredIndex == index ? "text-[#E8C999]" : "text-gray-300"} `
                        : `bg-[#E8C999] text-primary hover:bg-primary hover:text-[#8E1616] `
                    } transition-colors duration-300`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                      darkMode ? `${hoveredIndex == index ? "text-[#E8C999]" : "text-gray-300"}` : "text-[#8E1616]"
                    }`}
                  >
                    {item.title}  
                  </h3>
                  <p
                    className={`${
                      darkMode ? `${hoveredIndex == index ? "text-[#E8C999]" : "text-gray-400"}` : "text-muted-foreground"
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;