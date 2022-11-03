const Card = require("../models/card");
const mongoose = require("mongoose");
//créer un post

//Récupérer les cards
exports.getAllCards = (req, res, next) => {
  Card.find((err, docs) => {
    if (!err) res.send(docs);
    else res.send("Erreur :" + err);
  }).sort({ createdAt: -1 });
};
