import Image from "next/image";
import Link from "next/link";

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
        </div>

      </footer>
  );
}