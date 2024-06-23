import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; 
import styles  from './KebabMenu.module.css';

export default function KebabMenu() {
  return (
    <div>
      <FontAwesomeIcon className = {styles['ellipsis-icon']} icon={faEllipsisVertical} />
    </div>
  )
}
