'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function Home() {

  const [count, setCount] = useState(0);
  const currentYear = new Date().getFullYear();
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
      <nav className="flex justify-between items-center bg-sky-950 text-white p-6 drop-shadow-md">
        <div className="text-2xl font-bold">Josh Scott's Portfolio</div>
        <ul className="flex gap-[24px]">
          <li onClick={() => handleClickScroll("Profile")}>Profile</li>
          <li onClick={() => handleClickScroll("WorkExperience")}>Work Experience</li>
          <li onClick={() => handleClickScroll("Projects")}>Projects</li>
          <li onClick={() => handleClickScroll("Social")}>Social</li>
        </ul>
      </nav>
      <header className="flex flex-col items-center bg-zinc-900 p-6">
        <div>
        <h1 className="text-3xl font-bold p-4 ">Welcome to My Portfolio</h1>
        <button onClick={handleClick} className ="outline-6  outline-yellow-600"><Image src={`/PlaceHolder${count}.png`} width={400} height={600} alt="Profile Picture" /></button>
        <p>You clicked {count} times</p>
        </div>
      </header>
      <main className="flex flex-col items-center bg-zinc-900 pb-20">

      <div> // This is a comment might have to remove or change later
        <h4>Popup - GeeksforGeeks</h4>
        <Popup  trigger={<button className="bg-blue-500 text-white px-4 py-2 rounded"> Click to open modal</button>} modal nested>
          {
            ((close: () => void) => (
              <div className="modal bg-white p-6 rounded shadow-md">
                <h3 className="text-lg font-semibold mb-2">Modal Title</h3>
                <p>This is the content inside the modal.</p>
                <div className="mt-4 text-right"> <button onClick={close} className="bg-gray-500 text-white px-3 py-1 rounded"> Close Modal  </button></div>            
              </div>
            )) as unknown as React.ReactNode
          }
        </Popup>
    </div>
        
        <div id="Profile" className="items-center">
          <h2 className="text-3xl font-bold left-justify">Profile</h2>
          <p className="text-lg">This is my profile section. Here you can find information about me.</p>
          <p>My name is Josh Scott.</p>
          <p>My skills include:</p>
        </div>

        <div id="WorkExperience">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <p className="text-lg">This is my work experience section. Here you can find information about my work experience.</p>
          <p>My work experience includes:</p>
        </div>
    
        <div id="Projects">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="text-lg">Here are some of my Marketing Projects:</p>
            <h2>
              <p className="text-lg">This is my project section. Here you can find information about my projects.</p>
            </h2>
            <Carousel className = "size-1/2 rounded-lg" showArrows={true} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={1000}>
              <div>
                  <img src="/PlaceHolderProject1.png" alt="image2"/>
                  <p className="legend">Image 1</p>
              </div>

              <div>
                  <img src="/PlaceHolderProject2.png" alt="image2"/>
                  <p className="legend">Image 2</p>
              </div>

              <div>
                  <img src="/PlaceHolderProject3.png" alt="image3"/>
                  <p className="legend">Image 3</p>
              </div>

              <div>
                  <img src="/PlaceHolderProject4.png" alt="image4"/>
                  <p className="legend">Image 4</p>
              </div>

              <div>
                  <img src="/PlaceHolderProject5.png" alt="image5"/>
                  <p className="legend">Image 5</p>
              </div>
            </Carousel>
          </div>
        </div>
      </main>
      <footer className="flex justify-between items-center bg-sky-950 text-white">

        <div id="Social" className="flex flex-col pl-20">
          <h2 className="text-3xl font-bold p-2">Social</h2>
          <ul className="flex gap-[24px] p-2">
            <li><Link href="https://www.linkedin.com/in/josh-o-scott/" prefetch={false}><Image src = "https://www.linkedin.com/favicon.ico" width={60} height={60} alt="linkedin Logo"/></Link></li>
            <li><Link href="https://www.facebook.com/profile.php?id=100009625337073" prefetch={false}><Image src = "https://www.facebook.com/favicon.ico" width={60} height={60} alt="Facebook Logo"/></Link></li>
            <li><Link href="https://www.tiktok.com/" prefetch={false}><Image src = "https://www.tiktok.com/favicon.ico" width={60} height={60} alt="Facebook Logo"/></Link></li>
          </ul>
        </div>

        <div className="flex flex-col pr-20 drop-shadow-md">
          <p className="text-lg">Contact me at: Josh's Email</p>
          <p className="text-lg">© {currentYear} Alex Hart. All rights reserved.</p>
        </div>

      </footer>
    </div>
  );
}

