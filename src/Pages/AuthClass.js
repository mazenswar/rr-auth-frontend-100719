import React, { Component } from 'react';

export default class AuthClass extends Component {
  state = {
    login: true,
    userData: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    console.log('handle Change ~~~> ', this.state);
    this.setState({
      userData: {
        ...this.state.userData,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('form submitted : ', this.state.userData);
    this.setState({ userData: { username: '', password: '' } });
    // const { history } = this.props;
    // history.push('/');
  };

  render() {
    const { username, password } = this.state.userData;
    const { login } = this.state;
    return (
      <div className="auth-page">
        <h1>Class Component</h1>
        <h1>{login ? 'Log in' : 'Sign Up'}</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input type="submit" value={login ? 'Log in' : 'Sign Up'} />
        </form>
        <div className="form-switch-container">
          <button onClick={() => this.setState({ login: true })}>Login</button>
          <button onClick={() => this.setState({ login: false })}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
}
