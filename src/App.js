import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";

const App = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=151/";

  const [pokemon, setPokemon] = useState({ name: "" });

  /*setPokemon({ res.data['results'] })*/
  useEffect(() => {
    async function getPokemon() {
      const res = await axios.get(url);
      const pokeName = res.data["results"].map((p) => p.name);
      setPokemon(pokeName);
    }
    getPokemon();
  }, []);

  const _renderObject = () => {
    return Object.keys(pokemon).map((obj, i) => {
      return (
        <Card
          alt={`${obj} image`}
          image={`https://pokeres.bastionbot.org/images/pokemon/${parseInt(
            i + 1
          )}.png`}
          name={pokemon[obj]}
          key={i}
        />
      );
    });
  };

  return <div className="App">{_renderObject()}</div>;
};

export default App;
