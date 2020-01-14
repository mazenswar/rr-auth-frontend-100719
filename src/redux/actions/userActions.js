const setUserAction = user => ({
  type: 'SET_USER',
  payload: user
});
const clearUserAction = () => ({
  type: 'CLEAR_USER'
});

const persistUserFromAPI = () => dispatch => {
  fetch('http://localhost:3000/persist', {
    headers: {
      'content-type': 'application/json',
      Authorization: 'bearer ' + localStorage.token
    }
  })
    .then(r => r.json())
    .then(user => {
      dispatch(setUserAction(user));
    });
};

export default {
  persistUserFromAPI
};
