const listePoke = document.querySelector(".liste-poke");

//////////Get your own cards
console.log("banane");
const fetchOwnerCardList = () => {
  fetch("api/card/", {
    method: "GET",
  })
    .then((reponse) => reponse.json())
    .then((allSpikemmon) => {
      console.log("couscous");
      console.log(allSpikemmon);
      listePoke.innerHTML = allSpikemmon;
    })
    .catch((error) => {
      console.log("poule");
      console.log(error);
    });
};

console.log("banane");
fetchOwnerCardList();
