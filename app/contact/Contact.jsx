import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    sender_company: "",
    sender_email: "",
    sender_subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        toast.success("Email sent successfully!");
        setFormData({
          sender_company: "",
          sender_email: "",
          sender_subject: "",
          message: "",
        });
      })
      .catch((error) => {
        toast.error("Failed to send email. Please try again later.");
        console.error("Failed to send email:", error);
      });
  };

  return (
    <section
      id="contact"
      className="flex justify-center py-20 bg-white max-sm:p-10"
    >
      <div className="container flex flex-col items-center px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-3xl font-bold text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="w-full max-w-lg"
        >
          <div className="flex flex-col mb-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="sender_company"
                className="block mb-2 font-bold text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id="sender_company"
                name="sender_company"
                autoComplete="organization"
                value={formData.sender_company}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="sender_email"
                className="block mb-2 font-bold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="sender_email"
                name="sender_email"
                autoComplete="email"
                value={formData.sender_email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="flex-1">
              <label
                htmlFor="sender_subject"
                className="block mb-2 font-bold text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="sender_subject"
                name="sender_subject"
                autoComplete="off"
                value={formData.sender_subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-bold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={7}
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-3 text-lg font-semibold text-white transition duration-300 bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
