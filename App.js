import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";


const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our ThaliTails Food Website</h1>
        <p>Are you looking Hungry. Then why should not try pizza...</p>
      </div>
    </section>
  );
};


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Body />
    </div>
  );
};

// Rendering the Root Component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
