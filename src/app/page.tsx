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
  const maxImages = 6;
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleClick = () => {
    setCount((prevCount) => (prevCount + 1) % maxImages);
  };

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on mobile when clicking
    }
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center bg-sky-950 text-white p-4 md:p-6 drop-shadow-md">

        <p className="text-2xl font-bold">Josh Scott&apos;s Portfolio</p>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}> ☰ </button>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-bold">
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleClickScroll("Profile")}>Profile</li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleClickScroll("WorkExperience")}>Work Experience</li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleClickScroll("Projects")}>Projects</li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleClickScroll("Social")}>Social</li>
        </ul>

        {/* Mobile Dropdown Menu */}
        <div className={`absolute top-16 right-4 bg-sky-950 rounded-lg p-4 md:hidden transition-transform transform ${isMenuOpen ? "scale-100" : "scale-0"}`}>
          <ul className="flex flex-col gap-4 font-bold">
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => { handleClickScroll("Profile"); setIsMenuOpen(false); }}>Profile</li>
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => { handleClickScroll("WorkExperience"); setIsMenuOpen(false); }}>Work Experience</li>
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => { handleClickScroll("Projects"); setIsMenuOpen(false); }}>Projects</li>
            <li className="cursor-pointer hover:text-yellow-400" onClick={() => { handleClickScroll("Social"); setIsMenuOpen(false); }}>Social</li>
          </ul>
        </div>

      </nav>

      
      <header className="flex flex-col  bg-zinc-900 p-12 outline-6 outline-yellow-600 drop-shadow-md bg-[url(/BackgroundTemp.jpg)] bg-opacity-10">
      
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold p-4">Josh Scott</h1>
          <button onClick={handleClick} className ="outline-6  outline-yellow-600"><div className="w-full max-w-[400px] h-auto sm:h-[600px]"><Image src={`/PlaceHolder${count}.png`} width={400} height={600} alt="Profile Picture" /></div></button>
        </div>

      </header>

      <main className="flex flex-col items-center bg-zinc-900 pb-20 outline-6 outline-yellow-600 drop-shadow-md">

        <div id="Profile" className="mt-12 mb-12 items-center w-full max-w-[1000px]">
          <div className="p-6 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold">Profile</p>
            <p className="text-xl md:text-3xl mt-2">
              This is my profile section. Here you can find information about me.
            </p>
          </div>
          <ul className="text-xl md:text-2xl p-4 flex flex-col gap-4 outline-6 outline-yellow-600 rounded-lg bg-sky-950 w-full max-w-[1000px]">
            <li>Josh&apos;s Name or Nickname:</li>
            <li>Josh&apos;s Summary/About:</li>
            <li>Josh&apos;s Interests and Hobbies:</li>
            <li>Josh&apos;s Achievements and Accomplishments:</li>
            <li>Josh&apos;s Contact Information:</li>
            <li>Josh&apos;s My skills include:</li>
          </ul>
        </div>

        <div id="WorkExperience" className="mt-6 mb-6 w-full max-w-[1000px]">
          <div className="p-6 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold">Work Experience</p>
            <p className="text-xl md:text-3xl mt-2">See where I have worked!</p>
          </div>
          <div className="flex flex-col outline-6 outline-yellow-600 rounded-lg p-4 w-full max-w-[1000px] bg-sky-950 font-bold">
            <ul className="flex flex-wrap justify-center md:justify-between p-4 items-center gap-4 md:gap-0">
              <li><Image src="https://www.linkedin.com/favicon.ico" width={40} height={40} alt="CompanyNameLogo" className="w-12 h-12 md:w-16 md:h-16"/></li>
              <li className="text-xl md:text-2xl">Company Name + logo</li>
              <li className="text-xl md:text-2xl">Position:</li>
              <li className="text-xl md:text-2xl">Duration:</li>
            </ul>
            <Accordion>
              <AccordionItem className="pl-4 font-bold" key="1" aria-label="Accordion 1" title="More Details">
                <p className="font-thin text-base md:text-lg">Details about my working experience</p>
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
            <Carousel className = "rounded-lg bg-sky-950 p-6 min-h-[400px] md:min-h-[600px] lg:min-h-[800px] w-full max-w-[900px]" showArrows={true} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={1000}>
              <div>
                  <Image src="/PlaceHolderProject1.png" alt="image2"/>
                  <p className="legend">Image 1</p>
              </div>
              <div>
                  <Image src="/PlaceHolderProject2.png" alt="image2"/>
                  <p className="legend">Image 2</p>
              </div>
              <div>
                  <Image src="/PlaceHolderProject3.png" alt="image3"/>
                  <p className="legend">Image 3</p>
              </div>
              <div>
                  <Image src="/PlaceHolderProject4.png" alt="image4"/>
                  <p className="legend">Image 4</p>
              </div>

              <div>
                  <Image src="/PlaceHolderProject5.png" alt="image5"/>
                  <p className="legend">Image 5</p>
              </div>
            </Carousel>
          </div>
        </div>
      </main>

      <footer className="flex flex-col md:flex-row justify-between items-center bg-sky-950 text-white p-6 md:py-6 md:px-20">

        <div id="Social" className="flex items-center justify-center mb-4 md:mb-0 md:justify-start">
          <Link href="https://www.linkedin.com/in/josh-o-scott/" prefetch={false}>
            <Image src="https://www.linkedin.com/favicon.ico" width={40} height={40} alt="LinkedIn Logo" className="w-10 h-10 md:w-12 md:h-12"/>
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <p className="text-sm md:text-lg">Contact me at: Josh&apos;s Email</p>
          <p className="text-sm md:text-lg">© {new Date().getFullYear()} Alex Hart. All rights reserved.</p>
          <Link className="text-sm md:text-lg font-bold underline hover:text-yellow-400" href="/about" prefetch={false}>About the Dev</Link>
        </div>

      </footer>
    </div>
  );
}

