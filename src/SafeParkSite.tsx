import React from "react";

export default function SafeParkSite() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">SafePark</h1>
        <p className="text-lg mb-6">
          Find and book secure parking spots near you — anytime, anywhere.
        </p>
        <a
          href="#get-started"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose SafePark?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">🛡️</div>
            <h4 className="text-xl font-semibold mb-2">Secure</h4>
            <p>Verified parking spots to ensure your vehicle is always safe.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">📅</div>
            <h4 className="text-xl font-semibold mb-2">Convenient</h4>
            <p>Book spots in advance and avoid last-minute hassles.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">💰</div>
            <h4 className="text-xl font-semibold mb-2">Affordable</h4>
            <p>Save money with competitive pricing and transparent rates.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        id="get-started"
        className="bg-blue-50 py-20 text-center px-6"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Park Smarter?</h2>
        <p className="mb-6 text-gray-700">
          Join thousands of drivers who trust SafePark for stress-free parking.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Sign Up Today
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        © {new Date().getFullYear()} SafePark. All rights reserved.
      </footer>
    </div>
  );
}
