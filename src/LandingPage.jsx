import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const { appName } = useParams();
  const [data, setData] = useState(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`/${appName}.json`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        // Dynamically update the browser tab title
        if (json.title) {
          document.title = `${json.company_name} Starter`;
        }
      })
      .catch(err => console.error(err));
  }, [appName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    try {
        //from formspree 
      await fetch(data.ctaLink, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };

  if (!data) return <div>Loading...</div>;

  const colors = data.colors || {};

  return (
    <div
      className="landing-page"
      style={{ backgroundColor: colors.background || "#2c2c2c", color: colors.textPrimary || "#f5f5f5" }}
    >
      {/* Hero Section */}
      <div
        className="landing-hero"
        style={{
          backgroundImage: `url(${data.heroImage})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            background: colors.heroOverlay || "rgba(0,0,0,0.4)",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px"
          }}
        />
        <h1 style={{ zIndex: 1 }}>{data.title}</h1>
      </div>

      {/* Content + CTA */}
      <div className="landing-content">
        <p className="problem" style={{ color: colors.textPrimary || "#f5f5f5" }}>{data.problem}</p>
        <p className="solution" style={{ color: colors.textSecondary || "#d5d5d5" }}>{data.solution}</p>

        {submitted ? (
          <p style={{ fontSize: "1.2rem", color: "#00ff7f" }}>
            Thanks! We'll reach out to you soon.
          </p>
        ) : (
          <form className="cta-form" onSubmit={handleSubmit}>
            <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
                backgroundColor: colors.background || "#3a3a3a",
                color: colors.textPrimary || "#f5f5f5",
                border: `2px solid ${colors.button || "#ff8c42"}`,
                boxShadow: `0 0 12px ${colors.button || "#ff8c42"}80`,
                transition: "all 0.3s ease"
            }}
            />

            <button
              type="submit"
              style={{
                backgroundColor: colors.button || "#ff8c42",
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = colors.buttonHover || "#e67630"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = colors.button || "#ff8c42"}
            >
              {data.cta}
            </button>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer
        className="landing-footer"
        style={{ backgroundColor: colors.footer || "#1f1f1f", color: colors.textSecondary || "#bbb" }}
      >
        &copy; 2025 {data.company_name}. All rights reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
