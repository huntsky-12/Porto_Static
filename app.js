
(function () {
  // ---------------------- Data ----------------------
  const data = {
    name: "Devesh ",
    title: "Software Engineering Student",
    tagline: "Building scalable backend and full-stack solutions",
    email: "deveshdock@gmail.com",
    phone: "+91 6394826339",
    location: "Chennai, India",
    linkedin: "https://linkedin.com/in/devesh1205",
    github: "https://github.com/huntsky-12",
    resume: "Devesh_De_Shaw_Resume.pdf",
    skills: {
      Languages: ["C", "Python", "Java", "HTML", "CSS", "SQL"],
      "Frameworks/Libraries": ["Flask", "Node.js", "Express.js"],
      Databases: ["MySQL", "SQLite"],
      Tools: ["Git", "GitHub", "Postman", "Linux"],
    },
    education: [
      {
        degree: "B.E. in Computer Science",
        institution: "Sri Sivasubramaniya Nadar College of Engineering",
        location: "Chennai, India",
        gpa: "8.42/10",
        grad: "May 2027",
      },
      {
        degree: "CBSE (12th)",
        institution: "Disha Delphi Global Senior Secondary School",
        location: "Rajasthan, India",
        score: "95.40%",
        year: "2023",
      },
    ],
    achievements: [
      "Solved 150+ LeetCode problems; Rank 1427 (Top 5%) in Biweekly Contest",
      "NPTEL Data Analysis certification (Elite grade)",
    ],
    projects: [
      {
        name: "404Thoughts",
        description: "Responsive static blog site (404 page) built with EJS templating.",
        tech: ["EJS", "Node.js", "Express"],
        github_url: "https://github.com/huntsky-12/404Thoughts",
      },
      {
        name: "Master-Yodas-class",
        description: "Terminal-based University Course Management System with GPA rules.",
        tech: ["C"],
        github_url: "https://github.com/huntsky-12/Master-Yodas-class",
      },
      {
        name: "BakBak",
        description: "Real-Time Java chat application with multi-threaded server.",
        tech: ["Java", "Sockets", "SQLite"],
        github_url: "https://github.com/huntsky-12/BakBak",
      },
      {
        name: "Vehicle Telemetry Data Tracker",
        description: "RESTful APIs for ingesting and retrieving vehicle telemetry data.",
        tech: ["Flask", "SQLite"],
        github_url: "",
      },
      {
        name: "Personal Blog Platform",
        description: "Modular blogging platform with Express and EJS.",
        tech: ["Node.js", "Express", "EJS", "HTML", "CSS"],
        github_url: "",
      },
    ],
  };

  // ---------------------- DOM Elements ----------------------
  const aboutText = document.getElementById("about-text");
  const projectsGrid = document.getElementById("projects-grid");
  const skillsWrapper = document.getElementById("skills-wrapper");
  const eduList = document.getElementById("edu-list");
  const achievementsList = document.getElementById("achievements-list");
  const yearSpan = document.getElementById("year");
  const navLinksNodeList = document.querySelectorAll(".nav-link");
  const hamburgerBtn = document.getElementById("hamburger");
  const navLinksContainer = document.getElementById("nav-links");
  const contactForm = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

  const navLinks = Array.from(navLinksNodeList);

  // ---------------------- Populate Content ----------------------
  function populateAbout() {
    const text = `I am a ${data.title} based in ${data.location}. ${data.tagline}.`;
    aboutText.textContent = text;
    aboutText.classList.add("fade-in");
  }

  function createProjectCard(project) {
    const card = document.createElement("div");
    card.className = "project-card fade-in";

    const nameEl = document.createElement("h3");
    nameEl.className = "project-card__name";
    nameEl.textContent = project.name;
    card.appendChild(nameEl);

    const descEl = document.createElement("p");
    descEl.className = "project-card__desc";
    descEl.textContent = project.description;
    card.appendChild(descEl);

    // Tech badges
    project.tech.forEach((tech) => {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = tech;
      card.appendChild(badge);
    });

    // Footer actions
    const footer = document.createElement("div");
    footer.className = "project-card__footer";
    if (project.github_url) {
      const link = document.createElement("a");
      link.href = project.github_url;
      link.target = "_blank";
      link.rel = "noopener";
      link.setAttribute("aria-label", `${project.name} GitHub`);
      link.innerHTML = '<i class="fa-brands fa-github"></i>';
      footer.appendChild(link);
    }
    card.appendChild(footer);
    return card;
  }

  function populateProjects() {
    const fragment = document.createDocumentFragment();
    data.projects.forEach((project) => fragment.appendChild(createProjectCard(project)));
    projectsGrid.appendChild(fragment);
  }

  function populateSkills() {
    const fragment = document.createDocumentFragment();
    Object.entries(data.skills).forEach(([category, skills]) => {
      const group = document.createElement("div");
      group.className = "skill-group fade-in";

      const title = document.createElement("h3");
      title.className = "skill-group__title";
      title.textContent = category;
      group.appendChild(title);

      skills.forEach((skill) => {
        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = skill;
        group.appendChild(badge);
      });
      fragment.appendChild(group);
    });
    skillsWrapper.appendChild(fragment);
  }

  function populateEducation() {
    const fragment = document.createDocumentFragment();
    data.education.forEach((edu) => {
      const li = document.createElement("li");
      li.className = "edu-item fade-in";

      const degree = document.createElement("p");
      degree.className = "edu-degree";
      degree.textContent = edu.degree;
      li.appendChild(degree);

      const inst = document.createElement("p");
      inst.className = "edu-institution";
      inst.textContent = `${edu.institution} • ${edu.location}`;
      li.appendChild(inst);

      const detail = document.createElement("p");
      detail.textContent = edu.gpa ? `GPA: ${edu.gpa} • Graduating ${edu.grad}` : `${edu.score} • ${edu.year}`;
      li.appendChild(detail);

      fragment.appendChild(li);
    });
    eduList.appendChild(fragment);
  }

  function populateAchievements() {
    const fragment = document.createDocumentFragment();
    data.achievements.forEach((ach) => {
      const li = document.createElement("li");
      li.className = "fade-in";
      li.textContent = ach;
      fragment.appendChild(li);
    });
    achievementsList.appendChild(fragment);
  }

  // ---------------------- Utilities ----------------------
  function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    // Force reflow for transition restart
    void toast.offsetWidth;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      toast.classList.add("hidden");
    }, 3000);
  }

  function initFadeAndHighlight() {
    const fadeObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

    const sections = document.querySelectorAll('main section[id]');
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
          if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(sec => navObserver.observe(sec));
  }

  // Smooth scroll attaching per-link to ensure reliability
  function initSmoothScroll() {
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
          if (navLinksContainer.classList.contains('open')) {
            toggleMobileNav();
          }
        }
      });
    });
  }

  function toggleMobileNav() {
    const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', (!expanded).toString());
    navLinksContainer.classList.toggle('open');
  }

  // ---------------------- Event Listeners ----------------------
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileNav);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const mailto = `mailto:${data.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AReply%20to:%20${encodeURIComponent(email)}`;
      window.open(mailto, '_blank');
      contactForm.reset();
      showToast('Email draft opened in your client');
    });
  }

  // ---------------------- Init ----------------------
  document.addEventListener('DOMContentLoaded', () => {
    populateAbout();
    populateProjects();
    populateSkills();
    populateEducation();
    populateAchievements();

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    initFadeAndHighlight();
    initSmoothScroll();
  });
})();
