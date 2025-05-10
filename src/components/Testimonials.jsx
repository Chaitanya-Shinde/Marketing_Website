import { Quote } from "lucide-react";

// src/components/Testimonials.jsx
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
  return (
    <section className="w-full md:w-[90%] max-w-7xl px-6 py-16 bg-[#E8C999] text-center rounded-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Don't take our word for it! Hear what our customers say.
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 w-full md:w-[48%] lg:w-[30%]"
          >
            <Quote className="mx-auto text-[#8E1616] mb-2" />
            <p className="italic text-gray-700 mb-4">“{review.message}”</p>
            <div className="text-sm text-[#8E1616]">
              <strong>{review.name}</strong> <br />
              {review.role}, {review.company}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;