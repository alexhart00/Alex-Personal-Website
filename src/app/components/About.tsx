import DetailCard from "./DetailCard";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import SideList from "./SideList";

import Project1 from "../../../public/PlatteValleyApp.png";
import Project2 from "../../../public/EscapeTheTower.jpg";
import Project3 from "../../../public/SurveyoftheCurbanator.png";
import Project4 from "../../../public/ChurchBox.png";
import Project5 from "../../../public/FinishedChurchBox.png"
import { skillSections } from "../data/skills";
import { educationItems } from "../data/education";
import { experienceItems } from "../data/experience";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const sectionCard =
  "w-full max-w-[1000px] rounded-lg bg-sky-950 p-4 shadow-xl shadow-yellow-600 outline outline-6 outline-yellow-600";

export function AboutComponent() {
  return (
    <main className="relative z-10 flex flex-col items-center bg-zinc-900 px-4 pb-20">
      <section id="Profile" className="mt-12 flex w-full max-w-[1000px] flex-col gap-12">
        <div className={sectionCard}>
          <h1 className="text-3xl font-bold md:text-4xl">Profile</h1>
          <p className="mt-4 text-xl md:text-2xl">
            I&apos;m Alexander Hart, a Software Engineering graduate from UNCO
            with a passion for building applications and learning new
            technologies.
          </p>
          <p className="mt-4 text-xl md:text-2xl">
            Check out my Technical Skills, Work Experience, Education, and Projects below
          </p>
        </div>

        <div className={`${sectionCard} flex flex-col gap-4`}>
          <h1 className="text-3xl font-bold md:text-4xl">
            Technical Skills
          </h1>

          <SideList categories={skillSections} />

        </div>
      </section>

      <section id="Experience" className="mt-12 w-full max-w-[1000px]">
        <div className={`${sectionCard} flex flex-col gap-6`}>
          <h2 className="text-2xl font-bold md:text-3xl">Work Experience</h2>
          {experienceItems.map((item) => (
            <DetailCard key={item.title} {...item} />
          ))}

          <h2 className="text-2xl font-bold md:text-3xl">Education</h2>
          {educationItems.map((item) => (
            <DetailCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="Projects" className="mt-12 w-full max-w-[1000px]">
        <div className="mb-4">
          <h1 className="text-3xl font-bold sm:text-4xl">Projects</h1>
          <p className="text-xl sm:text-2xl">
            Alex&apos;s Software Projects:
          </p>
        </div>

        <div className={sectionCard}>
          <div className="rounded-lg bg-sky-900 p-4 text-white shadow-md shadow-black">
            <Carousel
              showArrows
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              autoPlay
              interval={10000}
              transitionTime={2000}
              renderThumbs={() => [
                Project1,
                Project2,
                Project3,
                Project4,
                Project5,
              ].map((project, index) => (
                <div
                  key={index}
                  className="w-20 h-12 overflow-hidden rounded-md bg-black flex items-center justify-center"
                >
                  <img
                    src={project.src}
                    alt={`thumb-${index}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <Image
                  src={Project1}
                  alt="Platte Valley Baptist Church mobile app"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1000px) 100vw, 1000px"
                />
                <p className="legend">Platte Valley Baptist Church Moblie App</p>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <Image
                  src={Project2}
                  alt="Escape the Tower Game"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1000px) 100vw, 1000px"
                />
                <p className="legend">Escape the Tower is a Unity game</p>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <Image
                  src={Project3}
                  alt="Survey of the Curbanator"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1000px) 100vw, 1000px"
                />
                <p className="legend">Survey of the Curbanator is a Unity game</p>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <Image
                  src={Project4}
                  alt="Platte Valley Baptist Church Box"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1000px) 100vw, 1000px"
                />
                <p className="legend">The Church box I made in Blender</p>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
                <Image
                  src={Project5}
                  alt="Platte Valley Baptist Church Box Finished"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1000px) 100vw, 1000px"
                />
                <p className="legend">The Church box | 3D printed and painted</p>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}