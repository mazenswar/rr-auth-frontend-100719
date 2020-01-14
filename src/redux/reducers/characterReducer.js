export default (state = [], { type, payload }) => {
  switch (type) {
    case 'GET_CHARS':
      return payload;
    default:
      return state;
  }
};
