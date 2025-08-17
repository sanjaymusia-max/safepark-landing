import React from "react";
import { Shield, Calendar, DollarSign } from "lucide-react"; // icons

const SafeParkSite = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">SafePark</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Find Safe Parking Anytime, Anywhere
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          SafePark helps you discover and book secure parking spots with ease.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose SafePark?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Shield className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Secure</h4>
            <p>Verified parking spots to ensure your vehicle is always safe.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <Calendar className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Convenient</h4>
            <p>Book spots in advance and avoid last-minute hassles.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <DollarSign className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Affordable</h4>
            <p>Save money with competitive pricing and transparent rates.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">About SafePark</h3>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          SafePark is built to solve the everyday struggle of finding reliable parking. 
          Whether you're heading to work, shopping, or an event — we connect you to secure, 
          affordable parking options nearby in just a few taps.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="text-gray-600 mb-6">
          Have questions or want to partner with us? Reach out below:
        </p>
        <a
          href="mailto:contact@safepark.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} SafePark. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SafeParkSite;
