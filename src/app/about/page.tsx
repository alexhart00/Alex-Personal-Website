'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import React from 'react';


export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center bg-sky-950 text-white p-6 drop-shadow-md">
        <p className="text-2xl font-bold ">About the Dev</p>
        <Link className="text-2xl font-bold" href="/" prefetch={false}>back to the Main Page</Link>

      </nav>
      
      <header className="flex flex-col  bg-zinc-900 p-12 outline-6 outline-yellow-600 drop-shadow-md bg-[url(/BackgroundTemp.jpg)] bg-opacity-10">
        <div className="flex flex-col items-center">
          <h1 className="text-7xl font-bold p-4">Alexander Hart</h1>
          <Image className ="outline-6  outline-yellow-600" src={`/AlexProfilePic.jpg`} width={400} height={600} alt="Profile Picture" />
          {/* Test Code <p>You clicked {count} times</p>*/}
        </div>
      </header>

      <main className="flex flex-col items-center bg-zinc-900 pb-20 outline-6 outline-yellow-600 drop-shadow-md">
        <div id="Profile" className="mt-12 mb-12 items-center ">
          <div className="justify-left p-6">
            <p className="text-4xl font-bold">Profile</p>
            <p className="text-3xl"></p>
          </div>
          <ul className="text-3xl  p-4 flex flex-col items-left  gap-4 outline-6 outline-yellow-600 rounded-lg min-w-[1000px] max-w-[1000px] bg-sky-950" >
              <li>I'm Alexander Hart, a Software Engineering graduate from Colorado with a passion for building applications and learning new technologies. I've contributed to multiple software projects and enjoy turning ideas into real, usable tools.</li>
              <li className=" pt-8">My talents include:</li>
              <li className="font-bold pt-8">Frontend Development</li>
                <ul className="grid grid-cols-3 gap-4 text-1xl">
                  <li className=" ">HTML</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Hydrogen</li>
                  <li>Polaris</li>
                </ul>
                <li className="text-1xl font-bold pt-8">Frontend Development</li>
                <ul className="grid grid-cols-3 gap-4">
                  <li className="font-bold">Backend</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>C++</li>
                  <li>C#</li>
                  <li>MongoDB</li>
                  <li>GraphQL</li>
                </ul>
                <li className=" font-bold pt-8">Version Control & Deploymen</li>
                <ul className="grid grid-cols-3 gap-4">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Vercel</li>
                  <li>Shopify</li>
                </ul>
                <li className=" font-bold pt-8">Development Tools</li>
                <ul className="grid grid-cols-3 gap-4 ">
                  <li>Visual Studio</li>
                  <li>Visual Studio Code</li>
                </ul>
              <li className="font-bold pt-16">My Email: alexhart3000@gmail.com</li>
            </ul>
        </div>
      </main>
      <footer className="flex justify-between items-center bg-sky-950 text-white pb-6">

      </footer>
    </div>
  );
}

