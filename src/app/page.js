import ProjectsList from "./components/ProjectsList";
import TechLists from "./components/TechLists";
import About from "./components/About";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
export default function Home() {
    return (
        <>
            <div>
                <main className="mt-5 p-4">
                    <Profile />
                    <About />
                    <ProjectsList />
                    <TechLists />
                    <Experience />
                    <Achievements />
                    <Certificates />
                </main>
            </div>
        </>
    );
}
