// ============================================================
// DATA — edit this block to update site content, no HTML digging required
// ============================================================
const ICON = (slug, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

const DATA = {
  stack: [
    {
      group: 'Languages & Frameworks',
      items: [
        { name: 'Java', icon: ICON('java') },
        { name: 'Python', icon: ICON('python') },
        { name: 'SQL', icon: null },
        { name: 'JPQL', icon: null },
        { name: 'Spring Boot', icon: ICON('spring') },
        { name: 'FastAPI', icon: ICON('fastapi') },
        { name: 'Spring AI', icon: ICON('spring') },
        { name: 'Spring Data JPA', icon: ICON('hibernate') },
        { name: 'Hibernate', icon: ICON('hibernate') },
      ],
    },
    {
      group: 'Microservices',
      items: [
        { name: 'REST APIs', icon: null },
        { name: 'Apache Kafka', icon: ICON('apachekafka') },
        { name: 'gRPC', icon: null },
        { name: 'WebSocket', icon: null },
        { name: 'Eureka', icon: null },
        { name: 'API Gateway', icon: null },
        { name: 'Resilience4j', icon: null },
        { name: 'Event-Driven Design', icon: null },
      ],
    },
    {
      group: 'Databases',
      items: [
        { name: 'PostgreSQL', icon: ICON('postgresql') },
        { name: 'MySQL', icon: ICON('mysql') },
        { name: 'Redis', icon: ICON('redis') },
        { name: 'Flyway', icon: null },
        { name: 'Liquibase', icon: null },
        { name: 'pgvector', icon: null },
      ],
    },
    {
      group: 'Cloud & DevOps',
      items: [
        { name: 'AWS (EC2, S3, SNS, SES)', icon: ICON('amazonwebservices', 'original-wordmark') },
        { name: 'Docker', icon: ICON('docker') },
        { name: 'Kubernetes', icon: ICON('kubernetes') },
        { name: 'Git', icon: ICON('git') },
        { name: 'GitHub Actions', icon: ICON('githubactions') },
        { name: 'CI/CD', icon: null },
      ],
    },
    {
      group: 'Testing & Monitoring',
      items: [
        { name: 'JUnit 5', icon: ICON('junit') },
        { name: 'Mockito', icon: null },
        { name: 'Prometheus', icon: ICON('prometheus') },
        { name: 'Grafana', icon: ICON('grafana') },
        { name: 'ELK Stack', icon: ICON('elasticsearch') },
      ],
    },
    {
      group: 'Security & AI',
      items: [
        { name: 'JWT', icon: null },
        { name: 'OAuth2', icon: null },
        { name: 'RBAC', icon: null },
        { name: 'Passkeys', icon: null },
        { name: 'OpenAI GPT-4o', icon: ICON('openai') },
        { name: 'Gemini API', icon: null },
        { name: 'RAG', icon: null },
        { name: 'TimeFold AI', icon: null },
      ],
    },
    {
      group: 'Tools & Integrations',
      items: [
        { name: 'IntelliJ IDEA', icon: ICON('intellij') },
        { name: 'Postman', icon: ICON('postman') },
        { name: 'Swagger / OpenAPI', icon: null },
        { name: 'HubSpot', icon: null },
        { name: 'Zoom SDK', icon: null },
        { name: 'Stripe', icon: ICON('stripe') },
        { name: 'Razorpay', icon: null },
        { name: 'Cashfree', icon: null },
      ],
    },
  ],

  changelog: [
    {
      version: 'v1.0',
      role: 'Associate Backend Developer',
      company: 'Oodles Technologies · Gurugram',
      dates: 'Apr 2024 — Present',
      points: [
        'Led the architectural decomposition of a core monolithic application into decoupled Spring Boot microservices, with isolated domain databases and Resilience4j circuit breakers, improving system throughput by 20% and lowering regression defects by 15%.',
        'Resolved severe database bottlenecks by fixing JPA/JPQL execution plans and N+1 select queries, and implemented a multi-tier Redis caching layer that significantly reduced database read-load.',
        'Engineered an asynchronous HubSpot webhook processing pipeline with custom RBAC filtering, optimizing thread-pool execution to achieve stable, sub-second data synchronization into PostgreSQL.',
        'Spearheaded migration of production services from Java 8 to Java 17 and Spring Boot 3.3.x, eliminating critical security vulnerabilities and standardizing schema management via Flyway and Liquibase.',
        'Built a natural language interface using Spring AI and GPT-4o for secure SQL generation and semantic search, reducing legal document processing time by 40%.',
        'Built centralized telemetry infrastructure using Prometheus, Grafana and the ELK Stack to track metrics and log traces across distributed microservices, reducing MTTR by 30%.',
        'Designed and automated multi-tenant payroll workflows using Spring Batch to reliably process high-volume daily runs with strict transactional isolation between corporate tenants.',
        'Established JUnit 5 and Mockito testing patterns that maintained code coverage above 85%, led HLD/LLD system design reviews, and mentored a team of 5 associate engineers.',
      ],
    },
  ],

  projects: [
    {
      name: 'Therapy And Beyond',
      desc: 'Legacy monolith migrated to a microservices architecture with asynchronous scheduling and cross-service token auth.',
      flow: ['FastAPI Service', 'Spring Boot API', 'PostgreSQL + Redis'],
      points: [
        'Migrated a legacy monolithic application to microservices and upgraded services from Java 8 to Java 17, improving scalability and maintainability.',
        'Designed asynchronous processing for shift-generation workflows, enabling recurring shifts up to a year in advance while cutting API response times.',
        'Integrated Redis caching for frequently accessed data, reducing database load and improving responsiveness.',
        'Implemented token-based authentication between FastAPI and Spring Boot services, securely validating and propagating access tokens across distributed systems.',
      ],
      tech: ['Java 17', 'Spring Boot', 'FastAPI', 'Redis', 'JWT/OAuth2'],
    },
    {
      name: 'FinTech Event Ticketing & Webinar Platform',
      desc: 'End-to-end ticketing and live webinar architecture with native video streaming and multi-currency checkout.',
      flow: ['Client', 'Spring Boot API', 'Zoom SDK / Stripe · Razorpay · Cashfree'],
      points: [
        'Engineered an end-to-end ticketing and live webinar architecture, natively integrating Zoom SDK for reliable in-platform video streaming.',
        'Developed a multi-currency payment checkout engine (Stripe, Razorpay, Cashfree) with strict database idempotency, increasing cross-border sales volume by 20%.',
      ],
      tech: ['Java', 'Spring Boot', 'Zoom SDK', 'Stripe', 'Razorpay', 'Cashfree'],
    },
  ],
};

// ============================================================
// TERMINAL TYPING EFFECT
// ============================================================
function initTerminal() {
  const cmdEl = document.getElementById('typedCommand');
  const responseEl = document.getElementById('terminalResponse');
  const cursor = document.getElementById('cmdCursor');
  const command = 'curl -s api.abhinavsrivastava.dev/v1/profile';

  const responseHTML =
`{
  <span class="k">"role"</span>: <span class="s">"Backend Engineer"</span>,
  <span class="k">"experience_years"</span>: <span class="v">2</span>,
  <span class="k">"stack"</span>: [<span class="s">"Java 17"</span>, <span class="s">"Spring Boot"</span>, <span class="s">"Kafka"</span>, <span class="s">"PostgreSQL"</span>],
  <span class="k">"applied_ai"</span>: [<span class="s">"GPT-4o"</span>, <span class="s">"RAG"</span>, <span class="s">"Spring AI"</span>],
  <span class="k">"status"</span>: <span class="s">"open_to_opportunities"</span>
}`;

  let i = 0;
  function typeChar() {
    if (i <= command.length) {
      cmdEl.textContent = command.slice(0, i);
      i++;
      setTimeout(typeChar, 32);
    } else {
      cursor.style.animationDuration = '0.6s';
      setTimeout(() => {
        responseEl.innerHTML = responseHTML;
        responseEl.classList.add('visible');
      }, 250);
    }
  }
  typeChar();
}

// ============================================================
// RENDER: STACK
// ============================================================
function chipHTML(item) {
  const iconPart = item.icon
    ? `<img src="${item.icon}" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'chip__fallback',textContent:'${item.name.charAt(0)}'}))" />`
    : `<span class="chip__fallback">${item.name.charAt(0)}</span>`;
  return `<span class="chip">${iconPart}${item.name}</span>`;
}

function renderStack() {
  const container = document.getElementById('stackGroups');
  container.innerHTML = DATA.stack.map(group => `
    <div class="stack__group">
      <h3>${group.group}</h3>
      <div class="chip-row">
        ${group.items.map(chipHTML).join('')}
      </div>
    </div>
  `).join('');
}

// ============================================================
// RENDER: CHANGELOG
// ============================================================
function renderChangelog() {
  const container = document.getElementById('changelog');
  container.innerHTML = DATA.changelog.map(entry => `
    <div class="changelog__entry">
      <div class="changelog__meta">
        <span class="changelog__version">${entry.version}</span>
        <span class="changelog__role">${entry.role}</span>
      </div>
      <div class="changelog__dates">${entry.dates}</div>
      <div class="changelog__company">${entry.company}</div>
      <ul class="changelog__list">
        ${entry.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// ============================================================
// RENDER: PROJECTS
// ============================================================
function flowHTML(nodes) {
  return `<div class="flow">${nodes
    .map((n, idx) => `<span class="flow__node">${n}</span>${idx < nodes.length - 1 ? '<span class="flow__arrow"></span>' : ''}`)
    .join('')}</div>`;
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = DATA.projects.map(p => `
    <div class="project-card">
      <h3>${p.name}</h3>
      ${flowHTML(p.flow)}
      <p class="project-card__desc">${p.desc}</p>
      <ul class="project-card__list">
        ${p.points.map(pt => `<li>${pt}</li>`).join('')}
      </ul>
      <div class="project-card__tech">
        ${p.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

// ============================================================
// NAV TOGGLE (mobile)
// ============================================================
function initNav() {
  const toggle = document.getElementById('navToggle');
  const routes = document.getElementById('navRoutes');
  toggle.addEventListener('click', () => {
    const isOpen = routes.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  routes.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      routes.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// CONTACT FORM — sends real email via EmailJS, routed through YOUR OWN
// connected email account (Gmail/Outlook/etc). No backend server needed.
//
// SETUP (one-time, ~5 minutes):
//   1. Create a free account at https://www.emailjs.com
//   2. Email Services → Add New Service → connect your own Gmail/Outlook/
//      other account. Copy the "Service ID" it gives you.
//   3. Email Templates → Create Template. Use variables named exactly
//      {{from_name}}, {{from_email}}, {{message}} in the template body
//      (these match the params sent below). Copy the "Template ID".
//   4. Account → General → copy your "Public Key".
//   5. Paste all three into EMAILJS_CONFIG below.
//   6. (Recommended) In EmailJS dashboard → Account → Security, restrict
//      allowed origins to your GitHub Pages domain so the public key can't
//      be used from anywhere else.
// ============================================================
const EMAILJS_CONFIG = {
  publicKey: 'i3excGoOt9qp1TDlH',
  serviceId: 'service_4eo5tks',
  templateId: 'template_puz5j7c',
};

function initContact() {
  const form = document.getElementById('contactForm');
  const payload = document.getElementById('contactPayload');
  const statusEl = document.getElementById('contactStatus');
  const submitBtn = document.getElementById('contactSubmit');
  const nameEl = document.getElementById('cName');
  const emailEl = document.getElementById('cEmail');
  const msgEl = document.getElementById('cMessage');

  if (window.emailjs && EMAILJS_CONFIG.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
  }

  function updatePayload() {
    payload.innerHTML =
`{
  <span class="k">"name"</span>: <span class="v">"${(nameEl.value || '').replace(/"/g, '\\"')}"</span>,
  <span class="k">"email"</span>: <span class="v">"${(emailEl.value || '').replace(/"/g, '\\"')}"</span>,
  <span class="k">"message"</span>: <span class="v">"${(msgEl.value || '').replace(/"/g, '\\"')}"</span>
}`;
  }
  [nameEl, emailEl, msgEl].forEach(el => el.addEventListener('input', updatePayload));

  function setStatus(text, kind) {
    statusEl.textContent = text;
    statusEl.className = 'contact__status' + (kind ? ` contact__status--${kind}` : '');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (EMAILJS_CONFIG.publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
      setStatus('Contact form isn\u2019t configured yet — see the EmailJS setup steps in script.js / README.', 'error');
      return;
    }

    submitBtn.disabled = true;
    setStatus('Sending…', 'sending');

    emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
      from_name: nameEl.value,
      from_email: emailEl.value,
      message: msgEl.value,
    }).then(() => {
      setStatus('Sent — thanks, I\u2019ll get back to you soon.', 'success');
      form.reset();
      updatePayload();
    }).catch((err) => {
      console.error('EmailJS error:', err);
      setStatus('Something went wrong sending that — try emailing me directly instead.', 'error');
    }).finally(() => {
      submitBtn.disabled = false;
    });
  });
}

// ============================================================
// BOOT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  initTerminal();
  renderStack();
  renderChangelog();
  renderProjects();
  initReveal();
  initNav();
  initContact();
});
