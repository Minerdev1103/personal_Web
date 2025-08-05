import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Mail,
  Phone,
  MessageSquare,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import "./styles.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle scroll spy for navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleDownload = (type) => {
    const fileUrl =
      type === "developer"
        ? "/Sorayut_Thamsanong_CV_Developer.pdf"
        : "/Sorayut_Thamsanong_CV_UXUI.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop(); // ตั้งชื่อไฟล์ตามชื่อใน public
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDropdown(false); // ปิด dropdown
  };

  const projects = [
    {
      id: 1,
      title: "Pi Securities Public Company Limited",
      description: "Design and Develop Websites",
      logo: "/photo/pi.png",
      category: "FinTech",
      images: [
        "/photo/pi/1.png",
        "/photo/pi/2.png",
        "/photo/pi/3.png",
        "/photo/pi/4.png",
        "/photo/pi/5.png",
        "/photo/pi/6.png",
        "/photo/pi/7.png",
        "/photo/pi/8.png",
        "/photo/pi/9.png",
        "/photo/pi/10.png",
        "/photo/pi/11.png",
        "/photo/pi/12.png",
        "/photo/pi/13.png",
        "/photo/pi/14.png",
        "/photo/pi/15.png",
        "/photo/pi/16.png",
      ],
    },
    {
      id: 2,
      title: "Klang Hospital",
      description: "Design and Develop Websites",
      logo: "/photo/klang.png",
      category: "Healthcare",
      images: [
        "/photo/klang/1.png",
        "/photo/klang/2.png",
        "/photo/klang/3.png",
        "/photo/klang/4.png",
        "/photo/klang/5.png",
        "/photo/klang/6.png",
        "/photo/klang/7.png",
        "/photo/klang/8.png",
        "/photo/klang/9.png",
        "/photo/klang/10.png",
      ],
    },
    {
      id: 3,
      title: "OmniFood",
      description: "Design and Develop Websites",
      logo: "/photo/omnifood.png",
      category: "Academic",
      images: [
        "/photo/omnifood/11.png",
        "/photo/omnifood/22.png",
        "/photo/omnifood/33.png",
        "/photo/omnifood/44.png",
        "/photo/omnifood/55.png",
        "/photo/omnifood/66.png",
        "/photo/omnifood/77.png",
        "/photo/omnifood/88.png",
        "/photo/omnifood/99.png",
      ],
    },
    {
      id: 4,
      title: "Deli Delivery Food",
      description: "Design Application",
      logo: "/photo/deli.png",
      category: "Academic",
      images: [
        "/photo/delivery/01.jpg",
        "/photo/delivery/02.jpg",
        "/photo/delivery/03.jpg",
        "/photo/delivery/04.jpg",
        "/photo/delivery/05.jpg",
        "/photo/delivery/06.jpg",
        "/photo/delivery/07.jpg",
        "/photo/delivery/08.jpg",
        "/photo/delivery/010.jpg",
        "/photo/delivery/011.jpg",
        "/photo/delivery/012.jpg",
        "/photo/delivery/013.jpg",
        "/photo/delivery/014.jpg",
        "/photo/delivery/015.jpg",
        "/photo/delivery/016.jpg",
        "/photo/delivery/017.jpg",
        "/photo/delivery/018.jpg",
        "/photo/delivery/019.jpg",
        "/photo/delivery/020.jpg",
        "/photo/delivery/021.jpg",
        "/photo/delivery/022.jpg",
        "/photo/delivery/023.jpg",
        "/photo/delivery/024.jpg",
      ],
    },
    {
      id: 5,
      title: "Health and Fitness",
      description: "Design Application",
      logo: "/photo/health.png",
      category: "Academic",
      images: [
        "/photo/health/1.png",
        "/photo/health/2.png",
        "/photo/health/3.png",
        "/photo/health/4.png",
        "/photo/health/5.png",
        "/photo/health/7.png",
        "/photo/health/8.png",
        "/photo/health/9.png",
        "/photo/health/10.png",
        "/photo/health/11.png",
        "/photo/health/12.png",
        "/photo/health/13.png",
        "/photo/health/14.png",
        "/photo/health/15.png",
        "/photo/health/16.png",
      ],
    },
    {
      id: 6,
      title: "A Star Technology Company",
      description: "Design Websites",
      logo: "/photo/a-star.png",
      category: "Websites company",
      images: ["/photo/a-star/astar.png"],
    },
    {
      id: 7,
      title: "BeTask Consulting Company",
      description: "Design Websites and Application",
      logo: "/photo/betask.png",
      category: "User Form Service",
      images: [
        "/photo/betask/Desktop.jpg",
        "/photo/betask/Mobile1.jpg",
        "/photo/betask/Mobile2.jpg",
        "/photo/betask/Mobile3.jpg",
      ],
    },
    {
      id: 8,
      title: "SparkJoy Company",
      description: "Design Websites and Application",
      logo: "/photo/sparkjoy.png",
      category: "Novel Application",
      images: ["/photo/sparkjoy/Desktop.png", "/photo/sparkjoy/Home.png"],
    },
  ];

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Portfolio</span>
          </div>

          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            {["home", "about", "portfolio", "contact"].map((item) => (
              <button
                key={item}
                className={`nav-link ${activeSection === item ? "active" : ""}`}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hello, I'm <span className="highlight">Sorayut Thamsanong</span>
            </h1>
            <p className="hero-subtitle">
              UX-UI Designer & Front-end Developer
            </p>
            <p className="hero-description">
              I am someone who loves and is passionate about coding. I enjoy
              solving problems that arise as a way to enhance my knowledge for
              both personal growth and the benefit of my organization.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
              </button>
              <div
                className="cv-download-wrapper"
                style={{ position: "relative" }}
              >
                <button
                  className="btn-secondary"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  CV Download
                </button>

                <div className={`cv-dropdown ${showDropdown ? "show" : ""}`}>
                  <button onClick={() => handleDownload("developer")}>
                    📘 Developer CV
                  </button>
                  <button onClick={() => handleDownload("uxui")}>
                    🎨 UX/UI CV
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="code-snippet">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span> = {"{"}
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">name:</span>
                  <span className="code-string">'Sorayut_Thamsanong'</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">skills:</span>
                  <span className="code-array">['React', 'Figma']</span>,
                </div>
                <div className="code-line code-indent">
                  <span className="code-property">passion:</span>
                  <span className="code-string">'Innovation'</span>
                </div>
                <div className="code-line">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Get to know more about my background and expertise
            </p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p className="about-paragraph">
                I’m a passionate Frontend Developer who loves building beautiful
                and functional web experiences. I enjoy solving complex problems
                and continuously learning new technologies to grow both
                personally and professionally.
              </p>
              <p className="about-paragraph">
                When I’m not coding, I enjoy spending time exploring new places,
                learning about design trends, and contributing to open-source
                projects.
              </p>

              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Front-End</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">TypeScript(basic)</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">HTML5</span>
                    <span className="skill-tag">Material UI</span>
                    <span className="skill-tag">Bootstrap</span>
                    <span className="skill-tag">Tailwind(learning)</span>
                    <span className="skill-tag">GitHub</span>
                    <span className="skill-tag">Postman</span>
                    <span className="skill-tag">Visual Studio</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>UX-UI Design</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Figma</span>
                    <span className="skill-tag">Adobe XD</span>
                    <span className="skill-tag">Adobe Illustrator</span>
                    <span className="skill-tag">Adobe Photoshop</span>
                    <span className="skill-tag">Sketch</span>
                    <span className="skill-tag">Maya</span>
                    <span className="skill-tag">Blender</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Companies</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Portfolio</h2>
            <p className="section-subtitle">
              Explore my professional work and academic projects
            </p>
            <a
              className="section-link"
              href="https://portfolio-sorayut.my.canva.site/"
              target="_blank"
            >
              View Full Portfolio
            </a>
          </div>

          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="card-image">
                  <img src={project.logo} alt={project.title} />
                  <div className="card-overlay">
                    <a
                      href={`/project/${project.id}`}
                      className="view-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                      View Project
                    </a>
                  </div>
                </div>
                <div className="card-content">
                  <div className="card-category">{project.category}</div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Let's connect and discuss opportunities
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Start a Conversation</h3>
              <p>
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <div className="contact-methods">
                <a href="tel:+66961475075" className="contact-item">
                  <Phone size={20} />
                  <span>096-147-5075</span>
                </a>
                <a
                  href="mailto:your.minerdev1103@gmail.com"
                  className="contact-item"
                >
                  <Mail size={20} />
                  <span>minerdev1103@gmail.com</span>
                </a>
                <a
                  href="https://github.com/Minerdev1103"
                  className="contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  <span>github.com/Minerdev1103</span>
                </a>
                <a
                  href="https://line.me/ti/p/0611172353"
                  className="contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare size={20} />
                  <span>Line: 0611172353</span>
                </a>
              </div>
            </div>

            <div className="contact-form" name="get-in-touch" netlify>
              <div className="form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                    name="your-name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-input"
                    name="your-email"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Your Message"
                    className="form-textarea"
                    rows="5"
                    name="your-message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary full-width"
                  onClick={() => alert("Message sent! (This is a demo)")}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sorayut Thamsanong. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
