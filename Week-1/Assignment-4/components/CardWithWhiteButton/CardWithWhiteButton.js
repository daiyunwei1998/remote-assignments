import styles from './CardWithWhiteButton.module.css'
import React from 'react'
import Image from 'next/image'

export default function CardWithButtonLarge({url, icon, title, description, buttonText}) {
  return (
    <div className={styles.card_container}>

        <div className = {styles.div_card_with_button_content}>
        <a className = {styles.a} href = {url}><Image className = {styles.img} src = {icon} width={0}
  height={0} sizes="100vw" style={{ width: '38px', height: 'auto' }} ></Image></a>
          <a className = {styles.h2_with_link} href = {url}><h2 className = {styles.h2}>{title}</h2></a>
          <p className = {styles.p}>{description}</p>
        </div>
        <a className = {styles.a} href = {url}>
          <button className = {styles.button}><b>{buttonText}</b></button>
        </a>
      
    </div>
  )
}
