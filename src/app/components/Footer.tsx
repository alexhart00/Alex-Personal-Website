import Image from "next/image";
import Link from "next/link";

export function FooterComponent() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center bg-sky-950 text-white p-6 md:py-6 md:px-20">

      <div id="Social" className="flex items-center justify-center mb-4 md:mb-0 md:justify-start">
        <Link href="https://www.linkedin.com/in/Alex-o-scott/" prefetch={false}>
          <Image src="https://www.linkedin.com/favicon.ico" width={100} height={100} alt="LinkedIn Logo" className="w-10 h-10 md:w-12 md:h-12" />
        </Link>
      </div>

      <div className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
        <p className="p-2 font-bold items-baseline">Contact Information</p>
        <p className="">
          My Email: <a href="mailto:alexhart3000@gmail.com" className="underline hover:text-yellow-400">alexhart3000@gmail.com</a>
        </p>
        <p className="text-sm md:text-lg">© {new Date().getFullYear()} Alex Hart. All rights reserved.</p>
      </div>

    </footer>
  );
}