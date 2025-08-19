const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Define the view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the resources directory
app.use(express.static(path.join(__dirname, "resources")));

// ===== ROUTES =====
// Main route for home page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Bienvenue chez Planetapax !",
  });
});

// Route for the manifesto page
app.get("/manifesto", (req, res) => {
  res.render("manifest", {
    title: "Notre Manifesto",
  });
});

// Route for the faq page
app.get("/faq", (req, res) => {
  res.render("faq", {
    title: "Foire Aux Questions",
  });
});

// Route for the legal mentions page
app.get("/mentions-legales", (req, res) => {
  res.render("legal", {
    title: "Nos Mentions Légales",
  });
});

// Route for the terms of use page
app.get("/cgu", (req, res) => {
  res.render("cgu", {
    title: "Nos Conditions générales d'utilisation",
  });
});

// Route for the privacy policy page
app.get("/politique-de-confidentialite", (req, res) => {
  res.render("privacy", {
    title: "Notre Politique de Confidentialité",
  });
});

// Launching app
app.listen(PORT, () => {
  console.log("Application Node.js en écoute sur le port " + PORT);
});

// Detecting errors
app.use((err, req, res, next) => {
  console.error("Catched error :", err.stack);
  res.status(500).send(`<pre>Server error:\n${err.stack}</pre>`);
});

module.exports = app;
