import React from 'react'
import styles  from './TrendingNews.module.css';
import CardWithButtonLarge from '@/components/CardWithButtonLarge/CardWithButtonLarge';
import ButtonSquared from '../ButtonSquared/ButtonSquared';

export default function TrendingNews() {
  return (
    <section className = {styles.section_build_today} >
        <h1 className = {styles.h1}>Trending news</h1>
        <div className = {styles.container}>
        <CardWithButtonLarge
        url = "https://developers.googleblog.com/en/gemini-15-pro-and-15-flash-now-available/"
        icon = "/img/gemini-pro-flash_480.jpeg"
        title = "Gemini 1.5 Pro and 1.5 Flash are now generally available"
        description="Increased rate limits for Gemini 1.5 Flash, 1.5 Flash tuning support (coming soon), JSON schema for model response, and more! Get started in Google AI Studio."
        />
         <CardWithButtonLarge
        url = "https://android-developers.googleblog.com/2024/05/google-io-2024-whats-new-in-android-development-tools.html"
        icon = "/img/gemini-android-studio_480.png"
        title = "Gemini in Android Studio"
        description="Designed to streamline development and enhance app quality, Gemini in Android Studio is now available in Stable, bringing AI-powered coding assistance to 200+ countries and territories."
        />
         <CardWithButtonLarge
        url = "https://idx.dev/blog/article/start-building-with-project-idx-today"
        icon = "/img/project-idx-beta_480.png"
        title = "Start building with Project IDX today"
        description="Experience a streamlined development environment for full-stack, multi-platform, and AI-powered apps. Now open to everyone, no waitlist."
        />
    </div>
    </section>
   
  )
}
