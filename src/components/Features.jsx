import React from "react";

function Features() {
  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Built for speed and performance" },
    { icon: "🔒", title: "Secure", desc: "Your data is always protected" },
    { icon: "👥", title: "Easy to Use", desc: "Simple interface anyone can master" },
  ];

  return (
    <section id="features" style={styles.section}>
      <h2 style={styles.title}>Everything You Need</h2>
      <p style={styles.subtitle}>Simple, powerful features</p>

      <div style={styles.grid}>
        {features.map((f, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.icon}>{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "80px 20px", textAlign: "center" },
  title: { fontSize: "42px", marginBottom: "15px" },
  subtitle: { color: "#8B5E34", marginBottom: "40px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    border: "1px solid #e5e7eb",
    padding: "30px",
    borderRadius: "12px",
  },
  icon: { fontSize: "48px", marginBottom: "10px" },
};

export default Features;
