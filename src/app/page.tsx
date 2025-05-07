'use client'
import { SpeedInsights } from "@vercel/speed-insights/next"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'
import React from 'react';
import {Accordion, AccordionItem} from "@heroui/accordion";


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
        <p className="text-2xl font-bold ">Josh Scott&apos;s Portfolio</p>
          <ul className="flex gap-[24px] font-bold">
            <li onClick={() => handleClickScroll("Profile")}>Profile</li>
            <li onClick={() => handleClickScroll("WorkExperience")}>Work Experience</li>
            <li onClick={() => handleClickScroll("Projects")}>Projects</li>
            <li onClick={() => handleClickScroll("Social")}>Social</li>
          </ul>
      </nav>
      
      <header className="flex flex-col  bg-zinc-900 p-12 outline-6 outline-yellow-600 drop-shadow-md bg-[url(/BackgroundTemp.jpg)] bg-opacity-10">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold p-4">Josh Scott</h1>
          <button onClick={handleClick} className ="outline-6  outline-yellow-600"><Image src={`/PlaceHolder${count}.png`} width={400} height={600} alt="Profile Picture" /></button>
          {/* Test Code <p>You clicked {count} times</p>*/}
        </div>
      </header>

      <main className="flex flex-col items-center bg-zinc-900 pb-20 outline-6 outline-yellow-600 drop-shadow-md">

        <div id="Profile" className="mt-12 mb-12 items-center ">
          <div className="justify-left p-6">
            <p className="text-4xl font-bold">Profile</p>
            <p className="text-3xl">This is my profile section. Here you can find information about me.</p>
          </div>
          <ul className="text-3xl  p-4 flex flex-col items-left  gap-4 outline-6 outline-yellow-600 rounded-lg min-w-[1000px] max-w-[1000px] bg-sky-950" >
              <li>Josh&apos;s Name or Nickname:</li>
              <li>Josh&apos;s Summary/About:</li>
              <li>Josh&apos;s Interests and Hobbies:</li>
              <li>Josh&apos;s Achievements and Accomplishments:</li>
              <li>Josh&apos;s Contact Information:</li>
              <li>Josh&apos;s My skills include:</li>
            </ul>
        </div>

        <div id="WorkExperience" className="mt-6 mb-6">
          <div className="justify-left p-6">
            <p className="text-4xl font-bold">Work Experience</p>
            <p className="text-3xl">See where i have worked!</p>
          </div>
          <div className="flex flex-col outline-6 outline-yellow-600 rounded-lg p-4 min-w-[1000px] max-w-[1000px] bg-sky-950 font-bold">
            <ul className="flex justify-around p-2 items-center">
              <li><Image src = "https://www.linkedin.com/favicon.ico" width={60} height={60} alt="CompanyNameLogo"/></li>
              <li>Company Name + logo</li>
              <li>Position:</li>
              <li>Duration:</li>
            </ul>
            <Accordion>
              <AccordionItem className="pl-4 font-bold" key="1" aria-label="Accordion 1" title="More Details">
                <p className="font-thin">Details about my working experience</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
    
        <div id="Projects" className="mt-12 mb-12 flex flex-col ">
          <div className="justify-left p-6">
            <p className="text-4xl font-bold">Projects</p>
            <p className="text-3xl">Here are some of my Marketing Projects:</p>
          </div>
          <div className="flex flex-col items-center outline-6 outline-yellow-600 rounded-lg p-4 min-w-[1000px] max-w-[1000px] bg-sky-950 font-bold">
            <Carousel className = "rounded-lg bg-sky-950 p-6 min-h-[800px]" showArrows={true} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={1000}>
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

      <footer className="flex justify-between items-center bg-sky-950 text-white pb-6">

        <div id="Social" className="p-6 pl-20">
            <Link href="https://www.linkedin.com/in/josh-o-scott/" prefetch={false}><Image src = "https://www.linkedin.com/favicon.ico" width={60} height={60} alt="linkedin Logo"/></Link>
        </div>

        <div className="flex flex-col pr-20 drop-shadow-md items-center">
          <p className="text-lg">Contact me at: Josh&apos;s Email</p>
          <p className="text-lg">© {currentYear} Alex Hart. All rights reserved.</p>
          <Link className= "text-1x1 font-bold"href="/about" prefetch={false}>About the Dev</Link>
        </div>
        
      </footer>

    </div>
  );
}

