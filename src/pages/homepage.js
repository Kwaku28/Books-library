import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCog, FaMicrophone } from 'react-icons/fa';
import Displaybooks from '../components/displaybooks';

function Homepage() {
  return (
    <>
      <nav>
        <NavLink to="/">
          <FaHome style={{ color: '#000' }} />
        </NavLink>
        <h3>Books Library</h3>
        <div>
          <FaMicrophone style={{ cursor: 'pointer', color: '#000' }} />
          <FaCog style={{ cursor: 'pointer', color: '#000' }} />
        </div>
      </nav>
      <Displaybooks />
    </>
  );
}

export default Homepage;
