import React, { useState } from "react";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
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
    // You can add your form submission logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      message: "",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="font-Raleway p-4 md:p-20 bg-gray-100">
        <div className="flex justify-center">
          <h1 className="capitalize text-2xl text-blue-500 font-bold ">
            Feel free to contact us
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
          <motion.div className="w-full" whileHover={{ scale: 1.02 }}>
            <iframe
              title="map"
              width="100%"
              height="400"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63046.88651477922!2d38.7264288!3d9.0244433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ec56d15cc5%3A0x1b85048bbdfc91a!2sAbraham%20Teshome%20Ageze%20Certified%20Audit%20Firm!5e0!3m2!1sen!2sus!4v1708880763837!5m2!1sen!2sus"
            ></iframe>

            <motion.div
              className="bg-white p-4 rounded-lg shadow-lg mt-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-2">
                <FiMail className="w-6 h-6 mr-2 text-gray-500" />
                <span>Email: example@example.com</span>
              </div>
              <div className="flex items-center mb-2">
                <FiPhone className="w-6 h-6 mr-2 text-gray-500" />
                <span>Phone: +1234567890</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full bg-white p-4 rounded-lg shadow-lg mt-4 "
            whileHover={{ scale: 1.02 }}
          >
            <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4 flex items-center border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <FiUser className="w-6 h-6 mr-2 text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="appearance-none w-full focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 flex items-center border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <FiMail className="w-6 h-6 mr-2 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="appearance-none w-full focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 flex items-center border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <FiPhone className="w-6 h-6 mr-2 text-gray-500" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="appearance-none w-full focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 flex items-center border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <label htmlFor="date" className="mr-2">
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="appearance-none w-full focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 flex items-center border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <label htmlFor="time" className="mr-2">
                  Time:
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="appearance-none w-full focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4 flex items-center border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <label htmlFor="service" className="mr-2">
                  Service:
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="appearance-none w-full focus:outline-none"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  <option value="service3">Service 3</option>
                </select>
              </div>
              <div className="mb-4 flex items-center border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <label htmlFor="message" className="mr-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="appearance-none w-full focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
