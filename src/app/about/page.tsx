'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import React from 'react';


export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center bg-sky-950 text-white p-4 md:p-6 drop-shadow-md">
      <p className="text-xl md:text-2xl font-bold">About the Dev</p>
      <Link className="text-xl md:text-2xl font-bold underline hover:text-yellow-400 transition-colors" href="/" prefetch={false}>Back to the Main Page</Link>
    </nav>
      
    <header className="flex flex-col items-center bg-zinc-900 p-12 outline-6 outline-yellow-600 drop-shadow-md bg-[url(/BackgroundTemp.jpg)] bg-opacity-10">
      <h1 className="text-5xl md:text-7xl font-bold p-4">Alexander Hart</h1>
      <Image className="outline-6 outline-yellow-600 rounded-lg" src={`/AlexProfilePic.jpg`} width={400} height={600} alt="Profile Picture"/>
    </header>

    <main className="flex flex-col items-center bg-zinc-900 pb-20 outline-6 outline-yellow-600 drop-shadow-md">
      <div id="Profile" className="mt-12 mb-12 p-6 max-w-4xl w-full">
        <div className="mb-8">
          <p className="text-4xl font-bold">Profile</p>
          <p className="text-2xl mt-4"> I&apos;m Alexander Hart, a Software Engineering graduate from Colorado with a passion for building applications and learning new technologies. I&apos;ve contributed to multiple software projects and enjoy turning ideas into real, usable tools.</p>
        </div>

        <ul className="text-2xl p-4 flex flex-col gap-8 outline-6 outline-yellow-600 rounded-lg bg-sky-950">
          <li>My talents include:</li>

          <li className="font-bold pt-8">Frontend Development</li>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xl">
            <li>HTML</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Hydrogen</li>
            <li>Polaris</li>
          </ul>

          <li className="font-bold pt-8">Backend Development</li>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xl">
            <li>Node.js</li>
            <li>Python</li>
            <li>C++</li>
            <li>C#</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>

          <li className="font-bold pt-8">Version Control & Deployment</li>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xl">
            <li>Git</li>
            <li>GitHub</li>
            <li>Vercel</li>
            <li>Shopify</li>
          </ul>

          <li className="font-bold pt-8">Development Tools</li>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xl">
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
          </ul>

          <li className="font-bold pt-8">My Email: alexhart3000@gmail.com</li>
        </ul>
      </div>
    </main>
      <footer className="flex justify-between items-center bg-sky-950 text-white p-4">
        <Link className="text-xl md:text-2xl font-bold underline hover:text-yellow-400 transition-colors" href="/" prefetch={false}>Back to the Main Page</Link>
      </footer>
    </div>
  );
}

