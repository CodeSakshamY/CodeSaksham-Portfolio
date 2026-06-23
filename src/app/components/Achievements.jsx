import { achievements } from "../../data/data";

export default function Achievements() {
    return (
        <>
            <div className="mt-10 scroll-mt-14" id="achievements">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Achievements</h2>
                <div className="mt-6">
                    <ol className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200 dark:before:bg-gray-500 mt-4 p-2">
                        {achievements.map((item, index) => (
                            <li
                                key={index}
                                className="relative -ms-1.5 flex items-start gap-4"
                            >
                                <span className="size-3 shrink-0 rounded-full bg-base-content mt-1.5"></span>

                                <div className="-mt-0.5">
                                    <h3 className="text-lg font-semibold text-base-content">
                                        {item.title}
                                    </h3>

                                    <p className="mt-0.5 text-sm text-base-content/80">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
