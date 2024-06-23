import React from 'react'
import ButtonSquared from '../ButtonSquared/ButtonSquared'
import styles from "./WhatNew.module.css";
import Image from 'next/image';

export default function WhatNew() {
  return (
    <section className = {styles.section_what_new}>
        <div className = {styles.container}>
            <Image 
            className = {styles.img_what_new}
            width={0}
            height={0}
            sizes="100vw"
            src = "/img/android-studio-jellyfish_480.png" />
            <div className = {styles.div_what_new}>
                <p>WHAT'S NEW IN ANDROID</p>
                <h1 className = {styles.h1}>Jellyfish is now stable</h1>
                <p className = {styles.p}>Android Studio Jellyfish is here! Dive into cutting-edge AI features like Gemini in Android Studio and seamless services integrations like Android Device Streaming.</p>
                <a href = "https://developer.android.com/studio">
                  <button className = {styles.button}><b>Download now</b></button>
                </a>    
            </div>
        </div>

    </section>
  )
}
