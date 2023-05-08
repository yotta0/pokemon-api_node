const axios = require('axios');

const baseURL = 'https://pokeapi.co/api/v2'

const listPokemons = async () => {
    const response = await axios.get(`${baseURL}/pokemon?limit=151`);
    return response.data.results;
}

const getPokemon = async (id) => {
    const response = await axios.get(`${baseURL}/pokemon/${id}`);
    return response.data;
}


module.exports = {
    listPokemons,
    getPokemon
}