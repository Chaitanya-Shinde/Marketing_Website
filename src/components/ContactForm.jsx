import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted (dummy)");
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center px-6 py-10">
      <section className="w-full md:w-1/2 pt-10 md:py-10 px-4 flex justify-center">
        <img
          src="src/assets/contact_us.jpg"
          className="w-full h-60 md:h-full object-cover object-bottom rounded-t-md md:rounded-l-lg "
          alt="Contact us"
        />
      </section>

      <section className="w-full md:w-1/2 py-10 bg-white px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#8E1616]">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium text-[#8E1616]">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium text-[#8E1616]">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#8E1616] ">
              Company
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Company Name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#8E1616]">
              License Type
            </label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="">Select a license type</option>
              <option value="Windows">Windows</option>
              <option value="Adobe">Adobe</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#8E1616]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              rows="3"
              placeholder="Your message..."
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#E8C999] text-black w-max px-6 py-3 rounded-full font-semibold hover:bg-[#f2d9b3] hover:cursor-pointer transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactForm;