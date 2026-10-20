
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "HR Analytics Dashboard",
    category: "People Analytics",
    tools: ["SQL", "Python", "Power BI"],
    description:
      "Explore workforce data, employee trends and HR metrics through an end-to-end analytics project.",
    github: "https://github.com/dharsan0001/HR-Analytics-100M-Project",
    icon: "◈",
    image: "/images/hr-analytics/Screenshot 2026-10-14 200248.png",
    featured: true,
  },
  {
    number: "02",
    title: "Customer Segmentation",
    category: "Customer Analytics",
    tools: ["Python", "SQL", "Analytics"],
    description:
      "Explore customer groups and discover patterns that can support more focused business decisions.",
    github: "https://github.com/dharsan0001/Customer-Segmentation-Project",
    icon: "◎",
    image: "/images/customer-segmentation/Screenshot 2026-10-19 180607.png",
  },
  {
    number: "03",
    title: "E-commerce Customer Segmentation",
    category: "E-commerce",
    tools: ["Python", "Data Analysis"],
    description:
      "Analyze e-commerce customer behavior and investigate meaningful customer segments.",
    github:
      "https://github.com/dharsan0001/Ecommerce-Customer-Segmentation-Analysis",
    icon: "◇",
    image: "src/App.jsx public/images/ecommerce-segmentation/Screenshot 2026-10-19 180848.png",
  },
  {
    number: "04",
    title: "Financial Dashboard",
    category: "Financial Analytics",
    tools: ["Power BI", "Excel", "Analytics"],
    description:
      "Present financial metrics and performance insights in a dashboard-focused project.",
    github: "https://github.com/dharsan0001/financial-dahboard",
    icon: "⌁",
    image: "/images/financial-dashboard/image.png",
  },
  {
    number: "05",
    title: "SaaS Churn & Revenue Analytics",
    category: "Business Analytics",
    tools: ["SQL", "Python", "Analytics"],
    description:
      "Investigate SaaS customer churn and revenue analytics to support retention and growth decisions.",
    github:
      "https://github.com/dharsan0001/End-to-End-SaaS-Customer-Churn-Revenue-Analytics",
    icon: "↗",
    image: "/images/saas-churn/Screenshot 2026-10-19 181919.png",
  },
  {
    number: "06",
    title: "Sales Analysis",
    category: "Sales Analytics",
    tools: ["Excel", "SQL", "Power BI"],
    description:
      "Explore sales performance and identify trends that help explain business results.",
    github: "https://github.com/dharsan0001/Sales-Analysis-Project",
    icon: "▥",
    image: "/images/sales-analysis/Screenshot 2026-10-19 182546.png",
  },
];

const skills = [
  "SQL",
  "Excel",
  "Power BI",
  "Python",
  "Pandas",
  "Data Visualization",
];

const filters = ["All", "SQL", "Python", "Power BI", "Excel"];

function Stars() {
  const stars = Array.from({ length: 85 }, (_, i) => ({
    left: `${(i * 37.17) % 100}%`,
    top: `${(i * 61.31) % 100}%`,
    delay: `${(i % 9) * 0.4}s`,
    duration: `${2 + (i % 5)}s`,
  }));

  return (
    <div className="star-field" aria-hidden="true">
      {stars.map((star, i) => (
        <span
          className="star"
          key={i}
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tools.includes(activeFilter)
        );

  return (
    <div className="app-shell">
      <Stars />

      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark">D</span>
          <span>
            DHARSHAN<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["Home", "#home"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-github"
            href="https://github.com/dharsan0001"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-pulse" />
              OPEN TO DATA ANALYST OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, WORLD. I'M</p>

            <h1>
              Dharshan
              <br />
              <span className="gradient-text">Mathiyalagan.</span>
            </h1>

            <h2>
              Turning <span className="accent">data</span> into
              <br className="desktop-break" /> meaningful decisions.
            </h2>

            <p className="hero-description">
              Aspiring Data Analyst with a B.Tech background in Artificial
              Intelligence and Data Science. I use SQL, Excel, Power BI and
              Python to explore data, uncover patterns and communicate insights.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span>↘</span>
              </a>

              <a
                className="button button-secondary"
                href="https://github.com/dharsan0001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>⌘</span> GitHub profile
              </a>

              <a className="button button-secondary" href="#resume" onClick={(event) => { event.preventDefault(); document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" }); }}>
                View Resume ↓
              </a>

              <a
                className="button button-secondary"
                href="public/Dharshan_Mathiyalagan_Resume..pdf"
                download="public/Dharshan_Mathiyalagan_Resume..pdf"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="hero-socials">
              <a href="#about">ABOUT ME</a>
              <span>✦</span>
              <a href="#contact">LET'S CONNECT</a>
              <span>✦</span>
              <a
                href="https://github.com/dharsan0001"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW REPOSITORIES
              </a>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Data analytics illustration"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="planet">
              <div className="planet-glow" />
              <div className="planet-core">
                <span>DATA</span>
                <strong>∞</strong>
                <span>INSIGHTS</span>
              </div>
            </div>

            <div className="floating-card card-sql">
              <span className="mini-icon">⌘</span>
              <div>
                <strong>SQL</strong>
                <small>Query &amp; explore</small>
              </div>
            </div>

            <div className="floating-card card-powerbi">
              <span className="mini-icon">▥</span>
              <div>
                <strong>Power BI</strong>
                <small>Visualize insights</small>
              </div>
            </div>

            <div className="floating-card card-python">
              <span className="mini-icon">Py</span>
              <div>
                <strong>Python</strong>
                <small>Analyze data</small>
              </div>
            </div>

            <span className="visual-star visual-star-one">✦</span>
            <span className="visual-star visual-star-two">✧</span>
            <span className="visual-star visual-star-three">✦</span>
          </div>
        </section>

        <section className="stats section-wrap" aria-label="Portfolio overview">
          <div>
            <strong>06</strong>
            <span>ANALYTICS PROJECTS</span>
          </div>
          <div>
            <strong>04+</strong>
            <span>CORE TOOL CATEGORIES</span>
          </div>
          <div>
            <strong>01</strong>
            <span>DATA-DRIVEN MINDSET</span>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY WORK / 001—006</p>
              <h2>
                Projects from{" "}
                <span className="gradient-text">the data universe.</span>
              </h2>
              <p className="section-description">
                A growing collection of analytics projects, explorations and
                dashboards. Open a repository to explore the code and details.
              </p>
            </div>
            <span className="section-orbit">✳</span>
          </div>

          <div className="filter-row" aria-label="Filter projects by tool">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? "filter active" : "filter"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}

            <span className="result-count">
              {filteredProjects.length} PROJECTS
            </span>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article
                className={
                  project.featured
                    ? "project-card featured"
                    : "project-card"
                }
                key={project.number}
              >
                <div className="project-art">
                  {project.image && (
                    <img
                      className="project-image"
                      src={project.image}
                      alt={`${project.title} dashboard preview`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        console.error(
                          "Could not load project image:",
                          project.image
                        );
                      }}
                    />
                  )}

                  <div className="art-grid" />

                  <span className="project-number">
                    {project.number} / 06
                  </span>
                  <span className="project-symbol">{project.icon}</span>
                  <span className="art-label">DATA EXPLORATION</span>

                  {project.featured && (
                    <span className="featured-label">
                      FEATURED PROJECT
                    </span>
                  )}
                </div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tool-tags">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore on GitHub <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-note">
            Project descriptions and technology tags are introductory summaries.
            See each repository for its actual implementation and findings.
          </p>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY TOOLKIT / 002</p>
              <h2>
                Tools I use to{" "}
                <span className="gradient-text">find the signal.</span>
              </h2>
              <p className="section-description">
                The tools I use to clean, query, analyze and visualize data.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">0{index + 1}</span>
                <span className="skill-symbol">
                  {["⌘", "▤", "▥", "Py", "pd", "◌"][index]}
                </span>
                <strong>{skill}</strong>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-orb">
            D<span>.</span>
          </div>

          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME / 003</p>
            <h2>
              Curious mind.
              <br />
              <span className="gradient-text">Analytical mindset.</span>
            </h2>

            <p>
              I'm Dharshan, a B.Tech Artificial Intelligence and Data Science
              graduate building practical skills in data analytics. I enjoy
              turning raw information into clear visualizations and useful
              business insights.
            </p>

            <p>
              My goal is to contribute to a data team, keep learning and help
              businesses make better decisions through evidence.
            </p>

            <a className="text-link" href="#contact">
              Let's connect <span>↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <p className="eyebrow">HAVE AN OPPORTUNITY? / 004</p>

          <h2>
            Let's make data
            <br />
            <span className="gradient-text">mean something.</span>
          </h2>

          <p>
            Looking for a fresher Data Analyst opportunity. I'd love to connect
            and discuss how I can contribute.
          </p>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href="mailto:dharshanm04@gmail.com?subject=Data%20Analyst%20Opportunity"
            >
              Email Me ↗
            </a>

            <a
              className="button button-secondary"
              href="https://www.linkedin.com/in/dharsan-mathiyalagan-5b4ba03a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn ↗
            </a>

            <a className="button button-secondary" href="#resume" onClick={(event) => { event.preventDefault(); document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" }); }}>
              View Resume ↓
            </a>

            <a
              className="button button-secondary"
              href="public/Dharshan_Mathiyalagan_Resume..pdf"
              download="public/Dharshan_Mathiyalagan_Resume..pdf"
            >
              Download Resume ↓
            </a>

            <a
              className="button button-secondary"
              href="https://github.com/dharsan0001"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub ↗
            </a>
          </div>

          <p className="contact-note">
            Open to fresher Data Analyst opportunities. Feel free to contact me
            by email or connect with me on LinkedIn.
          </p>
        </section>

        <section className="resume-section section-wrap" id="resume">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY RESUME / 005</p>
              <h2>
                Take a closer look at <span className="gradient-text">my resume.</span>
              </h2>
              <p className="section-description">
                Preview my resume here without leaving the portfolio page.
              </p>
            </div>
          </div>

          <div className="resume-actions" style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
            <a
              className="button button-primary"
              href="public/Dharshan_Mathiyalagan_Resume..pdf"
              download="public/Dharshan_Mathiyalagan_Resume..pdf"
            >
              Download Resume ↓
            </a>
            <a className="button button-secondary" href="#home">
              Back to Top ↑
            </a>
          </div>

          <div className="resume-preview" style={{ width: "100%", height: "min(80vh, 950px)", minHeight: "520px", overflow: "hidden", border: "1px solid rgba(148, 163, 184, 0.35)", borderRadius: "16px", background: "#fff" }}>
            <iframe
              src="public/Dharshan_Mathiyalagan_Resume..pdf#toolbar=1&navpanes=0&view=FitH"
              title="public/Dharshan_Mathiyalagan_Resume..pdfPreview"
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          </div>
          <p className="contact-note" style={{ marginTop: "14px" }}>
            If the preview does not appear, make sure the PDF is saved in the project's public folder, then refresh the page.
          </p>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">D</span>
          <span>
            DHARSHAN<span className="brand-dot">.</span>
          </span>
        </a>

        <span>Built with curiosity &amp; data ✦ {year}</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
