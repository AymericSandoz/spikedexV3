const listePoke = document.querySelector(".liste-poke");

//////////Get your own cards
const fetchOwnerCardList = () => {
  fetch("/api/card/ownerCards", {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((reponse) => reponse.json())
    .then((allSpikemmon) => {
      console.log(allSpikemmon);
    })
    .catch((error) => {
      console.log(error);
    });
};
