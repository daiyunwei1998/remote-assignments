import React from 'react'
import styles  from './Other.module.css';
import CardWithButtonCustomText from '@/components/CardWithButtonCustomText/CardWithButtonCustomText';

export default function TrendingNews() {
  return (
    <section className = {styles.section_build_today} >
        <div className = {styles.container}>
        <CardWithButtonCustomText
        url = "https://developers.googleblog.com/en/gemini-15-pro-and-15-flash-now-available/"
        icon = "/img/find-event_480.png"
        title = "Find an event"
        description="Grow your knowledge through online and in-person developer events."
        buttonText= "View Events"
        />
         <CardWithButtonCustomText
        url = "https://android-developers.googleblog.com/2024/05/google-io-2024-whats-new-in-android-development-tools.html"
        icon = "/img/improve-tech-skills_480.png"
        title = "Improve technical skills"
        description="Keep up with Google technology. Sharpen skills and master new ones."
        buttonText= "Start Learning"
        />
         <CardWithButtonCustomText
        url = "https://idx.dev/blog/article/start-building-with-project-idx-today"
        icon = "/img/join-a-community_480.png"
        title = "Join a community"
        description="Meet a diverse network, no matter where you are on your developer journey."
        buttonText= "Explore communities"
        />
    </div>
    </section>
   
  )
}
