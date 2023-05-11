const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/html"));
app.engine(
  "hbs",
  expressHandlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "layout",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/task1", require("./routes/task1Route.js"));
app.use("/task3", require("./routes/task3Route.js"));
app.use("/task4", require("./routes/task4Route.js"));
app.use("/task4-details", require("./routes/task4-detailsRoute.js"));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
