const express = require('express');
const router = express.Router();

const pokemonController = require('../controllers/handlePokemons');

// Definindo rota para listar todos os pokemons
router.get('/', pokemonController.listPokemons);

// Definindo rota para listar um pokemon específico
router.get('/:id', pokemonController.getPokemon);

module.exports = router;