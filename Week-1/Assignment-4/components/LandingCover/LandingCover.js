import React from 'react'
import styles from './LandingCover.module.css'

export default function LandingCover() {
  return (
    <section className = {styles.landing_cover}>
      <div className={styles.div_landing}>
        <div className = {styles.landing_content}>
          <h1 className = {styles.landing_h1}>Rewatch Google I/O 2024</h1>
          <h2 className = {styles.landing_h2}>Rewind and relive Google I/O 2024. Keynotes and sessions are now available on-demand.</h2> 
          <a href = "https://io.google/2024/?utm_source=devsite-hpp&utm_medium=embedded_marketing&utm_campaign=dgc-io-24&utm_content="><button className = {styles.landingCTA}>Watch on-demand</button></a>
        </div>
      </div>
    </section>
  )
}
