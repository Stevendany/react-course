import axios from "axios";

export const receiveResultsPokemons = data => {
  return {
    type: "RECEIVE_RESULTS_POKEMONS",
    payload: data
  };
};

export const receiveError = error => {
  return {
    type: "RECEIVE_ERROR",
    payload: error
  };
};

export const fetchPokemons = filter => {
  return function(dispatch) {    
    let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50";
    axios({
      url: url,
      timeout: 100000
    })
    .then(function(response) {
      dispatch(receiveResultsPokemons(response.data.results));
    })
      .catch(function(response) {
        dispatch(receiveError(response));
      });
  };
};









export const BACKfetchPokemons = filter => {
  return function(dispatch) {
    let url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50";
    return axios({
      url: url,
      timeout: 100000
    })
      .then(function(response) {
        dispatch(receiveResultsPokemons(response.data));
      })
      .catch(function(response) {
        dispatch(receiveError(response));
      });
  };
};




