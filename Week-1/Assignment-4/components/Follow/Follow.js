import React from 'react'
import styles  from './Follow.module.css';
import CardWithWhiteButton from '@/components/CardWithWhiteButton/CardWithWhiteButton';
import ButtonSquared from '../ButtonSquared/ButtonSquared';

export default function Follow() {
  return (
    <section className = {styles.section_build_today} >
        <h1 className = {styles.h1}>Follow Google for Developers</h1>
        <div className = {styles.container}>
        <CardWithWhiteButton
        url = "https://developers.google.com/focus/mobile-app-development"
        icon = "/img/yt.svg"
        title = "YouTube"
        description="Subscribe to join a community of creative developers and learn the latest in Google technology."
        buttonText="Learn More"
        />
         <CardWithWhiteButton
        url = "https://www.instagram.com/googlefordevs/"
        icon = "/img/ig.webp"
        title = "Instagram"
        description="Follow and discover developer resources, community events, and inspirational stories."
        buttonText="Learn More"
        />
         <CardWithWhiteButton
        url = "https://www.linkedin.com/showcase/googledevelopers/"
        icon = "/img/li_96.png"
        title = "LinkedIn"
        description="Join a community of creative developers and learn how to use the latest in technology."
        buttonText="Learn More"
        />
         <CardWithWhiteButton
        url = "https://twitter.com/googledevs"
        icon = "/img/x.svg"
        title = "X"
        description="Join the conversation to discover the latest developer tools, resources, events, and announcements."
        buttonText="Learn More"
        />
    </div>
    </section>
   
  )
}
