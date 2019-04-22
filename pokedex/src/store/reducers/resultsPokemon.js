const initialState = {
    resultsPokemon:[],
    error: false
};

const resultsPokemon = (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_ONE_POKEMON':
            return { ...state, resultsPokemon: [action.payload] }
        case 'RECEIVE_ALL_POKEMON':
            console.log(action.payload);            
            return { ...state, resultsPokemon: action.payload }
        case 'RECEIVE_ERROR':
            return { ...state, resultsPokemon: action.error }
        default:
            return state;
    }
}

export default resultsPokemon;