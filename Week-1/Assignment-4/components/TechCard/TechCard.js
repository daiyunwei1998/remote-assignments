import styles from './TechCard.module.css'
import React from 'react'
import Image from 'next/image'

export default function TechCard({icon, title, description}) {
  return (
    <div className={styles.card_container}>
        <Image className = {styles.img} src = {icon} width = {50} height = {50} ></Image>
        <h2 className = {styles.h2}>{title}</h2>
        <p className = {styles.p}>{description}</p>
      
    </div>
  )
}
