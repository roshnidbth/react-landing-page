import React from "react";

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.badge}>✨ Now Available</div>

        <h1 style={styles.heroTitle}>Build Something Amazing</h1>

        <p style={styles.subtitle}>
          Transform your ideas into reality with our simple, powerful platform
        </p>

        <div style={styles.buttonGroup}>
          <button style={styles.btnPrimary}>Start Free Trial</button>
          <button style={styles.btnSecondary}>Watch Demo</button>
        </div>

        <div style={styles.stats}>
          {["10k+ Users", "99.9% Uptime", "50+ Countries", "24/7 Support"].map((item, i) => (
            <div key={i} style={styles.statItem}>
              <div style={styles.statValue}>{item.split(" ")[0]}</div>
              <div style={styles.statLabel}>{item.split(" ")[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: "120px 20px 80px",
    background: "linear-gradient(to bottom, #f5f3ff, white)",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  badge: {
    background: "#E6D3B1",
    color: "#8B5E34",
    padding: "8px 16px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "20px",
    fontWeight: "600",
  },
  heroTitle: {
    fontSize: "56px",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "60px",
  },
  btnPrimary: {
    background: "#C19A6B",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  btnSecondary: {
    background: "white",
    border: "2px solid #C19A6B",
    color: "#8B5E34",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "40px",
  },
  statItem: { textAlign: "center" },
  statValue: { fontSize: "36px", color: "#C19A6B", fontWeight: "bold" },
  statLabel: { color: "#666" },
};

export default Hero;
