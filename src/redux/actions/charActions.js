const setCharsAction = chars => ({
  type: 'GET_CHARS',
  payload: chars
});

const getCharactersFromAPI = () => dispatch => {
  fetch('https://rickandmortyapi.com/api/character/')
    .then(r => r.json())
    .then(data => {
      dispatch(setCharsAction(data.results));
    });
};

export default {
  getCharactersFromAPI
};
