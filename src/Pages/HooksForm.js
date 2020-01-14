import React from 'react';

const HooksForm = () => {
  const [login, setLogin] = React.useState(true);
  const [userData, setUserData] = React.useState({
    username: '',
    password: ''
  });

  console.log(login);
  console.log(userData);

  const handleChange = e => {
    console.log(userData);
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const { username, password } = userData;
  return (
    <div className="auth-page">
      <h1>Class Component</h1>
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

export default HooksForm;
