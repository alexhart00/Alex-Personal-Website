import { useState } from "react";

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