import { useEffect, useState } from "react";
import Project3D from "./Project3D";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  const closeMenu = () => setMenuOpen(false);

  const skillGroups = [
    {
      category: "Programming Languages",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Java", "C#", "Python"],
    },
    {
      category: "Frontend & Backend",
      technologies: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "Django", "Flask"],
    },
    {
      category: "Mobile Development",
      technologies: ["Flutter", "Dart", "Kotlin", "React Native"],
    },
    {
      category: "Data Science & Databases",
      technologies: ["NumPy", "Pandas", "MySQL", "SQL", "MongoDB", "NoSQL"],
    },
    {
      category: "Tools & Technologies",
      technologies: ["Git", "GitHub", "Docker", "REST APIs", "Figma", "AI", "Accessibility", "Kali Linux", "Linux System Administration"],
    },
  ];

  const services = [
    {
      number: "01",
      icon: "◈",
      title: "Web Development",
      description:
        "Modern, responsive and user-focused websites and web applications built with modern technologies.",
      tags: ["React", "Next.js", "JavaScript"],
    },
    {
      number: "02",
      icon: "▣",
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications designed with smooth experiences, clean interfaces and practical functionality.",
      tags: ["Flutter", "React Native", "Android"],
    },
    {
      number: "03",
      icon: "⌘",
      title: "Full-Stack Development",
      description:
        "Complete web applications combining modern frontend interfaces with reliable backend services and databases.",
      tags: ["Node.js", "MongoDB", "REST API"],
    },
    {
      number: "04",
      icon: "✦",
      title: "UI/UX & Accessibility",
      description:
        "Clean, responsive and accessible interfaces designed to make digital products easier and more enjoyable to use.",
      tags: ["UI/UX", "Responsive", "Accessibility"],
    },
    {
      number: "05",
      icon: "</>",
      title: "API & Backend Development",
      description:
        "Backend systems and REST APIs that connect applications with data and provide reliable application functionality.",
      tags: ["Node.js", "REST API", "MongoDB"],
    },
    {
      number: "06",
      icon: "⚙",
      title: "AI & Automation",
      description:
        "AI-powered features and automated workflows that help turn ideas into smarter digital experiences.",
      tags: ["AI", "Automation", "Integration"],
    },
    {
      number: "07",
      icon: "⬡",
      title: "Docker & Deployment",
      description:
        "Containerized development and basic deployment workflows for modern applications and projects.",
      tags: ["Docker", "Deployment", "DevOps"],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "AgroPulse",
      category: "AGRICULTURE / WEB PLATFORM",
      description:
        "A smart agriculture and farm operations platform designed to digitize farm management, monitor crop activities, manage resources and support better agricultural decision-making.",
      tags: ["TypeScript", "Farm Management", "Web"],
      visual: "tractor",
      github: "https://github.com/SilvaDeShakila/AgroPulse",
    },
    {
      number: "02",
      title: "FOODORA",
      category: "FULL-STACK WEB APPLICATION",
      description:
        "A premium food delivery platform for Sri Lanka featuring restaurant discovery, menus, cart management, checkout, order tracking and restaurant management tools.",
      tags: ["React", "TypeScript", "Node.js", "Express"],
      visual: "scooter",
      github: "https://github.com/SilvaDeShakila/FOODORA",
    },
    {
      number: "03",
      title: "NEXORA Studio",
      category: "VIDEO / PHOTO EDITING PLATFORM",
      description:
        "A modern video and photo editing studio powered by React, FastAPI and FFmpeg, featuring timeline editing, visual effects, transitions and creative media tools.",
      tags: ["React", "FastAPI", "FFmpeg", "TypeScript"],
      visual: "nexora",
      github: "https://github.com/SilvaDeShakila/NEXORA-STUDIO",
    },
    {
      number: "04",
      title: "AutoForge",
      category: "WEB APPLICATION",
      description:
        "A modern web application built with Next.js, React and TypeScript, featuring a responsive interface, reusable components and a scalable project structure.",
      tags: ["Next.js", "React", "TypeScript", "Node.js"],
      visual: "car",
      github: "https://github.com/SilvaDeShakila/autoforge",
      live: "https://autoforge-tawny.vercel.app",
    },
    {
      number: "05",
      title: "Smart Workspace",
      category: "FULL-STACK WEB APPLICATION",
      description:
        "A workspace management platform built with a React frontend and Express backend, designed with a responsive interface and organized application architecture.",
      tags: ["React", "Vite", "Node.js", "Express", "Tailwind CSS"],
      visual: "laptop",
      github: "https://github.com/SilvaDeShakila/smart-workspace",
      live: "https://smart-workspace-mocha.vercel.app",
    },
    {
      number: "06",
      title: "VoteX",
      category: "MOBILE APPLICATION",
      description:
        "A secure digital voting application built with Flutter and Firebase, featuring voter registration, email verification, biometric authentication and election management.",
      tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
      visual: "ballot",
      github: "https://github.com/SilvaDeShakila/voteapp",
    },
    {
      number: "07",
      title: "Hotel Management System",
      category: "WEB APPLICATION",
      description:
        "A Flask-based hotel management system with reservation workflows, housekeeping, payment processing, invoice management and a responsive interface.",
      tags: ["Python", "Flask", "HTML", "Web"],
      visual: "hotel",
      github: "https://github.com/SilvaDeShakila/HotelManagementSystem",
    },
    {
      number: "08",
      title: "Shopora",
      category: "E-COMMERCE / MOBILE APP",
      description:
        "A premium e-commerce application with product browsing, shopping cart and wishlist management, persistent data, API integration and light and dark themes.",
      tags: ["Flutter", "Dart", "Provider", "REST API"],
      visual: "shopping",
      github: "https://github.com/SilvaDeShakila/shopora-premium-ecommerce",
    },
    {
      number: "09",
      title: "Mealora",
      category: "FOOD DELIVERY / MOBILE APP",
      description:
        "A food delivery application featuring restaurant discovery, food search, category filters, cart management, checkout, order history and simulated order tracking.",
      tags: ["Flutter", "Dart", "Provider", "SharedPreferences"],
      visual: "food",
      github: "https://github.com/SilvaDeShakila/mealora-food-delivery-app",
    },
    {
      number: "10",
      title: "Skyora",
      category: "WEATHER / MOBILE APP",
      description:
        "A weather forecast application providing real-time weather updates, city search, hourly forecasts, multi-day forecasts and favorite city management.",
      tags: ["Flutter", "Dart", "Weather API", "REST API"],
      visual: "weather",
      github: "https://github.com/SilvaDeShakila/skyora-weather-forecast-app",
    },
    {
      number: "11",
      title: "Expense Tracker",
      category: "FINANCE / MOBILE APP",
      description:
        "A Flutter expense tracking application with Firebase authentication, Cloud Firestore, expense management, analytics, search and filtering.",
      tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
      visual: "finance",
      github: "https://github.com/SilvaDeShakila/expense-tracker-flutter",
    },
    {
      number: "12",
      title: "Quizora",
      category: "EDUCATION / MOBILE APP",
      description:
        "An interactive learning and quiz application offering 25 topics across five subject areas, 250 questions, progress tracking and quiz feedback.",
      tags: ["Flutter", "Dart", "SQLite", "Education"],
      visual: "quiz",
      github: "https://github.com/SilvaDeShakila/quizora-learning-app",
    },
    {
      number: "13",
      title: "TaskFlow",
      category: "PRODUCTIVITY / MOBILE APP",
      description:
        "A Flutter task management application with task creation, editing, priorities, search, filters, sorting and productivity statistics.",
      tags: ["Flutter", "Dart", "Task Management", "Mobile"],
      visual: "tasks",
      github: "https://github.com/SilvaDeShakila/TaskFlow",
    },
    {
      number: "14",
      title: "QuickQR",
      category: "UTILITY / MOBILE APP",
      description:
        "A Flutter QR code utility for generating, previewing, saving and sharing QR codes, with input validation and locally stored history.",
      tags: ["Flutter", "Dart", "QR Generation", "Mobile"],
      visual: "qr",
      github: "https://github.com/SilvaDeShakila/QuickQR",
    },
    {
      number: "15",
      title: "Accessible Cooking Assistant",
      category: "ACCESSIBILITY / WEB",
      description:
        "An innovative web application designed specifically for visually impaired users, featuring voice-guided recipes and accessible UI components.",
      tags: ["Next.js", "TypeScript", "Web Audio API", "Accessibility"],
      visual: "cooking",
      github: "",
    },
  ];

  const education = [
    {
      year: "10 OCT 2022 – PRESENT",
      title: "Bachelor of Information Technology (Hons.) in Software Engineering",
      institution: "ESU ESOFT Uni",
      location: "Colombo 04, Sri Lanka",
      description:
        "Building strong foundations in software engineering, database design, and web and mobile application development. Completing individual and group projects that apply theoretical knowledge to practical IT solutions while developing problem-solving, teamwork and innovative thinking.",
    },
    {
      year: "04 JAN 2021 – 08 JUN 2022",
      title: "Diploma in Information Technology",
      institution: "ESOFT Metro Campus",
      location: "Kurunegala, Sri Lanka",
      description:
        "Completed with Merit overall grade. A 1,200-hour Assured Diploma certified by Pearson, covering Software Engineering, Python, C# and SQL databases. Final project involved system design, technical documentation and implementation.",
    },
    {
      year: "05 JAN 2009 – 02 AUG 2019",
      title: "Ordinary and Advanced Level Education",
      institution: "D.B. Welagedara Central College",
      location: "Kurunegala, Sri Lanka",
      description:
        "Completed school education at D.B. Welagedara Central College.",
    },
  ];

  const achievements = [
    {
      number: "01",
      title: "Full-Stack Development",
      description:
        "Building complete applications across frontend, backend, APIs and databases.",
    },
    {
      number: "02",
      title: "Mobile Development",
      description:
        "Developing mobile applications with modern cross-platform technologies.",
    },
    {
      number: "03",
      title: "Accessible Technology",
      description:
        "Creating inclusive digital experiences with accessibility considered as part of the development process.",
    },
    {
      number: "04",
      title: "AI & Automation",
      description:
        "Exploring AI-powered applications and automation-focused digital solutions.",
    },
  ];

  const certificates = [
    {
      number: "01",
      title: "Basics of Artificial Intelligence",
      issuer: "UniAthena",
      year: "SEP 2026",
      credentialId: "2044-1332-7068",
      description:
        "Certificate covering the fundamentals and core concepts of Artificial Intelligence.",
      credential:
        "https://uniathena.com/verify/certificate?certID=2044-1332-7068",
    },
    {
      number: "02",
      title: "OOPs in Java",
      issuer: "Great Learning",
      year: "CERTIFIED",
      credentialId: "UDHSAUQL",
      description:
        "Certificate focused on Object-Oriented Programming concepts and implementation using Java.",
      credential:
        "https://www.mygreatlearning.com/certificate/UDHSAUQL",
    },
    {
      number: "03",
      title: "Python Project Development",
      issuer: "Great Learning",
      year: "CERTIFIED",
      credentialId: "TGDURRIC",
      description:
        "Certificate focused on developing projects using Python and applying practical programming concepts.",
      credential:
        "https://www.mygreatlearning.com/certificate/TGDURRIC",
    },
    {
      number: "04",
      title: "Foundational C# with Microsoft",
      issuer: "Microsoft",
      year: "ISSUED SEP 2026",
      credentialId:
        "fcc-2a0e5c2c-79a6-4fcf-a87f-386b2e9064c2-fcswm",
      description:
        "Certificate focused on foundational C# programming concepts, .NET, and practical software development skills.",
      credential:
        "https://www.freecodecamp.org/certification/fcc-2a0e5c2c-79a6-4fcf-a87f-386b2e9064c2/foundational-c-sharp-with-microsoft",
    },
    {
      number: "05",
      title: "Advanced Linux Program",
      issuer: "FOSS Community - University of Kelaniya",
      year: "DEC 2025",
      credentialId: "693ef7917d7b8f2d3b7ac889",
      description:
        "Advanced Linux training covering Kali Linux and Linux System Administration.",
      credential:
        "https://badges.parchment.com/public/assertions/Q19dpZmqQXGmhsE9gdt9Ig",
    },  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-mark">S</span>
          <span>SHAKILA</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#achievements" onClick={closeMenu}>
            Achievements
          </a>
          <a href="#certificates" onClick={closeMenu}>
            Certificates
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☼" : "☾"}
          </button>

          <a href="#contact" className="nav-talk">
            Let&apos;s Talk <span>↗</span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-grid-bg"></div>

          <div className="hero-top-line">
            <span>PORTFOLIO / 2026</span>
            <span>01 — 09</span>
          </div>

          <div className="hero-title-row">
            <div className="hero-title-content">
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                SOFTWARE ENGINEERING UNDERGRADUATE
              </div>

              <h1>
                SHAKILA
                <span>DE SILVA</span>
              </h1>

              <p className="hero-role">
                Full-Stack &amp; Mobile Developer
              </p>

              <p className="hero-description">
                I&apos;m passionate about building responsive web and mobile
                applications and solving complex problems through elegant,
                scalable code. I enjoy turning ideas into meaningful digital
                experiences using modern technologies.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  View My Work <span>↓</span>
                </a>

                <a
                  href="/Shakila Chamuditha De Silva _260716_192317.pdf"
                  download="Shakila Chamuditha De Silva _260716_192317.pdf"
                  className="secondary-button"
                >
                  Download CV <span>↓</span>
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://github.com/SilvaDeShakila"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/shakila-de-silva-6516b2253/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* PROFILE PHOTO */}
            <div className="hero-profile">
              <div className="profile-glow glow-one"></div>
              <div className="profile-glow glow-two"></div>

              <div className="profile-orbit">
                <span></span>
              </div>

              <div className="hero-photo">
                <div className="photo-shine"></div>

                <img src="/my.jpeg" alt="Shakila De Silva" />
              </div>

              <div className="profile-floating-tag tag-one">
                <span></span>
                DEVELOPER
              </div>

              <div className="profile-floating-tag tag-two">
                2026 <span>↗</span>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span></span>
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="intro-strip">
          <div>
            SOFTWARE ENGINEERING <span>×</span> FULL-STACK <span>×</span> MOBILE
          </div>
          <div>
            SOFTWARE ENGINEERING <span>×</span> FULL-STACK <span>×</span> MOBILE
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <span className="section-label">ABOUT ME</span>
          </div>

          <div className="about-grid">
            <div className="about-title">
              <p className="small-label">WHO I AM</p>

              <h2>
                Building
                <span>with purpose.</span>
              </h2>
            </div>

            <div className="about-content">
              <p className="about-lead">
                I&apos;m a Software Engineering Undergraduate passionate about
                creating modern digital experiences that are functional,
                accessible and visually engaging.
              </p>

              <div className="about-details">
                <div>
                  <span>01</span>
                  <h3>Who I am</h3>
                  <p>
                    A developer who enjoys turning ideas into practical
                    software solutions and continuously learning new
                    technologies.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <h3>What I build</h3>
                  <p>
                    Responsive websites, full-stack applications, mobile apps,
                    APIs and AI-powered digital experiences.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <h3>What I&apos;m interested in</h3>
                  <p>
                    Modern web technologies, mobile development, AI,
                    automation, accessibility and scalable software.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat">
              <strong>15+</strong>
              <span>Featured Projects</span>
            </div>

            <div className="stat">
              <strong>12+</strong>
              <span>Technologies</span>
            </div>

            <div className="stat">
              <strong>∞</strong>
              <span>Ideas to Build</span>
            </div>

            <div className="stat">
              <strong>24/7</strong>
              <span>Learning Mindset</span>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section dark-section">
          <div className="section-heading">
            <span className="section-number">03</span>
            <span className="section-label">EDUCATION</span>
          </div>

          <div className="section-intro">
            <p className="small-label">ACADEMIC JOURNEY</p>

            <h2>
              Learning.
              <span>Building.</span>
              Growing.
            </h2>
          </div>

          <div className="timeline">
            {education.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{item.year}</div>

                <div className="timeline-line">
                  <span></span>
                </div>

                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <span className="education-institution">{item.institution}</span>
                  <span className="education-location">{item.location}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
</section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="section">
          <div className="section-heading">
            <span className="section-number">04</span>
            <span className="section-label">ACHIEVEMENTS</span>
          </div>

          <div className="section-intro split-intro">
            <div>
              <p className="small-label">MILESTONES</p>

              <h2>
                Progress
                <span>in motion.</span>
              </h2>
            </div>

            <p>
              Areas where I&apos;ve been developing practical experience
              through projects, experimentation and continuous learning.
            </p>
          </div>

          <div className="achievement-grid">
            {achievements.map((item) => (
              <article className="achievement-card" key={item.number}>
                <span className="card-number">{item.number}</span>

                <div className="card-icon">✦</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="section dark-section">
          <div className="section-heading">
            <span className="section-number">05</span>
            <span className="section-label">CERTIFICATES</span>
          </div>

          <div className="section-intro split-intro">
            <div>
              <p className="small-label">LEARNING &amp; CREDENTIALS</p>

              <h2>
                Knowledge
                <span>certified.</span>
              </h2>
            </div>

            <p>
              A collection of certifications, courses and professional
              learning milestones that support my technical journey.
            </p>
          </div>

          <div className="certificate-grid">
            {certificates.map((certificate) => (
              <article
                className="certificate-card"
                key={certificate.number}
              >
                <div className="certificate-top">
                  <span>{certificate.number}</span>
                  <span>{certificate.year}</span>
                </div>

                <div className="certificate-seal">
                  <span>✦</span>
                </div>

                <p className="certificate-issuer">
                  {certificate.issuer}
                </p>

                <h3>{certificate.title}</h3>

                <p>{certificate.description}</p>

                <div className="credential-id">
                  <span>CREDENTIAL ID</span>
                  <strong>{certificate.credentialId}</strong>
                </div>

                <div className="certificate-footer">
                  <span>VERIFICATION</span>

                  <a
                    href={certificate.credential}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW CREDENTIAL ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section services-section">
          <div className="section-heading">
            <span className="section-number">06</span>
            <span className="section-label">SERVICES</span>
          </div>

          <div className="section-intro split-intro">
            <div>
              <p className="small-label">WHAT I CAN BUILD</p>

              <h2>
                Ideas into
                <span>digital products.</span>
              </h2>
            </div>

            <p>
              From responsive websites to mobile applications and intelligent
              automation, I build digital solutions around real-world needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span>{service.number}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="service-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section dark-section">
          <div className="section-heading">
            <span className="section-number">07</span>
            <span className="section-label">TECHNICAL SKILLS</span>
          </div>

          <div className="section-intro split-intro">
            <div>
              <p className="small-label">MY TOOLKIT</p>

              <h2>
                Tools I use
                <span>to build.</span>
              </h2>
            </div>

            <p>
              A growing technical toolkit covering frontend, backend, mobile,
              APIs, databases, deployment and modern development practices.
            </p>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.category}>
                <h3>{group.category}</h3>
                <div className="technology-cloud">
                  {group.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <span className="section-number">08</span>
            <span className="section-label">SELECTED WORK</span>
          </div>

          <div className="section-intro split-intro">
            <div>
              <p className="small-label">PROJECTS</p>

              <h2>
                Things I&apos;ve
                <span>built.</span>
              </h2>
            </div>

            <p>
              A collection of web and mobile applications focused on practical problem-solving,
              modern technologies, accessibility and user-friendly experiences.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-visual ${project.visual}`}>
                  <Project3D type={project.visual} title={project.title} />
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    <span>{project.number}</span>
                    <span>{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.live ? (<a href={project.live} target="_blank" rel="noreferrer">Live Preview ↗</a>) : null}

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    ) : (
                      <span className="project-link-disabled">
                        GitHub ↗
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section dark-section">
          <div className="section-heading">
            <span className="section-number">09</span>
            <span className="section-label">CONTACT</span>
          </div>

          <div className="contact-grid">
            <div className="contact-left">
              <p className="small-label">LET&apos;S CONNECT</p>

              <h2>
                Have an idea?
                <span>Let&apos;s build it.</span>
              </h2>

              <p className="contact-description">
                Whether it&apos;s a website, mobile application, AI-powered
                idea or something completely different, I&apos;d love to hear
                about it.
              </p>

              <a
                href="mailto:desilvashakila655@gmail.com"
                className="email-link"
              >
                desilvashakila655@gmail.com <span>↗</span>
              </a>

              <div className="contact-socials">
                <a
                  href="https://github.com/SilvaDeShakila"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/shakila-de-silva-6516b2253/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/desilvashakila655@gmail.com"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div className="form-group">
                <label htmlFor="name">YOUR NAME</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL ADDRESS</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">MESSAGE</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your idea..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                SEND MESSAGE <span>↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <span className="logo-mark">S</span>
          SHAKILA DE SILVA
        </div>

        <p>Designed &amp; built with curiosity.</p>

        <span>© 2026 SHAKILA DE SILVA</span>
      </footer>
    </div>
  );
}

export default App;
