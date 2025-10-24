import { Accordion, AccordionItem } from "@heroui/accordion";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function AboutComponent() {
  return (
    <main className="flex flex-col items-center bg-zinc-900 pb-20 outline-6 outline-yellow-600 drop-shadow-md relative z-10">

      <div id="Profile" className="mt-12 mb-12 items-center w-full max-w-[1000px]">
        <div className="p-6 text-center md:text-left">
          <p className="text-3xl md:text-4xl font-bold">Profile</p>
          <p className="text-xl md:text-3xl mt-2">
            I&apos;m Alexander Hart, a Software Engineering graduate from Colorado with a
            passion for building applications and learning new technologies.
            I&apos;ve contributed to multiple software projects and enjoy turning ideas
            into real, usable tools.
          </p>
        </div>

        <div className="text-xl md:text-2xl p-4 flex flex-col gap-4 outline-6 outline-yellow-600 rounded-lg bg-sky-950 w-full max-w-[1000px] shadow-yellow-600 shadow-xl">
          <ul className="text-xl md:text-2xl p-4 flex flex-col gap-8 rounded-lg bg-sky-900 w-full max-w-[1000px] shadow-black shadow-md">

            <li className="font-bold pt-4">Frontend Development</li>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
              <li>HTML</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Hydrogen</li>
              <li>Polaris</li>
            </ul>

            <li className="font-bold pt-8">Backend Development</li>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
              <li>Node.js</li>
              <li>Python</li>
              <li>C++</li>
              <li>C#</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
            </ul>

            <li className="font-bold pt-8">Version Control & Deployment</li>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
              <li>Git</li>
              <li>GitHub</li>
              <li>Vercel</li>
              <li>Shopify</li>
            </ul>

            <li className="font-bold pt-8">Development Tools</li>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
              <li>Visual Studio</li>
              <li>Visual Studio Code</li>
            </ul>

            <li className="font-bold pt-8">
              My Email: <a href="mailto:alexhart3000@gmail.com" className="underline hover:text-yellow-400">alexhart3000@gmail.com</a>
            </li>
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
              <Image src="https://www.linkedin.com/favicon.ico" width={40} height={40} alt="CompanyNameLogo" className="w-12 h-12 md:w-16 md:h-16" />
              <span>Company Name</span>
            </li>
            <li className="text-xl md:text-2xl">
              <span>Position: Market Man</span>
            </li>
            <li className="text-xl md:text-2xl">
              <span>Duration: September 2025 - Present</span>
            </li>
            <li className="text-xl md:text-2xl self-start">
              <Accordion>
                <AccordionItem
                  title={<span className="pl-4 font-bold flex items-center justify-between w-full">More Details</span>}
                  indicator={<></>}
                  key="1"
                  aria-label="Accordion 1"
                >
                  <p className="font-thin text-base md:text-lg">
                    Details about my working experience
                  </p>
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
            <Carousel
              showArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              autoPlay
              interval={3000}
              transitionTime={1000}
              renderThumbs={() => [
                <img key="1" src="/PlaceHolderProject1.png" alt="thumb1" />,
                <img key="2" src="/PlaceHolderProject2.png" alt="thumb2" />,
                <img key="3" src="/PlaceHolderProject3.png" alt="thumb3" />,
                <img key="4" src="/PlaceHolderProject4.png" alt="thumb4" />,
                <img key="5" src="/PlaceHolderProject5.png" alt="thumb5" />,
              ]}
            >
              <div>
                <Image src="/PlaceHolderProject1.png" width={800} height={450} alt="image1" className="flex-1" />
                <p className="legend">Image 1</p>
              </div>
              <div>
                <Image src="/PlaceHolderProject2.png" width={800} height={450} alt="image2" className="flex-1" />
                <p className="legend">Image 2</p>
              </div>
              <div>
                <Image src="/PlaceHolderProject3.png" width={800} height={450} alt="image3" className="flex-1" />
                <p className="legend">Image 3</p>
              </div>
              <div>
                <Image src="/PlaceHolderProject4.png" width={800} height={450} alt="image4" className="flex-1" />
                <p className="legend">Image 4</p>
              </div>
              <div>
                <Image src="/PlaceHolderProject5.png" width={800} height={450} alt="image5" className="flex-1" />
                <p className="legend">Image 5</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

    </main>
  );
}
