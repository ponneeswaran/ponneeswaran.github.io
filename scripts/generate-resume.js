/**
 * Regenerates public/resume.pdf from the structured data below.
 * Run with: node scripts/generate-resume.js
 */
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const OUTPUT_PATH = path.join(__dirname, "..", "public", "resume.pdf");

const ACCENT = "#1f7a5c";
const TEXT = "#1a1a1a";
const MUTED = "#555555";

const CONTACT = {
  address: "36 F, Panchayat Office Road, Podanur, Coimbatore - 641023",
  phone: "+91-9003977744",
  email: "Ponneeswaran.Natarajan@asu.edu",
  github: "https://github.com/ponneeswaran",
};

const OBJECTIVE =
  "Experienced Full-stack Java Developer with approximately 11 years of expertise in " +
  "designing, developing, and managing complex web applications. Seeking a leadership " +
  "role as a Manager, where I can leverage my technical acumen and project management " +
  "skills to drive team success and deliver high-quality software solutions.";

const EXPERIENCE = [
  {
    period: "FEB 2011 - JUNE 2014",
    title: "Sr. Systems Engineer | Infosys Technologies Ltd. | Chennai, TN",
  },
  {
    period: "OCT 2016 - DEC 2016",
    title: "Mobile App Support & Ops Intern | Axway | Phoenix, AZ",
  },
  {
    period: "MAY 2017 - SEP 2018",
    title: "Software Dev Eng in Test | Move Inc. | Santa Clara, CA",
  },
  {
    period: "OCT 2018 - AUG 2020",
    title: "Lead Engineer | Brillio | Bengaluru, KA",
  },
  {
    period: "JUL 2022 - PRESENT",
    title: "Sr Lead Engineer | Simplain Softwares Solutions | Coimbatore, TN",
    detail:
      "Key responsibilities: Client and business interactions. Managing a small team of 3 " +
      "members, overseeing the development and delivery of bug-free enhancements. Managed " +
      "DevOps processes and handled server-related support tasks, ensuring smooth " +
      "operations and deployments.",
  },
];

const EDUCATION = [
  "Master of Computer Science | Arizona State University | Tempe, AZ",
  "B-Tech CSE | Amrita School of Engineering | Coimbatore, TN",
];

const SKILLS = [
  ["Programming Languages", "Java (Core), Android, C, C++, Python, Unix Shell Script"],
  ["Frameworks and Libraries", "Spring MVC, Spring Boot, Bootstrap, Liferay, ReactJS, NodeJS"],
  ["Web Technologies", "HTML, JavaScript (ES6), JSP, CSS, JSON, jQuery"],
  ["Development and Build Tools", "SVN, Jenkins, NetBeans, Eclipse, Maven, Git, Visual Studio, Unity3D"],
  ["Databases", "Oracle, DB2, MySQL, AWS DynamoDB, PostgreSQL"],
  ["Other Tools and Technologies", "Wolfram Mathematica, Titanium+, Jira, Tomee"],
];

const doc = new PDFDocument({ size: "A4", margins: { top: 50, bottom: 50, left: 50, right: 50 } });
doc.pipe(fs.createWriteStream(OUTPUT_PATH));

doc
  .fillColor(ACCENT)
  .font("Helvetica-Bold")
  .fontSize(28)
  .text("Ponneeswaran Natarajan");

doc.moveDown(0.6);

doc
  .fillColor(TEXT)
  .font("Helvetica-Bold")
  .fontSize(11)
  .text("OBJECTIVE", { underline: false });
doc.fillColor(MUTED).font("Helvetica").fontSize(10).text(OBJECTIVE);
doc.moveDown(1);

doc.fillColor(TEXT).font("Helvetica-Bold").fontSize(11).text("CONTACT");
doc
  .fillColor(MUTED)
  .font("Helvetica")
  .fontSize(10)
  .text(`Address: ${CONTACT.address}`)
  .text(`Phone: ${CONTACT.phone}`)
  .text(`Email: ${CONTACT.email}`)
  .text(`GitHub: ${CONTACT.github}`);
doc.moveDown(1);

doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(11).text("EXPERIENCE");
doc.moveDown(0.3);
EXPERIENCE.forEach((job) => {
  doc.fillColor(MUTED).font("Helvetica-Bold").fontSize(9.5).text(job.period);
  doc.fillColor(TEXT).font("Helvetica-Bold").fontSize(10).text(job.title);
  if (job.detail) {
    doc.fillColor(MUTED).font("Helvetica").fontSize(9.5).text(job.detail);
  }
  doc.moveDown(0.6);
});

doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(11).text("EDUCATION");
doc.moveDown(0.3);
EDUCATION.forEach((line) => {
  doc.fillColor(TEXT).font("Helvetica").fontSize(10).text(line);
});
doc.moveDown(1);

doc.fillColor(ACCENT).font("Helvetica-Bold").fontSize(11).text("SKILLS");
doc.moveDown(0.3);
SKILLS.forEach(([category, items]) => {
  doc
    .fillColor(TEXT)
    .font("Helvetica-Bold")
    .fontSize(9.5)
    .text(`${category}: `, { continued: true })
    .font("Helvetica")
    .fillColor(MUTED)
    .text(items);
});

doc.moveDown(1);
doc.fillColor(TEXT).font("Helvetica-Bold").fontSize(11).text("REFERENCES");
doc.fillColor(MUTED).font("Helvetica").fontSize(10).text("Available upon request.");

doc.end();

doc.on("end", () => {
  console.log(`Resume generated at ${OUTPUT_PATH}`);
});
