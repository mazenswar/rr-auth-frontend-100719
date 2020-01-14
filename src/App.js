import React, { useEffect } from 'react';
import Routes from './Routes';
import Components from './Components';
import { useSelector, useDispatch } from 'react-redux';
import userActions from './redux/actions/userActions';
import charActions from './redux/actions/charActions';

function App() {
  const state = useSelector(state => {
    return {
      user: state.currentUser,
      chars: state.characters
    };
  });
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch(charActions.getCharactersFromAPI());
    if (localStorage.token) {
      dispatch(userActions.persistUserFromAPI());
    }
  }, []);
  return (
    <>
      <Components.Nav />
      <Routes />
    </>
  );
}

export default App;
