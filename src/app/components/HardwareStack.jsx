import { hardwareSkills } from "@/data/data";

export default function HardwareStack() {
    return (
        <div className="mt-14 scroll-mt-14" id="hardware-stack">
            <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                Hardware Stack
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hardwareSkills.map((categoryGroup, index) => (
                    <div 
                        key={index} 
                        className="p-4 border-2 border-base-content/20 rounded-2xl bg-base-200/30 hover:border-base-content/80 transition-colors duration-200 flex flex-col gap-3"
                    >
                        <h3 className="font-semibold text-base">
                            {categoryGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {categoryGroup.items.map((item, idx) => (
                                <span 
                                    key={idx} 
                                    className="text-xs font-medium px-3 py-1 bg-base-content/10 border border-base-content/20 rounded-md text-base-content/90"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
