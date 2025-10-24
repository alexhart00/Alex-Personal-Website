import { useState } from "react";
import Image from "next/image";

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