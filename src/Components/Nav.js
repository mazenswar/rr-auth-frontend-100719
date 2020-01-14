import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/auth">Login / Sign Up</Link>
      <Link to="/authclass">Auth Class</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/characters">Characters</Link>
    </nav>
  );
};

export default Nav;
