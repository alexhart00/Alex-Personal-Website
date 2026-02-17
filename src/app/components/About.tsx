import { Accordion, AccordionItem } from "@heroui/accordion";
import { Carousel } from "react-responsive-carousel";
import Project1 from "../../../public/PlatteValleyApp.png";
import Project2 from "../../../public/EscapeTheTower.jpg";
import Project3 from "../../../public/SurveyoftheCurbanator.png"
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function AboutComponent() {
  return (
    <main className="flex flex-col items-center bg-zinc-900 pb-20 outline-6 outline-yellow-600 drop-shadow-md relative z-10">

      <div id="Profile" className="mt-12 mb-12 items-center w-full max-w-[1000px]">
        <div className="text-xl md:text-2xl p-4 mt-4 mb-16 flex flex-col gap-4 outline-6 outline-yellow-600 rounded-lg bg-sky-950 w-full max-w-[1000px] shadow-yellow-600 shadow-xl">
          <p className="text-3xl md:text-4xl font-bold">Profile</p>
          <p className="text-xl md:text-3xl mt-2">
            I&apos;m Alexander Hart, a Software Engineering graduate from Colorado with a
            passion for building applications and learning new technologies.
            I&apos;ve contributed to multiple software projects and enjoy turning ideas
            into real, usable tools.
          </p>
        </div>

        <div className="text-xl md:text-2xl p-4 flex flex-col gap-4 outline-6 outline-yellow-600 rounded-lg bg-sky-950 w-full max-w-[1000px] shadow-yellow-600 shadow-xl">
          <p className="font-bold">Frontend Development</p>
          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="pl-4">HTML</li>
            <li className="pl-4">CSS</li>
            <li className="pl-4">Tailwind CSS</li>
            <li className="pl-4">JavaScript</li>
            <li className="pl-4">TypeScript</li>
            <li className="pl-4">React</li>
            <li className="pl-4">Next.js</li>
            <li className="pl-4">Redux / Context API</li>
            <li className="pl-4">React Native</li>
            <li className="pl-4">Hydrogen (Shopify)</li>
            <li className="pl-4">Polaris (Shopify UI)</li>
          </ul>

          <p className="font-bold">Backend Development</p>
          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="pl-4">Node.js</li>
            <li className="pl-4">Express.js</li>
            <li className="pl-4">REST APIs</li>
            <li className="pl-4">GraphQL</li>
            <li className="pl-4">MongoDB</li>
            <li className="pl-4">Mongoose</li>
            <li className="pl-4">Python</li>
            <li className="pl-4">C++</li>
            <li className="pl-4">C#</li>
            <li className="pl-4">Authentication (JWT, OAuth)</li>
          </ul>

          <p className="font-bold">Version Control & Deployment</p>
          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="pl-4">Git</li>
            <li className="pl-4">GitHub</li>
            <li className="pl-4">GitHub Actions (CI/CD)</li>
            <li className="pl-4">Vercel</li>
            <li className="pl-4">Shopify Store Deployment</li>
          </ul>

          <p className="font-bold">Databases & Cloud</p>
          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="pl-4">MongoDB Atlas</li>
            <li className="pl-4">Firebase</li>
            <li className="pl-4">Cloud Functions</li>
            <li className="pl-4">Cloud Storage</li>
            <li className="pl-4">Basic AWS Services</li>
          </ul>

          <p className="font-bold">Development Tools</p>
          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="pl-4">Visual Studio</li>
            <li className="pl-4">Visual Studio Code</li>
            <li className="pl-4">Chrome DevTools</li>
            <li className="pl-4">Github Copilot</li>
            <li className="pl-4">npm / Yarn</li>
          </ul>


          <p className="font-bold">Contact Information</p>
          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="pl-4">
              My Email: <a href="mailto:alexhart3000@gmail.com" className="underline hover:text-yellow-400">alexhart3000@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div id="Experience" className="mt-6 mb-6 w-full max-w-[1000px]">
        <div className="outline-6 outline-yellow-600 rounded-lg p-6 w-full max-w-[1000px] bg-sky-950 font-semibold shadow-xl shadow-yellow-600">
          <p className="text-3xl md:text-4xl font-bold">Experience</p>
          <p className="text-xl md:text-3xl mt-2">See where I have worked and studied!</p>

          {/* Work Experience */}
          <h2 className="text-2xl md:text-3xl mt-6 mb-2 font-bold">Work Experience</h2>
          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="text-xl md:text-2xl flex items-center gap-3">
              <Image src="/FreeLanceIcon.ico" width={40} height={40} alt="CompanyNameLogo" className="w-12 h-12 md:w-16 md:h-16" />
              <span>Remote Work — Freelance Programmer</span><span>Jan 2024 - Current</span>
            </li>
            <li className="text-xl md:text-2xl self-start">
              <Accordion>
                <AccordionItem
                  title={<span className="pl-4 font-bold flex items-center justify-between w-full">More Details</span>}
                  indicator={<></>}
                  key="1"
                  aria-label="Accordion 1"
                >
                  <p className="font-thin text-base md:text-lg mb-4">
                    As a freelance programmer, I collaborate with clients to design and implement custom software solutions tailored to their specific needs. My work covers both front-end and back-end development, where I leverage <span className="font-semibold">React, JavaScript, and Node.js</span> to build responsive, user-friendly applications. I integrate databases efficiently using <span className="font-semibold">Firebase</span>, and create robust APIs to ensure smooth communication between systems.
                  </p>

                  <p className="font-thin text-base md:text-lg mb-4">
                    Beyond coding, I focus heavily on <span className="font-semibold">debugging</span> and <span className="font-semibold">problem-solving</span>, ensuring that applications are optimized, reliable, and scalable. I follow <span className="font-semibold">agile development practices</span> to stay adaptable and deliver projects on time, while version control with <span className="font-semibold">Git</span> helps me manage and track progress effectively.
                  </p>

                  <p className="font-thin text-base md:text-lg">
                    Working remotely has sharpened my skills in <span className="font-semibold">communication, time management, and collaboration across distributed teams</span>. This independence has also taught me to balance client expectations with technical requirements, consistently producing solutions that are both technically sound and aligned with business goals.
                  </p>

                </AccordionItem>
              </Accordion>
            </li>
          </ul>

          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="text-xl md:text-2xl flex items-center gap-3">
              <Image src="/PlatteValleyChurchIcon.ico" width={40} height={40} alt="CompanyNameLogo" className="w-12 h-12 md:w-16 md:h-16" />
              <span>Remote Work — Mobile Application Developer</span><span>Oct 2025 - Current</span>
            </li>
            <li className="text-xl md:text-2xl self-start">
              <Accordion>
                <AccordionItem
                  title={<span className="pl-4 font-bold flex items-center justify-between w-full">More Details</span>}
                  indicator={<></>}
                  key="2"
                  aria-label="Accordion 2"
                >
                  <p className="font-thin text-base md:text-lg mb-4">
                    In my role as a mobile application developer, I specialize in building cross-platform mobile apps using <span className="font-semibold">React Native</span>, enabling seamless performance on both iOS and Android. My work focuses on delivering intuitive, user-friendly interfaces backed by scalable and efficient application logic. I collaborate remotely with clients to translate requirements into functional designs, implementing features that enhance usability and align with modern mobile standards.
                  </p>

                  <p className="font-thin text-base md:text-lg mb-4">
                    Beyond development, I integrate APIs, manage application state, and ensure data is handled securely and efficiently. I regularly engage in debugging and performance optimization, pushing apps toward smooth, responsive interactions. Leveraging <span className="font-semibold">Firebase Features</span> such as storage, realtime database, authentication, and cloud functions for the database.<span className="font-semibold">Git</span> for version control and following <span className="font-semibold">agile methodologies</span>, I maintain clear communication and adaptability throughout the development lifecycle.
                  </p>

                  <p className="font-thin text-base md:text-lg">
                    This role has strengthened my expertise in <span className="font-semibold">mobile UX design, top-level decision making, and remote collaboration</span>, while allowing me to deliver applications that not only meet client needs but also provide a polished and engaging experience for end users.
                  </p>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>

          {/* Education */}
          <h2 className="text-2xl md:text-3xl mt-6 mb-2 font-bold">Education</h2>
          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="text-xl md:text-2xl flex items-center gap-3">
              <Image src="/UNCOIcon.ico" width={40} height={40} alt="UNCLogo" className="w-12 h-12 md:w-16 md:h-16" />
              <span>University of Northern Colorado — Bachelor’s Degree, Software Engineering</span>
              <span>Graduated</span>
            </li>
            <li className="text-xl md:text-2xl self-start">
              <Accordion>
                <AccordionItem
                  title={<span className="pl-4 font-bold flex items-center justify-between w-full">More Details</span>}
                  indicator={<></>}
                  key="3"
                  aria-label="Accordion 3"
                >
                  <p className="font-thin text-base md:text-lg mb-4">
                    I earned my <span className="font-semibold">Bachelor’s Degree in Software Engineering</span> from the <span className="font-semibold">University of Northern Colorado</span>. During my studies, I focused on building a strong foundation in programming, software design, and systems development while consistently maintaining academic excellence.
                  </p>

                  <p className="font-thin text-base md:text-lg">
                    Achievements include being named to the <span className="font-semibold">Dean’s List</span>, graduating with a <span className="font-semibold">3.97 GPA</span>, and serving as a member of the <span className="font-semibold">National Society of Leadership and Success (NSLS)</span>.
                  </p>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>

          <ul className="p-4 gap-6 md:gap-8 rounded-lg bg-sky-900 text-white shadow-black shadow-md m-4">
            <li className="text-xl md:text-2xl flex items-center gap-3">
              <Image src="/MCCIcon.ico" width={40} height={40} alt="FMCCLogo" className="w-12 h-12 md:w-16 md:h-16" />
              <span>Fort Morgan Community College — Associate Degree in Science</span>
              <span>Graduated</span>
            </li>
            <li className="text-xl md:text-2xl self-start">
              <Accordion>
                <AccordionItem
                  title={<span className="pl-4 font-bold flex items-center justify-between w-full">More Details</span>}
                  indicator={<></>}
                  key="4"
                  aria-label="Accordion 4"
                >
                  <p className="font-thin text-base md:text-lg mb-4">
                    I earned my <span className="font-semibold">Associate Degree in Science</span> from <span className="font-semibold">Fort Morgan Community College</span>. This program provided a strong academic foundation in mathematics and science, supporting my transition into advanced studies in software engineering.
                  </p>

                  <p className="font-thin text-base md:text-lg">
                    I graduated with high academic achievement, being named to the <span className="font-semibold">Dean’s List</span> and completing the program with a <span className="font-semibold">4.00 GPA</span>.
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
          <p className="text-xl sm:text-2xl">Alex&apos;s Software Projects:</p>
        </div>
        <div className="flex flex-col items-center outline-6 outline-yellow-600 rounded-lg p-4 w-full max-w-full sm:max-w-[1000px] bg-sky-950 font-bold shadow-yellow-600 shadow-xl">
          <div className="flex flex-col items-center rounded-lg p-4 w-full max-w-full sm:max-w-[1000px] font-bold bg-sky-900 text-white shadow-black shadow-md">
            <Carousel
              showArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              autoPlay
              interval={10000}
              transitionTime={2000}
              renderThumbs={() => [
                <img key="1" src={Project1.src} alt="thumb1" />,
                <img key="2" src={Project2.src} alt="thumb2" />,
                <img key="3" src={Project3.src} alt="thumb3" />,
              ]}
            >
              <div>
                <Image src={Project1} width={854} height={480} alt="image1" className="flex-1" />
                <p className="legend">Platte Valley Baptist Church Moblie App</p>
              </div>
              <div>
                <Image src={Project2} width={854} height={480} alt="image2" className="flex-1" />
              </div>
              <div>
                <Image src={Project3} width={854} height={480} alt="image3" className="flex-1" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>

    </main>
  );
}
