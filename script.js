const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector("#themeToggle");
const languageToggle = document.querySelector("#languageToggle");
const year = document.querySelector("#year");

const spanish = {
  navAbout: "Perfil", navImpact: "Impacto", navExperience: "Experiencia", navSkills: "Habilidades", navEducation: "Educación",
  heroEyebrow: "OPERACIONES • TRANSFORMACIÓN • AUTOMATIZACIÓN",
  heroTitle: "Gerente de Operaciones, Consultor Estratégico, Gerente de Proyectos",
  heroLead: "Mejora de Procesos • Transformación Digital • Automatización • Liderazgo de Proyectos y Producto",
  viewExperience: "Ver experiencia", contactJorge: "Contactar a Jorge",
  profileLabel: "01 / PERFIL", profileTitle: "Resumen profesional",
  profileP1: "Líder de Transformación de Negocios y Estrategia Operativa con más de 13 años de experiencia liderando transformación empresarial, estrategia operativa e iniciativas multidisciplinarias en los sectores de retail, logística, servicios financieros y alimentos y bebidas. Entregó exitosamente más de 50 proyectos estratégicos, generando más de USD 50M en impacto financiero medible a través del diseño de procesos, excelencia operativa e implementación de tecnología. Con experiencia en la construcción de modelos operativos escalables, liderazgo de equipos multidisciplinarios, resolución de desafíos empresariales complejos y ejecución de principio a fin en entornos dinámicos con altos niveles de ambigüedad.",
  profileP2: "",
  impactLabel: "03 / IMPACTO DE NEGOCIO", impactTitle: "Resultados destacados",
  metric1: "Proyectos de transformación empresarial", metric2: "Impacto de valor de negocio", metric3: "Usuarios finales impactados",
  metric4: "Procesos y sistemas de gestión estandarizados", metric5: "Soluciones de software empresarial desde cero", metric6: "Soluciones RPA implementadas",
  experienceLabel: "04 / EXPERIENCIA", experienceTitle: "Experiencia profesional",
  maxpotRole: "Director de Operaciones, Cofundador.", maxpotRemote: "60% Trabajo remoto",
  maxpotP1: "Lideró iniciativas de transformación digital y operaciones en organizaciones de retail, logística, servicios financieros, alimentos y bebidas en áreas como centros de distribución, administración de inventarios, compras, ventas, planeación, producción, recursos humanos y contabilidad.",
  maxpotP2: "Dirigió proyectos multidisciplinarios de principio a fin en entornos ágiles, transformando desafíos empresariales complejos en planes de ejecución accionables, coordinando equipos multidisciplinarios, mitigando riesgos operativos y asegurando una entrega exitosa con impacto financiero medible.",
  highlights: "Logros Destacados", h1: "Entregó 50+ proyectos de transformación empresarial (duración promedio: 6.5 meses)", h2: "Generó un impacto de valor de negocio de USD 50M+", h3: "Optimizó operaciones para más de 2,500 usuarios finales", h4: "Estandarizó 150+ procesos de negocio y sistemas de gestión", h5: "Entregó 3 soluciones de software empresarial desde cero", h6: "Diseñó 40+ módulos funcionales y 350+ flujos de trabajo de negocio", h7: "Desarrolló 7 tableros ejecutivos", h8: "Implementó 6 soluciones de Automatización Robótica de Procesos (RPA)", h9: "Lideró a 2 Gerentes y 7 Consultores",
  selectedImpact: "Proyectos e Impacto de Negocio", purchasingTitle: "Optimización de Compras e Inventarios", p1: "Generó un impacto en Utilidad Bruta de USD 3M", p2: "Incrementó la productividad en un 30%", p3: "Redujo los tiempos de ciclo operativo en un 30–98%", p4: "Diseñó KPIs, reglas de negocio y una plataforma de visibilidad de inventario para respaldar decisiones de reabastecimiento",
  distributionTitle: "Transformación del Centro de Distribución", d1: "25M USD en oportunidad de ingresos anuales", d2: "Incrementó la productividad en un 39-66%", d3: "Mejoró la tasa de reabastecimiento diario del 74% al 85%.", d4: "Eliminó restricciones de espacio en almacén mediante el rediseño de procesos",
  posTitle: "Plataforma de Punto de Venta (POS) Empresarial", pos1: "Despliegue en 250 tiendas", pos2: "200+ Requerimientos atendidos, 4 módulos, 25 submódulos e integraciones.", pos3: "Se desempeñó como Analista de Negocios, Product Owner y Líder de Pruebas de Aceptación de Usuario (UAT).",
  royalRole: "CEO, Fundador.", royalP: "Fundó y operó una empresa de diseño gráfico y producción de material publicitario. Responsable de ventas, operaciones, gestión financiera y liderazgo de equipos.", r1: "Entregó 900+ proyectos comerciales (duración promedio por proyecto: 10 días)", r2: "Gestionó un equipo de 7 empleados y contratistas", r3: "Atendió a clientes corporativos y pequeñas empresas en múltiples industrias",
  snugRole: "Operador General de Producción", technicianRole: "Técnico de Sistemas", freelance: "Independiente / Freelance", technicianP: "Mantenimiento de Hardware: Realizó pruebas diagnósticas, reparaciones y actualizaciones de componentes (RAM, SSD, fuentes de alimentación) para computadoras de escritorio y portátiles. Configuración de Software: Instaló y optimizó sistemas operativos, controladores y suites de software empresarial..", axtelRole: "Asesor Telefónico SAT", axtelP: "Atendió llamadas entrantes, realizó encuestas, brindó asistencia a contribuyentes e identificó necesidades para canalizar a cada persona al departamento correspondiente.",
  skillsLabel: "05 / HABILIDADES", skillsTitle: "Especialización y tecnología", skill1title: "Liderazgo y operaciones", skill2title: "Metodologías", skill3title: "Automatización, IA, analítica y datos", skill4title: "Sistemas empresariales", skill5title: "Proyectos y colaboración", skill6title: "Diseño de procesos y UX",
  s1: "Gestión de operaciones", s2: "Liderazgo interfuncional", s3: "Gestión de proyectos", s4: "Coordinación de equipos", s5: "Optimización de procesos", s6: "Excelencia operativa", s7: "Seguimiento de KPIs", s8: "Gestión de interesados", s9: "Transformación de negocios", s10: "Toma de decisiones basada en datos", s11: "Comunicación ejecutiva", s12: "Gestión de riesgos", s13: "Presupuestos", m1: "Reingeniería de procesos de negocio", m2: "Gestión del cambio", m3: "Planeación estratégica", a1: "Excel avanzado", e1: "Aplicaciones personalizadas",
  educationLabel: "06 / EDUCACIÓN", educationTitle: "Educación y certificaciones", education: "Educación", degree1: "Licenciatura en Economía", degree1detail: "2010–2017 · Universidad Autónoma de Sinaloa", degree2: "Técnico en Sistemas", degree2detail: "2005–2008 · Centro de Bachillerato Tecnológico Industrial y de Servicios No. 224", degree3: "Inglés B2 Intermedio Alto", certifications: "Certificaciones y programas",
  c1: "EC0249 Consultor Certificado en Servicios de Consultoría General — CONOCER", c2: "Negociación Efectiva — Programa Karrass", c3: "n8n + MCP: Automatización y Agentes Inteligentes de IA", c4: "IA para Todos", c5: "Estimación de Proyectos de Software", c6: "Scrum Práctico en Proyectos de Software", c7: "Microsoft Power BI escritorio", c8: "Gestión de Proyectos PMI", c9: "Contabilidad Financiera",
  footerRole: "Gerente de Operaciones y Líder de Transformación de Negocios", footerContact: "Contactar a Jorge en LinkedIn"
};

const englishContent = Object.fromEntries([...document.querySelectorAll("[data-i18n]")].map((item) => [item.dataset.i18n, item.textContent]));
const languageMeta = {
  en: { title: "Jorge Pardo | Operations Manager & Business Transformation Leader", description: "Jorge Pardo — Operations Manager & Business Transformation Leader", button: "ES", label: "Switch to Spanish" },
  es: { title: "Jorge Pardo | Gerente de Operaciones y Líder de Transformación de Negocios", description: "Jorge Pardo — Gerente de Operaciones y Líder de Transformación de Negocios", button: "EN", label: "Cambiar a inglés" }
};
const timelineItems = [...document.querySelectorAll("#experience .timeline-item")];
const jobMeta = {
  en: [
    { company: "MAXPOT SA de CV", date: "10/2019 – 04/2026", remote: "60% Remote work" },
    { company: "Royal Print", date: "10/2012 – 01/2020" },
    { company: "Snug Harbor Seafoods | Kenai, AK, USA", date: "06/2011 – 08/2011" },
    { company: "Freelancer", date: "08/2008 – 09/2010" }
  ],
  es: [
    { company: "MAXPOT SA de CV | 10/2019 - 04/2026 | 60% Trabajo remoto" },
    { company: "Royal Print | 10/2012 - 01/2020" },
    { company: "Snug Harbor Seafoods | 06/2011 - 08/2011 | Kenai, AK, EE. UU." },
    { company: "Independiente / Freelance | 08/2008 - 09/2010" }
  ]
};
const snugDescription = document.createElement("p");
snugDescription.textContent = "Operó como parte de un equipo de producción de alto volumen en Snug Harbour Seafoods. Responsable de diversas tareas manuales, incluyendo el lavado, el corte y el empaque preciso de productos de salmón.";
snugDescription.hidden = true;
timelineItems[2].querySelector(".timeline-content").append(snugDescription);

function setLanguage(language) {
  const content = language === "es" ? spanish : englishContent;
  document.querySelectorAll("[data-i18n]").forEach((item) => { item.textContent = content[item.dataset.i18n] || item.textContent; });
  document.documentElement.lang = language;
  document.title = languageMeta[language].title;
  document.querySelector('meta[name="description"]').setAttribute("content", languageMeta[language].description);
  languageToggle.textContent = languageMeta[language].button;
  languageToggle.setAttribute("aria-label", languageMeta[language].label);
  document.querySelector("#heroEyebrow").hidden = language === "es";
  document.querySelector("#profileP2").hidden = language === "es";
  document.querySelector("#competencies").hidden = language !== "es";
  document.querySelector("#businessValueMetric").textContent = language === "es" ? "USD 50M+" : "$50M+";
  jobMeta[language].forEach((job, index) => {
    const item = timelineItems[index];
    item.querySelector(".company").textContent = job.company;
    const date = item.querySelector(".date");
    date.hidden = language === "es";
    if (job.date) date.textContent = job.date;
    if (job.remote) item.querySelector(".muted").textContent = job.remote;
  });
  timelineItems[0].querySelector(".muted").hidden = language === "es";
  snugDescription.hidden = language !== "es";
  localStorage.setItem("cv-language", language);
}

year.textContent = new Date().getFullYear();
menuToggle.addEventListener("click", () => { const isOpen = navLinks.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(isOpen)); });
document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => { navLinks.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }));
themeToggle.addEventListener("click", () => { document.body.classList.toggle("dark"); localStorage.setItem("cv-theme", document.body.classList.contains("dark") ? "dark" : "light"); });
languageToggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "es" ? "en" : "es"));
if (localStorage.getItem("cv-theme") === "dark") document.body.classList.add("dark");
setLanguage(localStorage.getItem("cv-language") === "es" ? "es" : "en");
