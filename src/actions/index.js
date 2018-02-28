export const ADD_POST = 'ADD_POST';

export const addPost = text => {
  console.log(text,'text');
  return {
    type: ADD_POST,
    text
  }
}
