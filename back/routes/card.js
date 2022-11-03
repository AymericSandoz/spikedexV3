const express = require("express");
const router = express.Router(); //création d'un routeur express dans lequel on va enregistrer nos routes

//Importation controllers
const stuffCtrl = require("../controllers/card");
//Routes

router.get("/", stuffCtrl.card);

module.exports = router; //exportations de notre routeur
