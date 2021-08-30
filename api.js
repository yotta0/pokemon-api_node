const request = require('request');
const http = require('http');

const host = 'http://pokeapi.co/api/v2'
const path = '/pokemon/1/'

request(`${host}${path}`),(err,res,body) =>
{
    console.log(body);
}