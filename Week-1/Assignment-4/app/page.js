import Image from "next/image";
import styles from "./page.module.css";
import StartBuildingToday from "@/components/StartBuildingToday/StartBuildingToday";
import WhatAreYou from "@/components/WhatAreYou/WhatAreYou";
import TrendingNews from "@/components/TrendingNews/TrendingNews";
import WhatNew from "@/components/WhatNew/WhatNew";
import Other from "@/components/Other/Other"
import Follow from "@/components/Follow/Follow";
import LandingCover from "@/components/LandingCover/LandingCover";
import Language from "@/components/Language/Language";

export default function Home() {
  return (
    <main className={styles.main}>
       <div className = {styles.banner}>
        <b>Build with NextJS. Course assignment by Yunwei Dai. <a href = "https://github.com/daiyunwei1998">About me.</a></b>
      </div>
      <LandingCover />
      <StartBuildingToday />
      <WhatAreYou />
      <TrendingNews />
      <WhatNew />
      <Other />
      <Follow />
      <section className = {styles.site_map}>
        <div>
          <div  className = {styles.altdiv_site_map_column} style = {{fontSize: "16px", margin:"40px 0 32px 0"}}>Connect <br/></div>
          <a href="https://googledevelopers.blogspot.com/" className={styles.a_site_map}>Blog</a><br/>
          <a href="https://www.instagram.com/googlefordevs/" className={styles.a_site_map}>Instagram</a><br/>
          <a href="https://www.linkedin.com/showcase/googledevelopers/" className={styles.a_site_map}>LinkedIn</a><br/>
          <a href="https://twitter.com/googledevs" className={styles.a_site_map}>X (Twitter)</a><br/>
          <a href="https://www.youtube.com/user/GoogleDevelopers" className={styles.a_site_map}>YouTube</a><br/>
        </div>
        <div className = {styles.div_site_map_column} style = {{fontSize: "16px"}}>
          <div style = {{fontSize: "16px", margin:"40px 0 32px 0"}}>Programs <br/> </div>
          <a href="https://www.womentechmakers.com/" className={styles.a_site_map}>Women Techmakers</a><br/>
          <a href="https://developers.google.com/community/gdg" className={styles.a_site_map}>Google Developer Groups</a><br/>
          <a href="https://developers.google.com/community/experts" className={styles.a_site_map}>Google Developer Experts</a><br/>
          <a href="https://developers.google.com/community/accelerators" className={styles.a_site_map}>Accelerators</a><br/>
          <a href="https://developers.google.com/community/gdsc" className={styles.a_site_map}>Google Developer Student Clubs</a><br/>
        </div>
        <div className = {styles.div_site_map_column} style = {{fontSize: "16px"}}>
        <div style = {{fontSize: "16px", margin:"40px 0 32px 0"}}>  Developer consoles <br/> </div>
          <a href="https://console.developers.google.com/" className={styles.a_site_map}>Google API Console</a><br/>
          <a href="https://console.cloud.google.com/" className={styles.a_site_map}>Google Cloud Platform Console</a><br/>
          <a href="https://play.google.com/apps/publish" className={styles.a_site_map}>Google Play Console</a><br/>
          <a href="https://console.firebase.google.com/" className={styles.a_site_map}>Firebase Console</a><br/>
          <a href="https://console.actions.google.com/" className={styles.a_site_map}>Actions on Google Console</a><br/>
          <a href="https://cast.google.com/publish" className={styles.a_site_map}>Cast SDK Developer Console</a><br/>
          <a href="https://chrome.google.com/webstore/developer/dashboard" className={styles.a_site_map}>Chrome Web Store Dashboard</a><br/>
        </div>
      </section>
      <section className = {styles.footer}>
        <div className = {styles.div_footer_link}>
          <img className = {styles.img_footer_icon} src = "https://www.gstatic.com/devrel-devsite/prod/vc5df62aff689c916c31b2ac1e49a7e8c5ecada1bb13dcdd68aaefb1e1e9b9ec0/developers/images/lockup-new.svg" alt = "Google Developers"/>
          <a className = {styles.a_footer} href = "https://developer.android.com/">Android</a>
          <a className = {styles.a_footer} href = "https://developer.chrome.com/home">Chrome</a>
          <a className = {styles.a_footer} href = "https://firebase.google.com/">Firebase</a>
          <a className = {styles.a_footer} href = "https://cloud.google.com/">Google Cloud Platform</a>
          <a className = {styles.a_footer} href = "https://developers.google.com/products">All products</a>
        </div>
        <div className = {styles.div_footer_terms}>
          <div className = {styles.div_footer_terms_privacy}><a className = {styles.a_footer_terms} href = "https://developers.google.com/terms/site-terms">Terms</a> | <a  className = {styles.a_footer_terms} href = "https://policies.google.com/privacy">Privacy</a></div>
          <div className = {styles.div_sign_up}>Sign up for the Google for Developers newsletter 
            <a className = {styles.a_subscribe} href =  "https://developers.google.com/newsletter/subscribe" ><button className = {styles.button_subscribe}>Subscribe</button></a>
          </div>
          <div  className = {styles.footer_language}><Language/> </div>
          

        </div>
      </section>
    </main>
  );
}
