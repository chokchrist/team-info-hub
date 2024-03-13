let team = [
  {
    name: "Cinthya",
    surname: "Redondo Soto",
    age: 28,
    city: "Málaga",
    hobby: "Watching TV series",
    favoriteFood: "Paella",
    favoriteVideoGame: "The Sims",
    favoriteFilm: "Harry Potter and the globet of fire",
    favoriteBook: "Mistborn Series",
    petName: "Asta",
  },
];

function cicloBubbleSort(words) {
  let change = false;

  for (let i = 0; i < words.length - 1; i++) {
    let comparison = words[i].surname.localeCompare(
      words[i + 1].surname,
      "es",
      {
        sensitivity: "base",
      }
    );
    if (comparison > 0) {
      let aux = words[i].surname;
      words[i].surname = words[i + 1].surname;
      words[i + 1].surname = aux;

      change = true;
    }
  }
  return change;
}

function orderArray(disorderArray) {
  let result = cicloBubbleSort(disorderArray);

  while (result == true) {
    result = cicloBubbleSort(disorderArray);
  }

  for (let i = 0; i < disorderArray.length; i++) {
    console.log(`${disorderArray[i].surname}, ${disorderArray[i].name}`);
  }
}

orderArray(team);
