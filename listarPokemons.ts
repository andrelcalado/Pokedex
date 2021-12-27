import { Pokemons } from './models/pokemons';
import { Pokemon } from './models/pokemons';
import { AddressInfo } from "net";
import express from 'express';
import { style } from './html/style';
import { stylePokemon } from './html/stylePokemon';

const typeColor = (type: any) => {
    if(type[0].type.name === "water") {
        return 'background-color: #84eaee;'
    } else if(type[0].type.name === "bug") {
        return 'background-color: #d7ee84;'
    } else if(type[0].type.name === "grass") {
        return 'background-color: #84eea7;'
    } else if(type[0].type.name === "fairy") {
        return 'background-color: #ff9fd9;'
    } else if(type[0].type.name === "ground") {
        return 'background-color: #DEAF83;'
    } else if(type[0].type.name === "electric") {
        return 'background-color: #FADD84;'
    } else if(type[0].type.name === "fire") {
        return 'background-color: #ff9090;'
    } else if(type[0].type.name === "poison") {
        return 'background-color: #BFA2FA;' 
    } else {
        return 'background-color: #bcccdb;'
    }
}

export const listarPokemons = () => {
    const app = express();
    const listaDePokemons: Pokemon[] = [];
    let pokemonsBody = '<body>';

    for(let pokemon of Pokemons) {
        let pokemonTypes = '';
        listaDePokemons.push(new Pokemon(
            pokemon.id, pokemon.name, pokemon.stats[0].base_stat, pokemon.stats[1].base_stat,
            pokemon.stats[2].base_stat, pokemon.stats[3].base_stat, pokemon.stats[4].base_stat,
            pokemon.stats[5].base_stat
        ));

        pokemon.types.map((type) => {
            pokemonTypes += `<div class="type"><p>${type.type.name}</p></div>`
        })

        pokemonsBody += `
        <div class="pokemonCard" onclick="window.location.href = window.location.origin + '/pokemons/${pokemon.id}'">
            <div style="${typeColor(pokemon.types)}}" class="cardHeader">
                <div class="pokemonTitleContainer">
                    <h2 class="pokemonName">${pokemon.name}</h2>
                    <p class="pokedexId">#${pokemon.id}</p>
                </div>

                <div class="pokemonTypesContainer">
                    ${pokemonTypes}
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
            <div class="saibaMaisContainer">
                <div class="saibaMaisButton">
                    <button>Saiba mais</button>
                </div>
            </div>
        </div>`;


    }

    pokemonsBody += '</body>';

    console.table(listaDePokemons);

    app.get('/pokemons', (req, res)=> {
        res.statusCode = 200;
            res.end(`
            <!DOCTYPE html>
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="Content-Type" content="text/html">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Pokedex</title>
                </head>

                ${style()}
                ${pokemonsBody}
    
            </html>
            
            `); 
    });

    



    app.get('/pokemons/:id', (req, res) => {
        let pokemonBody = '<body>';
        let pokemonTypes = '';
        

        for(let pokemon of Pokemons) {
            if(String(pokemon.id) === String(req.params.id)) {
                pokemon.types.map((type) => {
                    pokemonTypes += `<div class="type"><p>${type.type.name}</p></div>`
                });

                pokemonBody += `
                <div class="pokemonCard">
                    <div style="${typeColor(pokemon.types)}}" class="cardHeader">
                        <div class="pokemonTitleContainer">
                            <h2 class="pokemonName">${pokemon.name}</h2>
                            <p class="pokedexId">#${pokemon.id}</p>
                        </div>

                        <div class="pokemonTypesContainer">
                            ${pokemonTypes}
                        </div>
                        
                        <div class="pokemonImg">
                            <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
                        </div>
                    </div>
                    <div class="pokemonDesc">
                        <div class="descLabels pokemonPeso">
                            <p class="attribute">Peso</p>
                            <p>${pokemon.weight} lbs</p>
                        </div>

                        <div class="descLabels pokemonAltura">
                            <p class="attribute">Altura</p>
                            <p>${pokemon.height} "</p>
                        </div>

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

                        <div class="saibaMaisContainer">
                            <div class="saibaMaisButton">
                                <button onclick="window.location.href = './'" class="saibaMaisButton">Voltar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </body>
                `;
            }
        }
        res.statusCode = 200;
        res.end(`
        <!DOCTYPE html>
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="Content-Type" content="text/html">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Pokedex</title>
                </head>

                ${stylePokemon}
                ${pokemonBody}
    
            </html>
        `)
    })

    app.listen(8080, "localhost", () => {
        console.log(`Front listening on http://localhost:8080/`);
    })
    return listaDePokemons;
}