"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = {
    title: string;
    list: string[];
};

type SideListProps = {
    categories: Category[];
};

export default function SideList({ categories }: SideListProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectedCategory = categories[selectedIndex];

    return (
        <div className="flex gap-6 rounded-lg bg-sky-950 p-4 text-white">
            <div className="flex min-w-48 flex-col gap-3">
                {categories.map((category, index) => (
                    <button
                        key={category.title}
                        onClick={() => setSelectedIndex(index)}
                        className={`rounded-lg px-4 py-3 font-bold transition ${selectedIndex === index
                            ? "bg-yellow-600 text-black"
                            : "bg-sky-800 hover:bg-sky-700"
                            }`}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            <div className="flex-1 rounded-lg bg-sky-900 p-4 shadow-md shadow-black">
                <h2 className="mb-4 text-2xl font-bold">
                    {selectedCategory.title}
                </h2>

                <AnimatePresence mode="wait">
                    <motion.ul
                        key={selectedCategory.title}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex flex-col gap-2 overflow-hidden"
                    >
                        {selectedCategory.list.map((item) => (
                            <motion.li
                                key={item}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className="rounded bg-sky-800 px-4 py-2"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </div>
        </div>
    );
}