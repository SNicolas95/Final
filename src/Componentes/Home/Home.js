import React from "react";
import Imagen from "../Imagenes/rick-morty.png"
import { useState } from 'react';
import Characters from '../Character/Characters';

function Home() {
    const [characters,setCharacters] = useState(null);

    const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const charactersApi = await api.json()
    setCharacters(charactersApi.results)
  }


return (
    <div className="App">
    <header className="App-header"> 
        <h1 className="title"> Rick & Morty</h1>
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters} />)
         : (
         <>
         
        <img src={Imagen} className="img-home" alt="Rick & morty"/>
        <button onClick={reqApi} className="btn-search">Buscar personajes </button>
        </>
        )}
      </header>
    </div>
    );
}

export default Home
