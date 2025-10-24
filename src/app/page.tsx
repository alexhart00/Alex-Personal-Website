"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionItem } from "@heroui/accordion";

export default function Home() {
  return (
    <>
      {NavbarComponent()}
      {ProfileComponent()}
      {AboutComponent()}
      {FooterComponent()}
    </>
  );  
}

export function NavbarComponent(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleClickScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center bg-sky-950 text-white p-4 md:p-6 drop-shadow-md relative z-20 outline-6 outline-yellow-600">

        <p className="text-2xl font-bold">Alexander Hart&apos;s Portfolio</p>
        
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={handleMenuToggle}> ☰ </button>
        </div>
        
        <ul className="hidden md:flex gap-6 font-bold">
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleClickScroll("Profile")}>Profile</li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleClickScroll("WorkExperience")}>Work Experience</li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleClickScroll("Projects")}>Projects</li>
          <li className="cursor-pointer hover:text-yellow-400" onClick={() => handleClickScroll("Social")}>Social</li>
        </ul>

        <div className={`absolute top-16 right-4 bg-sky-950 rounded-lg p-4 transition-opacity duration-300 ease-in-out transform outline-4 outline-yellow-600 rounded-lg${isMenuOpen ? "visible opacity-100 z-10" : "invisible opacity-0"}`}>
          <ul className="flex flex-col gap-4 font-bold text-center">
            <li className="bg-sky-900 outline-2 outline-yellow-600 rounded-lg" onClick={() => handleClickScroll("Profile")}>Profile</li>
            <li className="bg-sky-900 outline-2 outline-yellow-600 rounded-lg" onClick={() => handleClickScroll("WorkExperience")}> Work Experience</li>
            <li className="bg-sky-900 outline-2 outline-yellow-600 rounded-lg" onClick={() => handleClickScroll("Projects")}>Projects</li>
            <li className="bg-sky-900 outline-2 outline-yellow-600 rounded-lg" onClick={() => handleClickScroll("Social")}>Social</li>
          </ul>
        </div>

      </nav>
  );
}

export function ProfileComponent(){
  const maxImages = 5;
  const [profilePhotoIndex, setProfilePhotoIndex] = useState(0);
  const handleClick = () => setProfilePhotoIndex((prevIndex) => (prevIndex + 1) % maxImages);

  return (
    <header className="flex flex-col  bg-zinc-900 p-12 outline-6 outline-yellow-600 drop-shadow-md  bg-opacity-10 bg-cover bg-center bg-[url(/BackgroundTemp.jpg)] shadow-yellow-600 shadow-xl relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-5xl font-bold p-4">Alexander Hart</h1>
          <button onClick={handleClick} className ="outline-6  outline-yellow-600 shadow-yellow-600 shadow-xl"><div className="w-full max-w-[400px] h-auto sm:h-[500px]"><Image className="object-fill w-full min-w-[375px]  max-w-[375px] h-auto sm:h-[500px]" src={`/profilePicture(${profilePhotoIndex}).png`} width={400} height={600} alt="Profile Picture" /></div></button>
        </div>
    </header>
  );
}

export function AboutComponent(){
  return (
    <main className="flex flex-col items-center bg-zinc-900 pb-20 outline-6 outline-yellow-600 drop-shadow-md relative z-10">

        <div id="Profile" className="mt-12 mb-12 items-center w-full max-w-[1000px]">
          <div className="p-6 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold">Profile</p>
            <p className="text-xl md:text-3xl mt-2">Alex&apos;s profile section. Here you can find information about me.</p>
          </div>
          <div className="text-xl md:text-2xl p-4 flex flex-col gap-4 outline-6 outline-yellow-600 rounded-lg bg-sky-950 w-full max-w-[1000px] shadow-yellow-600 shadow-xl">
          <ul className="text-xl md:text-2xl p-4 flex flex-col gap-4 rounded-lg bg-sky-900 w-full max-w-[1000px] shadow-black shadow-md">
            <li>Alex&apos;s Name or Nickname:</li>
            <li>Alex&apos;s Summary/About:</li>
            <li>Alex&apos;s Interests and Hobbies:</li>
            <li>Alex&apos;s Achievements and Accomplishments:</li>
            <li>Alex&apos;s Contact Information:</li>
            <li>Alex&apos;s skills include:</li>
          </ul>
          </div>
        </div>

        <div id="WorkExperience" className="mt-6 mb-6 w-full max-w-[1000px]">
          <div className="p-6 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold">Work Experience</p>
            <p className="text-xl md:text-3xl mt-2">See where I have worked!</p>
          </div>
          <div className="outline-6 outline-yellow-600 rounded-lg p-6 w-full max-w-[1000px] bg-sky-950 font-semibold shadow-xl shadow-yellow-600">
            <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md">
              <li className="text-xl md:text-2xl flex items-center gap-3">
                <Image src="https://www.linkedin.com/favicon.ico" width={40} height={40} alt="CompanyNameLogo" className="w-12 h-12 md:w-16 md:h-16"/>
                <span>logo + Company Name</span>
              </li>
              <li className="text-xl md:text-2xl">
                <span>Position: Market Man</span>
              </li>
              <li className="text-xl md:text-2xl">
                <span>Duration: September 2025 - Present</span>
              </li>
              <li className="text-xl md:text-2xl self-start">   
              <Accordion>
                <AccordionItem title={<span className="pl-4 font-bold flex items-center justify-between w-full">More Details</span>}  indicator={<></>} key="1" aria-label="Accordion 1">
                  <p className="font-thin text-base md:text-lg">Details about my working experience</p>
                </AccordionItem>
              </Accordion>
              </li>
            </ul>            
          </div>

        </div>

        <div id="Projects" className="mt-6 mb-6 w-full max-w-[1000px]">
          <div className="justify-left p-6">
            <p className="text-3xl sm:text-4xl font-bold">Projects</p>
            <p className="text-xl sm:text-2xl">Alex&apos;s Marketing Projects:</p>
          </div>
          <div className="flex flex-col items-center outline-6 outline-yellow-600 rounded-lg p-4 w-full max-w-full sm:max-w-[1000px] bg-sky-950 font-bold shadow-yellow-600 shadow-xl">
            <div className="flex flex-col items-center rounded-lg p-4 w-full max-w-full sm:max-w-[1000px] font-bold bg-sky-900 text-white shadow-black shadow-md">
            <Carousel className = "rounded-lg p-4 sm:p-6 min-h-[300px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[800px] w-full" showArrows={true} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} interval={3000} transitionTime={1000}>
              <div>
                  <Image src="/PlaceHolderProject1.png" width={800} height={450} alt="image2" className="flex-1"/>
                  <p className="legend">Image 1</p>
              </div>
              <div>
                  <Image src="/PlaceHolderProject2.png" width={800} height={450} alt="image2" className="flex-1"/>
                  <p className="legend">Image 2</p>
              </div>
              <div>
                  <Image src="/PlaceHolderProject3.png" width={800} height={450} alt="image3" className="flex-1"/>
                  <p className="legend">Image 3</p>
              </div>
              <div>
                  <Image src="/PlaceHolderProject4.png" width={800} height={450} alt="image4" className="flex-1"/>
                  <p className="legend">Image 4</p>
              </div>

              <div>
                  <Image src="/PlaceHolderProject5.png" width={800} height={450} alt="image5" className="flex-1"/>
                  <p className="legend">Image 5</p>
              </div>
            </Carousel>
          </div>
          </div>
        </div>

      </main>
  );
}

export function FooterComponent(){
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-sky-950 text-white p-6 md:py-6 md:px-20">

        <div id="Social" className="flex items-center justify-center mb-4 md:mb-0 md:justify-start">
          <Link href="https://www.linkedin.com/in/Alex-o-scott/" prefetch={false}>
            <Image src="https://www.linkedin.com/favicon.ico" width={40} height={40} alt="LinkedIn Logo" className="w-10 h-10 md:w-12 md:h-12"/>
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
          <p className="text-sm md:text-lg">Contact me at: Alex&apos;s Email</p>
          <p className="text-sm md:text-lg">© {new Date().getFullYear()} Alex Hart. All rights reserved.</p>
          <Link className="text-sm md:text-lg font-bold underline hover:text-yellow-400" href="/about" prefetch={false}>About the Dev</Link>
        </div>

      </footer>
  );
}
