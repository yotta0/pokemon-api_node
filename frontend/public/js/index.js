function generatePokemonList(pokemonList) {
    const listElement = document.querySelector('#pokemon-list');
  
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
  
      const pokemonBox = document.createElement('li');
      pokemonBox.innerHTML = `
        <div class="pokemon-box">
          <h2>${pokemon.name}</h2>
          <img src="${pokemon.image}" alt="${pokemon.name}">
        </div>
      `;
  
      listElement.appendChild(pokemonBox);
    }
  }


fetch('/pokemons')
.then(response => response.json())
.then(pokemonList => generatePokemonList(pokemonList));