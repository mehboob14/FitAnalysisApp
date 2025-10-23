import React from "react";
import { useNavigate } from "react-router-dom";
import Catalog from "../Catalog";
import Features from "./Features";
import backgroundImage from "../assets/HeroSection.png";
import Header from "./header";
// import { Footer } from "@/components/layout/Footer";
import bgImage from "../assets/Hero_image.jpg";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div
        className="relative min-h-screen bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "10rem",
          minHeight: "150vh",
          backgroundAttachment: "scroll",
        }}
      >
        <Header
          onNavigate={(section) => {
            if (section === "home") navigate("/");
            else if (section === "how-it-works") navigate("/#how-it-works");
            else if (section === "about") navigate("/#about");
          }}
          onSignUp={() => navigate("/signup")}
          onLogin={() => navigate("/login")}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto mt-[50px] px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-snug whitespace-nowrap">
            Make the best decisions <br></br>
            when shopping for <br></br> clothes online
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Scan, analyze, and shop with confidence.
          </p>

          <button
            onClick={() => navigate("/catalog")}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-colors text-lg"
          >
            Browse Dresses
          </button>
        </div>
      </div>

      {/* Catalog Section */}
      <div className="bg-gray-100 px-6 py-16 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-white rounded-full mb-4">
              <span className="text-purple-600 font-semibold">Catalog</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Catalog</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover fashion that feels personal. Our catalog blends luxury
              with technology, showing you pieces tailored to your proportions
              and style
            </p>
          </div>
          <Catalog isEmbedded={true} />
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Privacy Section */}
      <div className="bg-white px-6 py-16 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-purple-50 rounded-full mb-4">
              <span className="text-purple-600 font-semibold">Privacy</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Privacy, our Priority
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We protect your privacy with end-to-end encryption. Your personal
              profile belongs only to you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "End to End Encryption",
                desc: "Your Data is protected with military grade security",
                icon: "🔐",
              },
              {
                title: "Privacy by Design",
                desc: "Build with privacy as the foundation, not an afterthought",
                icon: "🛡️",
              },
              {
                title: "You own your Data",
                desc: "Delete your information anytime with one click",
                icon: "👤",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div
        className="bg-black text-white px-6 py-20 md:px-12 text-center"
        style={{
          backgroundImage: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-4">
            Discover Fashion that Fits
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands already shopping smarter with AI. Shop smarter with a
            catalog that adapts to you.
          </p>
          <button
            onClick={() => navigate("/height")}
            className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-colors text-lg"
          >
            Create your profile
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t px-6 py-12 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Try This</h3>
              <p className="text-gray-600">Your Shopping desires fulfilled</p>
            </div>

            {[1, 2, 3].map((col) => (
              <div key={col}>
                <h4 className="font-bold text-gray-900 mb-3">Product</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Features
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t pt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <span>©</span>
              <span>2025 FitAi, All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
