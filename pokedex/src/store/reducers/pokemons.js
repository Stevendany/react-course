const initialState = {
    pokemons:[],
    error: false
};

const allPokemons = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_RESULTS_POKEMONS':
            return { ...state, pokemons: action.payload}              
        case 'RECEIVE_ERROR':
            return { ...state, pokemons: action.error}         
        default:
            return state;
    }
}

export default allPokemons;