import Marquee from "./Marquee";
import { skills, hardwareSkills } from "@/data/data";

export default function TechLists() {
    return (
        <div className="flex flex-col gap-8 mt-10">
            <div>
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Software Stack</h2>
                <Marquee duration="15s">
                    <div className="flex gap-8 mt-4">
                        {[...skills, ...skills].map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2 w-[80px] p-2"
                            >
                                <div className="border-2 p-2 border-base-content/20 shadow-md rounded-sm dark:bg-base-content flex items-center justify-center w-14 h-14 bg-white">
                                    <img
                                        src={`${skill.icon}`}
                                        className="w-10 h-10 object-contain"
                                        alt={`${skill.alt}`}
                                    />
                                </div>
                                <span className="text-sm text-center">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            <div>
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Hardware Stack</h2>
                <Marquee duration="15s" reverse>
                    <div className="flex gap-8 mt-4">
                        {[...hardwareSkills, ...hardwareSkills].map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-2 w-[80px] p-2"
                            >
                                <div className="border-2 p-2 border-base-content/20 shadow-md rounded-sm dark:bg-base-content flex items-center justify-center w-14 h-14 bg-white">
                                    <img
                                        src={`${skill.icon}`}
                                        className="w-10 h-10 object-contain"
                                        alt={`${skill.alt}`}
                                    />
                                </div>
                                <span className="text-sm text-center leading-tight">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}
