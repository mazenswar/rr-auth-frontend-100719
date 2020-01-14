import React, { useState } from 'react';

const Auth = () => {
  // State
  const [login, setLogin] = useState(true);
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });

  // console.log(useState);
  // console.log(setLogin);
  // console.log(login);
  // ~~~~~~~~~~~~~  Without Hooks ~~~~~~~~~~~~~
  //   state = {
  //     login: true,
  //     userData: {
  //       username: '',
  //       password: ''
  //     }
  //   };

  // onChange
  const handleChange = e =>
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });

  // ~~~~~~~~~~~~~  Without Hooks ~~~~~~~~~~~~~

  //   const handleChange = e =>
  //     this.setState({
  //       ...this.state,
  //       userData: {
  //         ...this.state.userData,
  //         [e.target.name]: e.target.value
  //       }
  //     });

  // onSubmit

  const handleSubmit = e => {
    e.preventDefault();
    // const endpoint = login ? '/login' : '/users';
    console.log('submitted user data: ', userData);
    setUserData({
      username: '',
      password: ''
    });
  };
  // Destructuring Variables
  const { username, password } = userData;
  console.log(userData);

  return (
    <div className="auth-page">
      <h1>{login ? 'Log in' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input type="submit" value={login ? 'Log in' : 'Sign Up'} />
      </form>
      <div className="form-switch-container">
        <button onClick={() => setLogin(true)}>Login</button>
        <button onClick={() => setLogin(false)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Auth;
