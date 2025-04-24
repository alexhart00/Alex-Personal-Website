import Image from "next/image";

export default function profile() {
  return (
    <div>
      <h1>About Us</h1>
        <Image src="/ProfilePic.jpg" alt="Profile Picture" width={400} height={200}/>
      <p>This is the about page.</p>
    </div>
  );
}
