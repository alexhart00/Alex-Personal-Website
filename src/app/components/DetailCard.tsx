import { Accordion, AccordionItem } from "@heroui/accordion";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const innerCard = "rounded-lg bg-sky-900 p-4 text-white shadow-md shadow-black";

const detailsText = "mb-4 text-base font-thin md:text-lg";

export default function DetailCard({ icon, alt, title,
    date,
    details,
}: {
    icon: string;
    alt: string;
    title: string;
    date: string;
    details: React.ReactNode[];
}) {
    return (
        <div className={innerCard}>
            <div className="flex flex-col gap-3 text-xl md:text-2xl sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <Image
                        src={icon}
                        width={64}
                        height={64}
                        alt={alt}
                        className="h-12 w-12 md:h-16 md:w-16"
                    />
                    <span>{title}</span>
                </div>

                <span className="text-base md:text-xl">{date}</span>
            </div>

            <Accordion className="mt-4">
                <AccordionItem
                    key={title}
                    aria-label={`${title} details`}
                    indicator={<></>}
                    className="group"
                    title={
                        <span className="flex items-center gap-2 font-bold text-yellow-400">
                            <span className="transition-transform duration-200 group-data-[open=true]:rotate-180">
                                ▲
                            </span>
                            More Details
                            <span className="transition-transform duration-200 group-data-[open=true]:rotate-180">
                                ▲
                            </span>
                        </span>
                    }
                >
                    <div>
                        {details.map((detail, index) => (
                            <p
                                key={index}
                                className={
                                    index === details.length - 1
                                        ? "text-base font-thin md:text-lg"
                                        : detailsText
                                }
                            >
                                {detail}
                            </p>
                        ))}
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
    );
}