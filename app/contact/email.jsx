import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    name: "",
    phone: "",
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
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        formData,
        process.env.EMAILJS_USER_ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Optionally reset the form or show a success message
        setFormData({
          company: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Company:
        </label>
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          value={formData.company}
          onChange={handleChange}
          required
          className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700"
        >
          Phone:
        </label>
        <input
          type="tel"
          id="subject"
          name="subject"
          autoComplete="tel"
          value={formData.subject}
          onChange={handleChange}
          required
          className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          autoComplete="off"
          value={formData.message}
          onChange={handleChange}
          required
          className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contact;
