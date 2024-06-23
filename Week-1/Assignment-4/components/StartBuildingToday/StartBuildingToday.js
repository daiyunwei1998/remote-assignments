import React from 'react'
import styles  from './StartBuildingToday.module.css';
import TechCard from '../TechCard/TechCard';
import ButtonSquared from '../ButtonSquared/ButtonSquared';

export default function StartBuildingToday() {
  return (
    <section className = {styles.section_build_today} >
        <h1 className = {styles.h1}>Start building today</h1>
        <div className = {styles.container}>
        <TechCard 
          icon="/img/android-logo.png" 
          title="Android" 
          description="Modern tools to help you build experiences that people love across every Android device." 
        />
        <TechCard 
          icon="/img/google_cloud_64dp.png" 
          title="Google Cloud" 
          description="New customers get $300 in free credits to deploy a dynamic website, launch a VM, build a three-tier web app, and more." 
        />
        <TechCard 
          icon="/img/ai-studio-icon.png" 
          title="Google AI Studio" 
          description="Build generative AI applications quickly with Gemini in Google AI Studio." 
        />
        <TechCard 
          icon="/img/chromeos-logo.svg" 
          title="Chrome" 
          description="Modern tools and features that help you build high-quality web experiences." 
        />
        <TechCard 
          icon="/img/play_prism_64dp.png" 
          title="Google Play" 
          description="Grow your business, improve app quality, engage your audience, and earn revenue." 
        />
        <TechCard 
          icon="/img/icon.svg" 
          title="Firebase" 
          description="An app development platform that helps you build and grow apps and games users love." 
        />
        <TechCard 
          icon="/img/keras.png" 
          title="Keras" 
          description="Seamless deep learning across TensorFlow, JAX, and PyTorch." 
        />
        <TechCard 
          icon="/img/tensorflow-logo-196.png" 
          title="TensorFlow" 
          description="An end-to-end platform that makes it easy to build and deploy ML models in any environment." 
        />
        <TechCard 
          icon="/img/flutter_64dp.png" 
          title="Flutter" 
          description="Build, test, and deploy beautiful web, mobile, desktop and embedded apps from one codebase." 
        />
        <TechCard 
          icon="/img/google-ads.svg" 
          title="Google Ads" 
          description="Promote your website, products, and app to the right users with Google Ads." 
        />
        <TechCard 
          icon="/img/kaggle.svg" 
          title="Kaggle" 
          description="A platform to share machine learning data sets, explore and build models, and compete in competitions." 
        />
        <TechCard 
          icon="/img/angular_gradient.png" 
          title="Angular" 
          description="The web development framework for building the future." 
        />
    </div>
    <ButtonSquared url = "https://developers.google.com/products" text = "View all other developer products"/>
    </section>
   
  )
}
