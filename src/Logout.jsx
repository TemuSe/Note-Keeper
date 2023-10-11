import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <button className='logout' onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
