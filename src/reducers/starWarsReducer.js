import { FETCHING_CHARACTERS, CHARACTERS_FETCH_SUCCESS, CHARACTERS_FETCH_FAILURE } from "../actions";
export const initialState = {
  characters: {}, 
  isLoading: false, 
  error: null 
  // Array characters, Boolean isLoading, null error.
};
function reducer(state = initialState, action) {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be isLoading, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING_CHARACTERS:
      return {...state,
        isLoading: true}

    case CHARACTERS_FETCH_SUCCESS:
      return {
        ...state, 
        characters: action.payload, 
        isLoading: false
      }
      
    case CHARACTERS_FETCH_FAILURE:
        return {
          ...state, 
          isLoading: false, 
          error: 'Error isLoading characters'
        }

      
    default:
      return state;
  }
};

export default reducer;
