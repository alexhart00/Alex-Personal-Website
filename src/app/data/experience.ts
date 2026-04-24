export type ExperienceItem = {
    icon: string;
    alt: string;
    title: string;
    date: string;
    details: string[];
};

export const experienceItems: ExperienceItem[] = [
    {
        icon: "/FreeLanceIcon.ico",
        alt: "Freelance logo",
        title: "Remote Work — Freelance Programmer",
        date: "Jan 2024 - Current",
        details: [
            "As a freelance programmer, I design and implement custom software solutions for clients, working across both front-end and back-end systems using React, JavaScript, and Node.js.",
            "I focus heavily on debugging and problem-solving to ensure applications are optimized, reliable, and scalable.",
            "Working remotely has strengthened my communication, time management, and collaboration skills.",
        ],
    },
    {
        icon: "/PlatteValleyChurchIcon.ico",
        alt: "Platte Valley Church logo",
        title: "Remote Work — Mobile Application Developer",
        date: "Oct 2025 - Current",
        details: [
            "I build cross-platform mobile applications using React Native, delivering smooth performance on iOS and Android.",
            "I integrate APIs, manage state, and use Firebase features like storage, realtime database, authentication, and cloud functions.",
            "This role has strengthened my mobile UX design, decision-making, and remote collaboration skills.",
        ],
    },
];