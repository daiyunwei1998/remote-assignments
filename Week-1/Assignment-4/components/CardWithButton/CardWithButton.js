import styles from './CardWithButton.module.css'
import React from 'react'
import Image from 'next/image'

export default function CardWithButton({url, icon, title, description}) {
  return (
    <div className={styles.card_container}>
        <a href = {url}><Image className = {styles.img} src = {icon} width = {100} height = {100} ></Image></a>
        <div className = {styles.div_card_with_button_content}>
          <a className = {styles.h2_with_link} href = {url}><h2 className = {styles.h2}>{title}</h2></a>
          <p className = {styles.p}>{description}</p>
          <a href = {url}>
            <button className = {styles.button}><b>Get Started</b></button>
          </a>
        </div>
      
    </div>
  )
}
