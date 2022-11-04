// const express = require("express");
// const path = require("path");
// const PORT = process.env.PORT || 5000;

// express()
//   .use(express.static(path.join(__dirname, "public")))
//   .get("/", (req, res) => res.render("public/index"))
//   .listen(PORT, () => console.log(`Listening on ${PORT}`));

const express = require("express"); //framework qui permet de coder plus rapidement.
require("dotenv").config({ path: "./back/config/.env" });

const CardsRoutes = require("./back/routes/Card");
const path = require("path"); //accéder au path de notre serveur :

const app = express();
var bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.enable("view cache");
var cors = require("cors");
app.use(cors());

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "./public") });
});
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //accéder à notre API depuis n'importe quelle origine ( '*' )
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  ); //ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.)
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); //envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.
  next();
});

// console.log(path.join(path.join(__dirname, "images")));
app.use("/api/card", CardsRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
