app.get("/", function(req, res) {
    res.json(path.join(__dirname, "home.html"));
  });

  app.get("/survey", function(req, res) {
    res.json(path.join(__dirname, "survey.html"));
  });

  // tried "public/home.html", "/public/home.html", "home.html", "/home.html"