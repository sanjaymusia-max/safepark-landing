import React from "react";

const SafeParkSite = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">SafePark</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Find Safe Parking Anytime, Anywhere
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          SafePark helps you discover and book secure parking spots with ease.
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose SafePark?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Secure</h4>
            <p>Verified parking spots to ensure your vehicle is always safe.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Convenient</h4>
            <p>Book spots in advance and avoid last-minute hassles.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Affordable</h4>
            <p>Save money with competitive pricing and transparent rates.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} SafePark. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SafeParkSite;
