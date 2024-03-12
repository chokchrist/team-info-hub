let team = [
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
function calcularMedia(array) {
  let sumatoria = 0;
  for (let i = 0; i < array.length; i++) {
      sumatoria += array[i].age;
  }
  let media = sumatoria / array.length;
  return media;
}
