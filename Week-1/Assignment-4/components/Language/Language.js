import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'; 
import styles  from './Language.module.css';

export default function Language() {
  return (
    <div className={styles['language-container']}>
        <FontAwesomeIcon className = {styles['earth-icon']} icon={faEarthAmericas} />
        <div className = {styles['language-selected']}> English</div>
    </div>
  )
}

