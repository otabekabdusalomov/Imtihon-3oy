


for (i = 0; i < pokemons.length; i++) {
    
  const currentPokemons = pokemons[i];

  const firstPokemon = document.querySelector(".pokemons");
  firstPokemon.className = "pokemons";
  const pokemonItem = document.createElement("li");
  pokemonItem.className = "pokemons__item";
  const pokemonTitle = document.createElement("h3");
  pokemonTitle.className = "pokemons__item-title";
  pokemonTitle.textContent = currentPokemons.name;
  const pokemonNumber = document.createElement("p");

  const pokemonImg = document.createElement("img");
  pokemonImg.src = currentPokemons.img;
  const pokemonType = document.createElement("p");
  pokemonType.textContent = currentPokemons.type;

  //APPEND
  pokemonItem.append(pokemonNumber);
  pokemonItem.append(pokemonTitle);
  pokemonItem.append(pokemonImg);
  pokemonItem.append(pokemonType);
  firstPokemon.append(pokemonItem);
  pokemonItem.append(currentPokemons);



   //CREATE ELEMENT
  //  const newLi = document.createElement("li");
  //  const newImg = document.createElement("img");
  //  const newDiv = document.createElement("div");
  //  const newTitle = document.createElement("h5");
  //  const newLanguage = document.createElement("p");
  //  const newYear = document.createElement("p");
  //  const newButton = document.createElement("a");
 
  //  //SET ATTTIBUTE
  //  newLi.setAttribute("class", "card mb-3");
  //  newLi.style.width = "18rem";
  //  newImg.classList.add("card-img-top");
  //  newImg.setAttribute("src", movie.poster);
  //  newDiv.classList.add("card-body");
  //  newTitle.classList.add("card-title");
  //  newLanguage.classList.add("card-text");
  //  newYear.classList.add("card-text");
  //  newButton.setAttribute("class", "btn btn-danger");
  //  newButton.setAttribute(
  //    "href",
  //    `https://www.youtube.com/watch?v=${movie.youtubeId}`
  //  );
 
  //  newTitle.textContent = movie.title;
  //  newLanguage.textContent = movie.overview;
  //  newYear.textContent = movie.year;
  //  newButton.textContent = "Watch Trailer";
 
  //  //APPEND
  //  elMovieList.appendChild(newLi);
  //  newLi.appendChild(newImg);
  //  newLi.appendChild(newDiv);
  //  newDiv.appendChild(newTitle);
  //  newDiv.appendChild(newLanguage);
  //  newDiv.appendChild(newYear);
  //  newDiv.appendChild(newButton);
}