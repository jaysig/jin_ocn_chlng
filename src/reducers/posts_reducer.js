import { ADD_POST, FETCH_POST } from '../actions/index';

// const INITIAL_STATE = { all: [], post: null, };

const posts = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          value: action.stored_value,
          selected: action.stored_selection,
        }
      ]
    default:
      return state
  }
}
 
export default posts
