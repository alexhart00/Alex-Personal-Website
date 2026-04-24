export type EducationItem = {
    icon: string;
    alt: string;
    title: string;
    date: string;
    details: string[];
};

export const educationItems: EducationItem[] = [
    {
        icon: "/UNCOIcon.ico",
        alt: "UNC logo",
        title:
            "University of Northern Colorado — Bachelor’s Degree, Software Engineering",
        date: "Graduated",
        details: [
            "I earned my Bachelor’s Degree in Software Engineering from the University of Northern Colorado.",
            "Achievements include Dean’s List, 3.97 GPA, and membership in the National Society of Leadership and Success.",
        ],
    },
    {
        icon: "/MCCIcon.ico",
        alt: "Fort Morgan Community College logo",
        title:
            "Fort Morgan Community College — Associate Degree in Science",
        date: "Graduated",
        details: [
            "I earned my Associate Degree in Science from Fort Morgan Community College.",
            "Graduated with a 4.00 GPA and was named to the Dean’s List.",
        ],
    },
];