import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon
import styles  from './SearchBox.module.css';


export default function SearchBox() {
  return (
    <div className={styles['search-container']}>
        <FontAwesomeIcon className = {styles['search-icon']} icon={faSearch} />
        <input type="text" className={styles['search-input']} placeholder={"Search"}/> 
    </div>
  )
}
