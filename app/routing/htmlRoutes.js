app.get("/", function(req, res) {
    res.json(path.join(__dirname, "public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.json(path.join(__dirname, "public/survey.html"));
  });