export const about = {
    name: "Saksham Yadav",
    role: "Student Researcher, Builder, and Founder",
    about: "I'm a student from City Montessori School who enjoys building things across AI, robotics, cybersecurity, research, and technology. My work ranges from healthcare AI and behavioral analysis research to robotics, climate technology, and software products. I've competed in national-level competitions, mentored research teams, and built communities that help students learn, collaborate, and create meaningful projects.",
    email: "globalsaksham@gmail.com",
};

export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "Portfolio of Saksham Yadav, a student researcher, builder, and founder specializing in AI, robotics, cybersecurity, and software products.",
    keywords: "Saksham Yadav, CodeSaksham, student researcher, web developer, Next.js, AI, robotics, cybersecurity, portfolio",
}

export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>", // Placeholder
}

export const skills = [
    { name: "Python", alt: "Python logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "C++", alt: "C++ logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "JavaScript", alt: "JavaScript logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", alt: "TypeScript logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "React", alt: "React logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", alt: "Next.js logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", alt: "Node.js logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Tailwind CSS", alt: "Tailwind CSS logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "FastAPI", alt: "FastAPI logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "Docker", alt: "Docker logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Three.js", alt: "Three.js logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
    { name: "WebGL", alt: "WebGL logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg" },
    { name: "Blender", alt: "Blender logo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
];

export const hardwareSkills = [
    {
        category: "Hardware Design Tools",
        items: ["EasyEDA", "KiCad", "TinkerCad"]
    },
    {
        category: "Microcontrollers",
        items: ["Arduino Uno", "Arduino Nano", "ESP32", "ESP8266"]
    },
    {
        category: "PCB & Electronics",
        items: ["PCB Design", "Schematic Design", "Circuit Design", "Analog Electronics", "Digital Electronics", "Hardware Debugging", "Prototype Development", "PCB Fabrication Preparation", "PCB Assembly & Soldering"]
    },
    {
        category: "Communication Protocols",
        items: ["UART", "I2C", "SPI", "RF Communication", "Bluetooth", "WiFi"]
    },
    {
        category: "Sensors",
        items: ["MQ Gas Sensors", "DHT11", "DHT22", "Ultrasonic Sensors", "IR Sensors", "Temperature Sensors", "Body Temperature Sensors", "GSR Sensors", "Accelerometers", "Heart Rate Sensors", "Microphones", "Ambient Light Sensors"]
    },
    {
        category: "Actuators",
        items: ["Servo Motors", "DC Motors", "Stepper Motors", "Relays", "Quarter-Turn Valve Actuators"]
    },
    {
        category: "Power Electronics",
        items: ["Voltage Regulators", "MOSFET Circuits", "Buck Converters", "Battery Systems", "Power Supply Design"]
    },
    {
        category: "Fabrication & Manufacturing",
        items: ["3D Printing", "3D Printing Workflows", "Cura", "Blender", "Laser Cutting", "CNC Fabrication", "Mechanical Assembly"]
    },
    {
        category: "Robotics",
        items: ["Line Following Robots", "Autonomous Robots", "Obstacle Avoidance Robots", "Object Detection Robots", "Robo Soccer", "Robo War"]
    }
];

export const socials = {
    github: "https://github.com/CodeSakshamY",
    twitter: "https://x.com/CodeSakshamY",
    instagram: "https://www.instagram.com/saksham_30_09",
    linkedin: "https://www.linkedin.com/in/saksham-yadav-090627302/",
};

export const projects = {
    pinProjects: [
        {
            title: "BHACK",
            description: "A 3D web experience built to explore real-time graphics, animation, and immersive web design using a custom Blender-created model. The project focuses on bringing interactive 3D content to the browser through smooth animations, responsive controls, optimized rendering, and modern web technologies.",
            tags: ["Three.js", "WebGL", "Blender", "3D Graphics", "Interactive Experiences"],
            github: "https://github.com/CodeSakshamY/BHACK3D/tree/main",
            demo: "https://bhack-3-d-wl7u.vercel.app/",
        },
        {
            title: "PSYCON",
            description: "A research project that studies physiological and behavioral signals to identify unusual cognitive and behavioral patterns. The goal is to understand how measurable human signals can provide insights into mental and behavioral states.",
            tags: ["Research", "Behavioral Analysis", "AI"],
            link: "#",
        },
        {
            title: "AlzGuardian",
            description: "A machine learning model that predicts the likelihood of a person being in different stages of Alzheimer's disease using non-invasive biomarkers. Achieved 94% accuracy and 98% recall.",
            tags: ["Machine Learning", "Healthcare AI"],
            link: "#",
        },
        {
            title: "RCO2",
            description: "A robotics and climate technology project focused on monitoring carbon dioxide levels and using environmental data to support better environmental decisions. Developed for STEAM Innovation League and WRO competitions.",
            tags: ["Robotics", "Climate Tech", "Hardware"],
            link: "#",
        },
    ],
    otherProjects: [
        {
            title: "AvailX",
            description: "A service marketplace platform that connects customers with service providers through separate user and provider applications.",
            tags: ["Full Stack", "Marketplace"],
            link: "#",
        },
        {
            title: "StreamSync",
            description: "A watch-party platform that lets people watch YouTube videos together in synchronized rooms with real-time chat and shared controls.",
            tags: ["WebSockets", "React"],
            link: "#",
        },
        {
            title: "EasyEDA Hackatime Tracker",
            description: "A tool that tracks time spent on PCB design work, making it easier to monitor and analyze hardware development effort.",
            tags: ["Tools", "Analytics"],
            link: "#",
        },
        {
            title: "HackSpace CMS",
            description: "A student-led technology community focused on AI, robotics, cybersecurity, research, innovation, and hands-on learning.",
            tags: ["Community", "Education"],
            link: "#",
        },
    ],
};

export const experience = [
    {
        title: "President & Founder, HackSpace CMS",
        description: "Started and lead a student community focused on technology, research, innovation, and hands-on learning through projects, workshops, mentorship, and collaboration.",
        date: "Present",
        outcomes: []
    },
    {
        title: "Founder & Board Member, Incubation and Innovation Cell",
        description: "Helped build a platform where students can pursue research and innovation projects with mentorship and guidance.",
        date: "Present",
        outcomes: [
            "1 Team selected for IRIS",
            "2 Teams selected for INSEF",
            "1 Student selected for RSI",
            "2 Teams selected for Anveshna by Prayoga",
            "1 Student selected for LGP"
        ]
    },
    {
        title: "Ambassador, Project GRID",
        description: "Working with IIT Delhi through Project GRID to support student innovation, research, and technology initiatives.",
        date: "Present",
        outcomes: []
    },
    {
        title: "Research Mentor",
        description: "Mentoring a student team preparing for IRIS, helping with research design, experimentation, documentation, and presentations.",
        date: "Present",
        outcomes: []
    },
];

export const achievements = [
    {
        title: "STEAM Innovation League National Winner (AIR 1)",
        description: "Secured first place nationwide in the STEAM Innovation League for an innovative project addressing a real-world challenge."
    },
    {
        title: "World Robot Olympiad India Finalist (AIR 14)",
        description: "Placed 14th across India in the highly competitive World Robot Olympiad, showcasing advanced robotics design and programming."
    },
    {
        title: "INSEF Bronze Medalist",
        description: "Awarded a bronze medal at the Indian National Science and Engineering Fair for scientific research and innovation."
    },
    {
        title: "Top 25 Internationally in the International Xavier Cyber Security Challenge",
        description: "Ranked among the top 25 participants globally in this rigorous cybersecurity and ethical hacking competition."
    }
];

export const certificates = [
    {
        title: "SIL AIR 1",
        issuer: "StemRobo",
        date: "Aug 2025",
        url: "#",
        thumbnail: "/SIL.JPG"
    },
    {
        title: "INSEF BRONZE",
        issuer: "Science Society of India",
        date: "Feb 2026",
        url: "#",
        thumbnail: "/INSEF.PNG"
    }
];

// Intentionally left empty as no blogs were provided.
export const blogs = [];
