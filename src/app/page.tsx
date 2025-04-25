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
      <nav>
        <ul className="flex-wrap">
          <li onClick={() => handleClickScroll("Profile")}>Profile</li>
          <li onClick={() => handleClickScroll("WorkExperience")}>Work Experience</li>
          <li onClick={() => handleClickScroll("Projects")}>Projects</li>
          <li onClick={() => handleClickScroll("Social")}>Social</li>
        </ul>
      </nav>
      <main className="flex justify-start gap-[24px]">
      <div id="Profile">
        <p>You clicked {count} times</p>
        <button onClick={handleClick}><Image src={`/PlaceHolder${count}.png`} width={400} height={600} alt="Profile Picture" /></button>

      </div>
      <div id="WorkExperience">

      </div>
      <div id="Projects">

      </div>
      </main>
      <footer className="flex gap-[24px]">
        <div id="Social">
          <Link href="https://www.linkedin.com/in/josh-o-scott/" prefetch={false}>
            <Image src = "https://www.linkedin.com/favicon.ico" width={60} height={60} alt="linkedin Logo"/>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100009625337073" prefetch={false}>
            <Image src = "https://www.facebook.com/favicon.ico" width={60} height={60} alt="Facebook Logo"/>
          </Link>
        </div>
      </footer>
    </div>
  );
}

