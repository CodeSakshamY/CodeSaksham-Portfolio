import React from "react";
import { projects, seo } from "@/data/data";

export const metadata = {
    title: `Projects | ${seo.title}`,
    description: "Explore a curated collection of web development projects built with Next.js, React, and modern web technologies.",
    keywords: "projects, web development, Next.js, React, JavaScript, portfolio"
};

function Projects() {
    const renderProjectCard = (item, index) => (
        <div
            key={index}
            className="group p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200"
        >
            <div className="flex flex-col gap-3 justify-between">
                {item.image && (
                    <img src={item.image} alt={item.title} className="w-full h-48 sm:h-64 object-cover rounded-xl border border-base-content/10" />
                )}
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-lg">
                        <a href={item.demo || item.link || "#"} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                            {item.title}
                            <svg focusable="false" preserveAspectRatio="xMidYMid meet" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true" className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45" xmlns="http://www.w3.org/2000/svg"><path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path></svg>
                        </a>
                    </h2>
                </div>
                <p className="text-base-content/80 text-sm sm:text-base">
                    {item.description}
                </p>
                <div className="flex items-center flex-wrap gap-2 mt-1">
                    {item.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-4 py-0.5"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {(item.github || item.demo) && (
                    <div className="flex gap-4 mt-2">
                        {item.github && (
                            <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline flex items-center gap-1 text-base-content/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                GitHub
                            </a>
                        )}
                        {item.demo && (
                            <a href={item.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline flex items-center gap-1 text-base-content/90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4 mx-auto">
            <main className="flex flex-col gap-2">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                    All Projects
                </h1>
                <div className="flex flex-col gap-4 mt-4">
                    {projects.pinProjects.map(renderProjectCard)}
                    {projects.otherProjects.map(renderProjectCard)}
                </div>
            </main>
        </div>
    );
}

export default Projects;
