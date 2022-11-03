import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";

const App = () => {
    
    let _renderObject = () => {
        return Object.keys(pokemon).map((obj, i) => {
            return ( <
                Card alt = { `${obj} image` }
                image = { `https://img.pokemondb.net/artwork/large/${pokemon[obj]}.jpg` }
                name = { pokemon[obj] }
                key = { i }
                pokeID = { i }
                />
            );
        });
    };
    
    const [pokemon, setPokemon] = useState({ name: "" });
    
    /*setPokemon({ res.data['results'] })*/
    useEffect(() => {
        let numberOfPokemon = 151
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}/`;
        async function getPokemon() {
            const res = await axios.get(url);
            const pokeName = res.data["results"].map((p) => p.name);
            console.log(pokeName)
            setPokemon(pokeName);
        }
        getPokemon();

        let countNumber = 0

        const onScroll = function () {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                if (!countNumber) {
                    numberOfPokemon += 20
                    countNumber = 1
                }
                else numberOfPokemon += 21
                url = `https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon}/`;
                getPokemon()
                console.log("Loading more Pokemon");
                }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll',onScroll);
    }, []);
    

    return <div className = "App" > { _renderObject() } </div>;
};

export default App;
