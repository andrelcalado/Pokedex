import { Pokemons } from './models/pokemons';
import { Pokemon } from './models/pokemons';
import { AddressInfo } from "net";
import express from 'express';
import { style } from './html/style';

export const listarPokemons = () => {
    const app = express();
    const listaDePokemons: Pokemon[] = [];
    let pokemonsFront = '';

    for(let pokemon of Pokemons) {
        listaDePokemons.push(new Pokemon(
            pokemon.id, pokemon.name, pokemon.stats[0].base_stat, pokemon.stats[1].base_stat,
            pokemon.stats[2].base_stat, pokemon.stats[3].base_stat, pokemon.stats[4].base_stat,
            pokemon.stats[5].base_stat
        ))

        pokemonsFront += `
        <div class="pokemonCard">
            <div class="cardHeader">
                <div class="pokemonTitleContainer">
                    <h2 class="pokemonName">${pokemon.name}</h2>
                    <p class="pokedexId">#${pokemon.id}</p>
                </div>
                
                <div class="pokemonImg">
                    <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name} img">
                </div>
            </div>
            <div class="pokemonDesc">
                <div class="descLabels pokemonHP">
                    <p class="attribute">HP</p>
                    <p>${pokemon.stats[0].base_stat}</p>
                </div>

                <div class="descLabels pokemonAtk">
                    <p class="attribute">Ataque</p>
                    <p>${pokemon.stats[1].base_stat}</p>
                </div>

                <div class="descLabels pokemonDef">
                    <p class="attribute">Defesa</p>
                    <p>${pokemon.stats[2].base_stat}</p>
                </div>

                <div class="descLabels pokemonEspAtk">
                    <p class="attribute">Ataque Especial</p>
                    <p>${pokemon.stats[3].base_stat}</p>
                </div>

                <div class="descLabels pokemonEspDef">
                    <p class="attribute">Defesa Especial</p>
                    <p>${pokemon.stats[4].base_stat}</p>
                </div>

                <div class="descLabels pokemonSpeed">
                    <p class="attribute">Velocidade</p>
                    <p>${pokemon.stats[5].base_stat}</p>
                </div>
            </div>
        </div>`;
    }

    console.table(listaDePokemons);

    app.get('/', (req, res)=> {
        res.statusCode = 200;
            res.end(`
            <!DOCTYPE html>
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="Content-Type" content="text/html">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Pokedex</title>
                </head>

                ${style}
    
                <body>
                    ${pokemonsFront}
                </body>
    
            </html>
            
            `); 
    });

    app.listen(8080, "localhost", () => {
        console.log(`Front listening on http://localhost:8080/`);
    })
    return listaDePokemons;
}