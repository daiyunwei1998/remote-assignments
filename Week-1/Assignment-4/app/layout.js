import "./globals.css";

// components
import { Inter } from "next/font/google";
import NavLink from '../components/NavLink/NavLink';
import SearchBox from "@/components/SearchBox/SearchBox";
import Language from "@/components/Language/Language";
import KebabMenu from "@/components/KebabMenu/KebabMenu";
 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Developers",
  description: "AppWorks School 2024 Back-End Class Course Work, Week 1 Assignemnt 4",

};
export const viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className = {'nav-bar'}>
        <img className = {'nav-bar-icon'} src = "https://www.gstatic.com/devrel-devsite/prod/vc5df62aff689c916c31b2ac1e49a7e8c5ecada1bb13dcdd68aaefb1e1e9b9ec0/developers/images/lockup-new.svg" alt = "Google Developers"/>
        <NavLink context="Products" />
        <NavLink context="Solutions" />
        <NavLink context="Events" />
        <NavLink context="Learn" />
        <NavLink context="Community" />
        <NavLink context="Blog" />
        <NavLink context="More" />
        <SearchBox />
        <Language />
        <KebabMenu />
        <div style={{ 
          backgroundColor: '#5c6bc0', 
          height: '1.5rem',
          width: '1.5rem',
          borderRadius: '50%',
          color: 'white',
          textAlign:'center',
        }}>D</div>
    </nav>
    {children}
      </body>
    
    </html>
  );
}
