import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.logo}>NexGen</div>
          <div>
            <a href="#" style={styles.link}>Privacy</a>
            <a href="#" style={styles.link}>Terms</a>
            <a href="#" style={styles.link}>Contact</a>
          </div>
        </div>
        <div style={styles.copy}>© 2025 Beacon. All rights reserved.</div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { background: "#111827", color: "white", padding: "50px 20px" },
  container: { maxWidth: "1200px", margin: "0 auto" },
  top: { display: "flex", justifyContent: "space-between", marginBottom: "20px" },
  logo: { fontSize: "24px", color: "#C19A6B", fontWeight: "bold" },
  link: { color: "#E6D3B1", marginLeft: "20px", textDecoration: "none" },
  copy: { textAlign: "center", color: "#6b7280" },
};

export default Footer;
