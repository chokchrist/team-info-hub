let team = [
  {
    name: "Ruben",
    surname: "Lucena",
    age: 20,
    city: "Granollers",
    hobby: "Calistenia",
    favoriteFood: "Sushi",
    favoriteVideoGame: "Rainbow Six Siege",
    favoriteFilm: "Paul",
    favoriteBook: "Harry Potter",
    petName: "Darko",
  },
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
  {name: "ona",
  surname: "Benedi",
  age: 23,
  city: "Sant Esteve d'en Bas",
  hooby: "reading",
  favoriteFood: "pancakes",
  favoriteVideoGame: "Harvest Moon",
  favoriteFilm: "Shrek 2",
  favoriteBook: "Looking for Alaska",
  petName: "Lluna"
  },
];

let nombresRepetidos = false;

function nombresDuplicados(team) {
  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      if (team[i].name === team[j].name && i !== j) {
        console.log("El nombre " + team[i].name + " está repetido.");
        nombresRepetidos = true;
      }
    }
  }

  if (!nombresRepetidos) {
    console.log("No hay nombres repetidos.");
  }
}

function printPetName(team) {
  for (let index = 0; index < team.length; index++) {
    if (team[index].petName.length > 1) {
      console.log(
        `${team[index].name} has a pet named: ${team[index].petName}`
      );
    }
  }
}



function favGame (team){
    for(let i = 0; i < team.length; i++){
        let teamMember = team[i].name
        let teamFavGame = team[i].favoriteVideoGame

        if(teamFavGame == "LOL"){
            console.log(`${teamMember} chose League of Legends as their favorite game.`);
        } else if(teamFavGame == "League of Legends"){
            console.log(`${teamMember} chose League of Legends as their favorite game.`);
        } else {
            console.log("No one chose League of Legends as their favorite game.");
        }
    }
}
favGame(team);
printPetName(team);
nombresDuplicados(team);
