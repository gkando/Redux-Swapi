import axios from 'axios'
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


export const FETCHING_CHARACTERS = 'FETCHING_CHARACTERS';
export const CHARACTERS_FETCH_SUCCESS = 'CHARACTERS_FETCH_SUCCESS';
export const CHARACTERS_FETCH_FAILURE = 'CHARACTERS_FETCH_FAILURE';

export const fetchCharacters = () => dispatch => {
    dispatch({ type: FETCHING_CHARACTERS });
    
        axios
        .get(`https://swapi.co/api/people`)
        .then(response => {
          dispatch({ type: CHARACTERS_FETCH_SUCCESS, payload: response.data.results }); // 2nd state of success is dispatched IF the promise resolves
        })
        .catch(err => {
          dispatch({ type: CHARACTERS_FETCH_FAILURE }); // our other 2nd state of 'rejected' will be dispatched here.
        });
        
  };
