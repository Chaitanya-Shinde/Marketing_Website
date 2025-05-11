import { Quote } from "lucide-react";
import { useDarkMode } from "../context/DarkModeContext"; // Import DarkModeContext

const testimonials = [
  {
    name: "Alex Johnson",
    role: "IT Manager",
    company: "TechNova Inc.",
    message:
      "SoftSell made it incredibly easy to offload our unused software licenses. Fast, secure, and great support!",
  },
  {
    name: "Priya Mehta",
    role: "Operations Lead",
    company: "DigitalCloud",
    message:
      "We turned shelfware into real savings. Highly recommend SoftSell for any business looking to monetize unused tools.",
  },
];

const Testimonials = () => {
  const { darkMode } = useDarkMode(); // Access dark mode state

  return (
    <div className={` w-full ${darkMode ? "bg-gradient-to-b from-gray-800 to-black": "bg-gradient-to-b from-gray-50 to-white"}`}>

      <section
        className={`w-full md:w-[90%] max-w-7xl px-6 py-16 mx-auto flex flex-col justify-center items-center ${
          darkMode
            ? "bg-gray-900 text-white rounded-lg my-10"
            : "bg-[#E8C999] text-gray-900 rounded-lg"
        }`}
      >
        <h2
          className={`text-2xl md:text-3xl font-bold mb-8 ${
            darkMode ? "text-[#E8C999]" : "text-[#8E1616]"
          }`}
        >
          Don't take our word for it! Hear what our customers say.
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
          {testimonials.map((review, index) => (
            <div
              key={index}
              className={`shadow-md rounded-lg p-6 w-full md:w-[48%] lg:w-[30%] transition-all duration-300  flex flex-col ${
                darkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-white text-gray-700"
              }`}
            >
              <Quote
                className={` text-left mb-2  ${
                  darkMode ? "text-[#E8C999]" : "text-[#8E1616]"
                }`}
              />
              <p
                className={`italic mb-4 ${
                  darkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                “{review.message}”
              </p>
              <div
                className={`text-sm ${
                  darkMode ? "text-[#E8C999]" : "text-[#8E1616]"
                }`}
              >
                <strong>{review.name}</strong> <br />
                {review.role}, {review.company}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;