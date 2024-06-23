import React from 'react'
import styles  from './NavLink.module.css'

const NavLink = ({ context }) => {
  return (
    <a className={styles['nav-item-link']} href={`/${context}`}>
      {context}
    </a>
  );
};


export default NavLink;
