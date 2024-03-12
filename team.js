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

function alphabeticalOrder(surnameName) {
  surnameName.sort(function (a, b) {
    return a.surname.localeCompare(b.surname);
  });

  surnameName.forEach(function (member) {
    console.log(`${member.surname}, ${member.name}`);
  });

}

alphabeticalOrder(team);
