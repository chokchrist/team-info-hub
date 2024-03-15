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
  {name: "Cinthya",
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
    name: "María",
    surname: "Bona",
    age: 29,
    city: "Zaragoza",
    hobby: "reading",
    favoriteFood: "ramen",
    favoriteVideoGame: "Persona 5 Royal",
    favoriteFilm: "La novia",
    favoriteBook: "El archivo de las tormentas - Brandon Sanderson",
    petName: "Zoro",
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
        } 
    }
}



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


    
function calcularMedia(array) {
  let sumatoria = 0;
  for (let i = 0; i < array.length; i++) {
      sumatoria += array[i].age;
  }
  let media = sumatoria / array.length;
  return console.log("La edad media es: " + media);
}

alphabeticalOrder(team);
favGame(team);
printPetName(team);
nombresDuplicados(team);
calcularMedia(team);
