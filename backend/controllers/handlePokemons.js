const pokeAPI = require('../data/pokeAPI')

const listPokemons = async (req, res) => {
  const pokemons = await pokeAPI.listPokemons();
  res.json(pokemons);
}

const getPokemon = async (req, res) => {
  const { id } = req.params;
  const pokemon = await pokeAPI.getPokemon(id);
  res.json(pokemon);
}

module.exports = {
  listPokemons,
  getPokemon,
}