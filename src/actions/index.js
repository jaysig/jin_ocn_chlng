// export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const FETCH_POST = 'FETCH_POST';

// export function fetchPosts() {
//   const request = '';
//
//   return {
//     type: FETCH_POSTS,
//     payload: request,
//   };
// }

export const addPost = text => {
  console.log(text,'text');
  return {
    type: ADD_POST,
    text
  }
}
