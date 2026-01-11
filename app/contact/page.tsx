"use client";

import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      {/* Goldsberry Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <div className="bg-gray-900/80 backdrop-blur-md rounded-full px-4 py-2 shadow-sm border border-gray-800/50">
          <span className="text-sm font-medium text-white">Goldsberry</span>
        </div>
      </motion.div>
      
      <NavBar />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-light tracking-tight text-white mb-4">
            Contact
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get in touch with us. We'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50"
            >
              <h3 className="text-sm font-medium text-gray-400 mb-2">Email</h3>
              <a
                href="mailto:hello@goldsberry.com"
                className="text-white text-lg hover:text-gray-300 transition-colors duration-200"
              >
                hello@goldsberry.com
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50"
            >
              <h3 className="text-sm font-medium text-gray-400 mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://twitter.com/goldsberry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Twitter
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://instagram.com/goldsberry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Instagram
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://github.com/goldsberry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Office Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50"
            >
              <h3 className="text-sm font-medium text-gray-400 mb-2">Office</h3>
              <p className="text-white text-lg">
                123 Design Street<br />
                Creative District<br />
                San Francisco, CA 94102
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50"
            >
              <h3 className="text-sm font-medium text-gray-400 mb-2">Response Time</h3>
              <p className="text-white text-lg">
                We typically respond within 24-48 hours during business days.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
