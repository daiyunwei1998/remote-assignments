import React from 'react'
import styles  from './WhatAreYou.module.css';
import CardWithButton from '@/components/CardWithButton/CardWithButton';
import ButtonSquared from '../ButtonSquared/ButtonSquared';

export default function WhatAreYou() {
  return (
    <section className = {styles.section_build_today} >
        <h1 className = {styles.h1}>What are you developing for?</h1>
        <h2 className = {styles.h2}>Select your development focus to find helpful solutions and resources</h2>
        <div className = {styles.container}>
        <CardWithButton
        url = "https://developers.google.com/focus/mobile-app-development"
        icon = "/img/ecosystem-mobile.svg"
        title = "Mobile"
        description="Develop for a range of audiences and form factors."
        />
         <CardWithButton
        url = "https://developers.google.com/focus/web-development"
        icon = "/img/ecosystem-web.svg"
        title = "Web"
        description="Create fast, secure sites and apps for the open web."
        />
         <CardWithButton
        url = "https://developers.google.com/focus/ai-development"
        icon = "/img/ecosystem-ai.svg"
        title = "AI"
        description="Access cutting-edge AI models and open source tools for machine learning."
        />
         <CardWithButton
        url = "https://developers.google.com/focus/cloud-development"
        icon = "/img/ecosystem-cloud.svg"
        title = "Cloud"
        description="Simplify and scale end-to-end development."
        />
    </div>
    </section>
   
  )
}
