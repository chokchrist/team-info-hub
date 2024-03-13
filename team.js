let team = [
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

function favGame (){
    if(team.favoriteVideoGame == "LOL"){
        console.log(team.name);
    } else if(team.favoriteVideoGame == "League of Legends"){
        console.log(team.name);
    }
}
favGame()