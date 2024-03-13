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
favGame()