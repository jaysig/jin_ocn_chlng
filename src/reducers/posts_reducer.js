import { ADD_POST, FETCH_POST } from '../actions/index';

const posts = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          value: action.text.stored_value,
          selected: action.text.stored_selection,
        }
      ]
    default:
      return state
  }
}
 
export default posts
