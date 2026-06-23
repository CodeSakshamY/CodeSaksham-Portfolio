import { certificates } from "../../data/data";

export default function Certificates() {
    if (!certificates || certificates.length === 0) return null;

    return (
        <>
            <div className="mt-10 scroll-mt-14" id="certificates">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Certificates & Credentials</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certificates.map((cert, index) => (
                        <div key={index} className="flex flex-col border-2 border-base-content/20 rounded-xl overflow-hidden hover:border-base-content/80 transition-colors duration-200">
                            {cert.thumbnail && (
                                <img src={cert.thumbnail} alt={cert.title} className="w-full h-32 object-cover border-b border-base-content/10 bg-base-200" />
                            )}
                            <div className="p-3 flex flex-col gap-1">
                                <h3 className="font-semibold text-base leading-tight text-base-content">{cert.title}</h3>
                                <p className="text-sm text-base-content/70">{cert.issuer}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs font-medium text-base-content/50">{cert.date}</span>
                                    {cert.url && (
                                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium underline hover:text-base-content/80">
                                            View Credential
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
