'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'

export default function Home() {

  const [count, setCount] = useState(0);
  const maxImages = 6;

  const handleClick = () => {
    setCount((prevCount) => (prevCount + 1) % maxImages);
  };
  

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center bg-sky-950 text-white p-4 ">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="flex gap-[24px]">
          <li onClick={() => handleClickScroll("Profile")}>Profile</li>
          <li onClick={() => handleClickScroll("WorkExperience")}>Work Experience</li>
          <li onClick={() => handleClickScroll("Projects")}>Projects</li>
          <li onClick={() => handleClickScroll("Social")}>Social</li>
        </ul>
      </nav>
      <header className="flex flex-col items-center">
        <div>
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg">Explore my work and projects</p>
        <button onClick={handleClick}><Image src={`/PlaceHolder${count}.png`} width={400} height={600} alt="Profile Picture" /></button>
        <p>You clicked {count} times</p>
        </div>
      </header>
      <main className="flex flex-col items-center">
      <div id="Profile">
          <h2 className="text-3xl font-bold">Profile</h2>
          <p className="text-lg">This is my profile section. Here you can find information about me.</p>
          <p>My name is Josh Scott. Marketing Guru with experience in web development, data science, and machine learning.</p>
          
          <p>My skills include:</p>
      </div>
      <div id="WorkExperience">

      </div>
      <div id="Projects">

      </div>
      </main>
      <footer className="flex justify-between items-center bg-sky-950 text-white p-4">
        <div id="Social">
        <ul className="flex gap-[24px]">
          <li><Link href="https://www.linkedin.com/in/josh-o-scott/" prefetch={false}><Image src = "https://www.linkedin.com/favicon.ico" width={60} height={60} alt="linkedin Logo"/></Link></li>
          <li><Link href="https://www.facebook.com/profile.php?id=100009625337073" prefetch={false}><Image src = "https://www.facebook.com/favicon.ico" width={60} height={60} alt="Facebook Logo"/></Link></li>
        </ul>
          
          
        </div>
      </footer>
    </div>
  );
}

