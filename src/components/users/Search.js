import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <div style={searchStyle} className='searchBar'>
          <button type='submit' value='Search'>
            <i class='fas fa-search' style={searchIcon} />
          </button>
          <input
            type='text'
            name='text'
            placeholder='Search github users...'
            value={text}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Search'
          className='btn btn-block submit-btn'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

const searchStyle = {
  display: 'flex',
  alignItems: 'center'
};

const searchIcon = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default Search;
