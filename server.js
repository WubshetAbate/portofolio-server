const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api/projects", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Netflix Clone",
      desc: "A modern, responsive netflix website built with React by integrating the Netflix API",
      tech: ["React", "API", "Node"],
      link: "https://github.com/WubshetAbate/Netflix-Clone-2025.git",
      demo: "https://netflix-clone-2025-mugs.vercel.app/",
    },
    {
      id: 2,
      title: "Amazon Clone",
      desc: "Full-stack e-commerce application with payment integration",
      tech: ["React", "Stripe", "Node", "MySQL DB, Firebase"],
      link: "https://github.com/WubshetAbate/Amazon-frontend.git",
      demo: "https://netflix-clone-2025-web8.vercel.app/",
    },
    {
      id: 3,
      title: "Question and Answer App",
      desc: "A Collaborative task to built an app that signup, login, post & get question with answers",
      tech: ["React", "Node", "Express", "MySQL"],
      link: "https://github.com/WubshetAbate/evangadiForum-backend.git",
      demo: "https://evangadi-forum-frontend-omega.vercel.app/",
    },
    {
      id: 4,
      title: "Weather App",
      desc: "A Weather App that shows the weather of any city in the world",
      tech: ["HTML", "modular CSS", "JS", "API Integration"],
      link: "https://github.com/WubshetAbate/weather-app.git",
      demo: "https://evangadi-forum-frontend-6cwe.vercel.app/",
    },
    {
      id: 5,
      title: "Local Calculator",
      desc: "A Local Calculator that performs every maths calculation",
      tech: ["HTML", "CSS", "Javascript"],
      link: "https://github.com/WubshetAbate/Calculator-project.git",
      demo: "https://calculator-project-g1yg.vercel.app/",
    },
  ]);
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing fields" });

  res.json({ ok: true });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log("Server listening on", PORT));
