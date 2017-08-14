import axios from 'axios';

const initialState = {};
const GET_PROJECTS = 'GET_PROJECTS';

export default function (state = initialState, action) {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects;
    default:
      return state;
  }
  return newState;
}
