import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={styles.app}>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
  },
};

export default App;
