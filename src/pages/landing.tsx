import "./landing.css";
import logo from "../assests/logo.jpg";
import heroMain from "../assests/main2.PNG";
import floating1 from "../assests/floating1.jpg";
import floating3 from "../assests/floating3.jpg";
import icon3 from "../assests/icon3.jpg";
import icon1 from "../assests/icon1.png";
import icon2 from "../assests/icon2.png";
import kf1 from "../assests/kf1.jpg";
import kf2 from "../assests/kf2.webp";
import kf3 from "../assests/kf3.jpg";
import kf4 from "../assests/kf4.jpg";
import kf5 from "../assests/kf5.jpg";
import insta from "../assests/insta.jpg";
import facebook from "../assests/facebook.jpg";
import twitter from "../assests/x.jpg";
import youtube from "../assests/youtube.jpg";
import linkedin from "../assests/linkedin.webp";
import { Typewriter } from "react-simple-typewriter";

export default function Landing() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img style={{ width: "10rem", height: "auto" }} src={logo} alt="Logo" className="logo" />
        </div>

        <div className="nav-right">
          <a href="#hero">Home</a>
          <a href="#why-needed">Purpose</a>
          <a href="#key-features">Features</a>
          <a href="#platforms">Platforms</a>
          <a href="/signup" className="signin">Sign In</a>
          <a style={{ backgroundColor: "#4b2aad", color: "white" }} href="/login" className="btn-primary">Log In</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <h1>
  Stop guessing.<br />
  Start posting with{" "}
  <span style={{ color: "#19084dff" }}>
    <Typewriter
      words={["confidence", "clarity", "data", "impact"]}
      loop
      cursor
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1200}
    />
  </span>
</h1>
        <p>Data-driven insights to optimize your content strategy</p>

        <img style={{ marginTop: "20px" }} className="hero-main" src={heroMain} alt="Dashboard preview" />
        <img className="hero-card left top" src={floating1} alt="Insight card" />
        <img className="hero-card right" src={floating3} alt="Engagement card" />
        <img className="hero-card left bottom" src={icon3} alt="Audience icon" />
      </section>

      <section className="why-needed" id="why-needed">
        <h1>Purpose</h1>
        <div className="features">
          <div className="why-card blue">
            <div style={{ display: "flex", gap: "10px" }}>
              <img style={{ width: "40px", marginBottom: "0px" }} src={icon1} alt="" />
              <h4>Discover What Works</h4>
            </div>
            <p>Analyze engagement patterns across posts and formats to understand which content performs best and
              resonates most with your audience.</p>
          </div>
          <div className="why-card pink">
            <div style={{ display: "flex", gap: "10px" }}>
              <img style={{ width: "40px", marginBottom: "0px" }} src={icon2} alt="" />
              <h4>Optimize Content Strategy</h4>
            </div>
            <p>Uncover why certain posts gain higher reach and engagement, identify the best posting times, and refine
              your content strategy using data-backed insights.</p>
          </div>
          <div className="why-card green">
            <div style={{ display: "flex", gap: "10px" }}>
              <img style={{ width: "40px", marginBottom: "0px" }} src={icon3} alt="" />
              <h4>Track Performance Impact</h4>
            </div>
            <p>Monitor likes, comments, shares, reach, and engagement trends over time to measure the effectiveness of your
              social media efforts and make informed decisions.</p>
          </div>
        </div>
      </section>

      <hr />

      {/* FEATURES SECTION */}
      <section className="why-needed" id="key-features">
        <h1>Key Features</h1>
        <div className="features why-cards2">
          <div className="why-card2 blue">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ width: "80px" }} src={kf1} alt="Unified analytics" />
              <h3>Unified Analytics Dashboard</h3>
            </div>
            <p>Access all essential metrics—likes, comments, shares, reach, and engagement rate—through a single, centralized dashboard.</p>
          </div>
          <div className="why-card2 pink">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ width: "80px" }} src={kf2} alt="Engagement analysis" />
              <h3>Content & Engagement Analysis</h3>
            </div>
            <p>Compare Reels, Carousels, and Static posts to understand what content formats drive the highest engagement and reach.</p>
          </div>
          <div className="why-card2 green">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ width: "50px", height: "40px" }} src={kf3} alt="Trend tracking" />
              <h3>Visual Trend Tracking</h3>
            </div>
            <p style={{ marginTop: "20px" }}>Track performance over time using interactive charts and graphs to easily spot trends, growth patterns, and audience behavior.</p>
          </div>
          <div className="why-card2 blue">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ width: "80px" }} src={kf4} alt="AI insights" />
              <h3>AI-Powered Insights & Queries</h3>
            </div>
            <p>Use a natural language interface to ask questions and receive automated insights, recommendations, and explanations behind viral content.</p>
          </div>
          <div className="why-card2 pink">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ width: "80px", height: "50px" }} src={kf5} alt="Reporting" />
              <h3>Smart Reporting & Optimizations</h3>
            </div>
            <p>Identify the best posting times, monitor long-term engagement, and export detailed reports (CSV/PDF) for planning and decision-making.</p>
          </div>
        </div>
      </section>

      <hr />

      <section className="section" id="platforms">
        <h1>Leading Platforms we support</h1>
        <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
          <div className="platforms">
            <img style={{ width: "130px", borderRadius: "80px" }} src={insta} alt="Instagram" />
          </div>
          <div className="platforms" style={{ width: "130px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: "80px" }}>
            <img style={{ width: "100px", borderRadius: "30px" }} src={facebook} alt="Facebook" />
          </div>
          <div className="platforms" style={{ width: "130px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderRadius: "80px" }}>
            <img style={{ width: "100px", borderRadius: "80px" }} src={twitter} alt="X" />
          </div>
          <div className="platforms" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "130px", backgroundColor: "white", borderRadius: "80px" }}>
            <img style={{ height: "100px", width: "100px", borderRadius: "10px" }} src={youtube} alt="YouTube" />
          </div>
          <div className="platforms" style={{ backgroundColor: "white", borderRadius: "80px" }}>
            <img style={{ width: "130px", borderRadius: "0px" }} src={linkedin} alt="LinkedIn" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          {/* Left: Logo & Description */}
          <div className="footer-section">
            <img src={logo} alt="Insight Social" className="footer-logo" />
            <p>Data-driven insights to grow your audience and improve engagement.</p>
          </div>

          {/* Middle: Product Links */}
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Platforms</li>
              <li>Why needed</li>
            </ul>
          </div>

          {/* Middle: Social Media */}
          <div className="footer-section">
            <h4>Follow us</h4>
            <div className="social-icons">
              <img src={insta} alt="Instagram" />
              <img src={facebook} alt="Facebook" />
              <img src={twitter} alt="X" />
              <img src={youtube} alt="YouTube" />
              <img src={linkedin} alt="LinkedIn" />
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="footer-section">
            <h4>Stay updated</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }} className="newsletter">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <hr />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 Insight Social</p>
          <div className="footer-links">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </>
  );
}