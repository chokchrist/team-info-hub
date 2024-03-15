let team = [
    {name: "Ruben",
    surname: "Lucena",
    age: 20,
    city: "Granollers",
    hobby: "Calistenia",
    favoriteFood: "Sushi",
    favoriteVideoGame: "Rainbow Six Siege",
    favoriteFilm: "Paul",
    favoriteBook: "Harry Potter",
    petName: "Darko"},
    
]
  

  
  let nombresRepetidos = false;
  
  function nombresDuplicados(team) {for (let i = 0; i < team.length; i++) {
      for (let j = i + 1; j < team.length; j++) {
          if (team[i].name === team[j].name && i!==j) {
              console.log("El nombre " + team[i].name + " está repetido.");
              nombresRepetidos = true;
          }
      }
  }
  
  if (!nombresRepetidos) {
      console.log("No hay nombres repetidos.");
    }
}
nombresDuplicados(team)
