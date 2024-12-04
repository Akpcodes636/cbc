"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 font-inter">
      <div className="container mx-auto max-w-6xl py-60">
        {/* Contact Header */}
        <section className="text-center mb-16 space-y-6">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-6">
            Contact Us
          </h1>
          <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg font-light tracking-wide">
            We&apos;re here to help and answer any question you might have. We
            look forward to hearing from you!
          </p>
        </section>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Phone Numbers</p>
                  <p className="text-sm">(+234) 803 563 1543</p>
                  <p className="text-sm">(+1) 587-971-6231</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm">contact@cbccommunity.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm">Africa & North America</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
