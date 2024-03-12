let team = [
  {
    name: "Victor",
    surname: "Milite",
    age: 27,
    city: "Madrid",
    hobby: "cooking",
    favoriteFood: "Hamburger",
    favoriteVideoGame: "League of Legends",
    favoriteFilm: "I am Legend",
    favoriteBook: "The Analyst - John Katzenbach",
    petName: "Garu",
  },
];

function printPetName(team) {
  for (let index = 0; index < team.length; index++) {
    if (team[index].petName.length > 1) {
      console.log(
        `${team[index].name} has a pet named: ${team[index].petName}`
      );
    }
  }
}

printPetName(team);