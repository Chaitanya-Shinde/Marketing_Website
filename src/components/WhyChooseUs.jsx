import { Zap, Shield, Briefcase, PhoneCall } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

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
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground">
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
            >
              <div className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden group rounded-lg border bg-card text-card-foreground ">
                <div className={`h-2  bg-gradient-to-r from-amber-100 to-[#8E1616]`}></div>
                <div className="pt-6 pb-8 px-6 p-6">
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-[#8E1616] transition-colors duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#8E1616] transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
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