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
  {
    name: "Cinthya",
    surname: "álamo Soto",
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

function cicleBubbleSort(words) {
  let change = false;

  for (let i = 0; i < words.length - 1; i++) {
    let comparison = words[i].localeCompare(words[i + 1], "es", {
      sensitivity: "base",
    });
    if (comparison > 0) {
      let aux = words[i];
      words[i] = words[i + 1];
      words[i + 1] = aux;

      change = true;
    }
  }
  return change;
}

function alphabeticalOrder(disorderArray) {
  let result = cicleBubbleSort(disorderArray);

  while (result == true) {
    result = cicleBubbleSort(disorderArray);
  }
  console.log(disorderArray);
}

alphabeticalOrder(team)