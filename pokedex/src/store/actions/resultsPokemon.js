import axios from "axios";


export const receiveOnePokemon = data => {
    return {
      type: "RECEIVE_ONE_POKEMON",
      payload: data
    };
  };

export const receiveAllPokemons = data => {  
    
    return {
      type: "RECEIVE_ALL_POKEMON",
      payload: data
    };    
  };
  
  export const receiveError = error => {
    return {
      type: "RECEIVE_ERROR",
      payload: error
    };
  };

export const getResult = (results) =>{
  return function (dispatch){
    let search = [];
    results.map((item) => {   
        let url = item.url;
        axios({
          url: url,
          timeout: 100000
        }).then(function(response) {
          let urlImg = response.data.sprites.front_default;
                  let type = response.data.types[0].type.name;
                  let health = response.data.stats[5].base_stat;
                  let attack = response.data.stats[2].base_stat;
                  const {
                      name,
                      id
                  } = response.data;
                  let addPokemon = new Pokemon(id, name, health, type, attack, urlImg);
                  search.push(addPokemon);
              })
              .catch(function(response) {
               receiveError(response);
              }); 
    //console.log(item);
    //  fetchOnePokemon(item.url,true);
    })
   // console.log(search);
    dispatch(receiveAllPokemons(search));
}
}

export const fetchOnePokemon = (link,all) =>{
     let url = link;
     console.log(url);
     return function(dispatch){
      axios({
        url: url,
        timeout: 100000
      }).then(function(response) {
        let urlImg = response.data.sprites.front_default;
                let type = response.data.types[0].type.name;
                let health = response.data.stats[5].base_stat;
                let attack = response.data.stats[2].base_stat;
                const {
                    name,
                    id
                } = response.data;
                let addPokemon = new Pokemon(id, name, health, type, attack, urlImg);
                all !== true ? dispatch(receiveOnePokemon(addPokemon)): dispatch(receiveAllPokemons(addPokemon))
            })
            .catch(function(response) {
              dispatch(receiveError(response));
            }); 
/*
         fetch(url)
            .then(pokemon => pokemon.json())
            .then(pokemon => {
                let urlImg = pokemon.sprites.front_default;
                let type = pokemon.types[0].type.name;
                let health = pokemon.stats[5].base_stat;
                let attack = pokemon.stats[2].base_stat;
                const {
                    name,
                    id
                } = pokemon;
                let addPokemon = new Pokemon(id, name, health, type, attack, urlImg);
                all !== true ? dispatch(receiveOnePokemon(addPokemon)): dispatch(receiveAllPokemons(addPokemon))
            });  
*/            
     }                   
  }


class Pokemon {
  //Constructor to be called upon instantiating a new object
  constructor(id, name, health, type, attack, urlImg, defense) {
      this.id = id;
      this.name = name;
      this.health = health;
      this.type = type;
      this.attack = attack;
      this.urlImg = urlImg;
      this.defense = defense;
  }

}