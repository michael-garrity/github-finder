import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar' style={{ marginBottom: '15vh' }}>
      <h1
        style={{
          color: '#fff',
          fontSize: '2.5rem',
          fontWeight: '100'
        }}
      >
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>
        <li
          style={{
            fontSize: '1.2rem'
          }}
        >
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github-alt'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
