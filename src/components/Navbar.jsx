import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logo}>NexGen</div>
        <div style={styles.navLinks}>
          <a href="#features" style={styles.link}>Features</a>
          <a href="#about" style={styles.link}>About</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
        <button style={styles.btnPrimary}>Get Started</button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    padding: "20px 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#C19A6B",
    display: "inline-block",
  },
  navLinks: {
    display: "inline-block",
    marginLeft: "60px",
  },
  link: {
    color: "#666",
    textDecoration: "none",
    marginRight: "30px",
  },
  btnPrimary: {
    float: "right",
    background: "#C19A6B",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Navbar;
