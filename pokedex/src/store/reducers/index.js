import { combineReducers } from 'redux';
import pokemons from './pokemons';
import resultsPokemon from './resultsPokemon';

const rootReducer = combineReducers({
    pokemons: pokemons,
    resultsPokemon: resultsPokemon
});

export default rootReducer;