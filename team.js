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

function cicleBubbleSort(members) {
  let change = false;

  for (let i = 0; i < members.length - 1; i++) {
    let comparison = members[i].surname.localeCompare(
      members[i + 1].surname,
      "es",
      {
        sensitivity: "base",
      }
    );
    if (comparison > 0) {
      let aux = members[i].surname;
      members[i].surname = members[i + 1].surname;
      members[i + 1].surname = aux;

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

  for (let i = 0; i < disorderArray.length; i++) {
    console.log(`${disorderArray[i].surname}, ${disorderArray[i].name}`);
  }
}

alphabeticalOrder(team);
