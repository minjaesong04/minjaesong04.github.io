import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hi, I'm Minjae Song — a Computer Science student at the University of Toronto Mississauga with a minor in Mathematics. I enjoy building systems-level and full-stack applications, from PLC-based automation systems to blockchain tokens and Java desktop tools. I'm actively looking for opportunities where I can apply my skills in C/C++, Java, and web development to solve real-world problems and keep growing as an engineer.`;

export const ABOUT_TEXT = `I'm a dedicated and curious developer with experience spanning low-level control systems, backend logic, and user-facing interfaces. As a Software Development Intern at Hanyang Developments Inc., I programmed Siemens PLCs and HMI displays to automate industrial processes and improve system responsiveness. I also enjoy working on personal projects such as a blockchain token on the Internet Computer, an intelligent activity planner in Java, and an Arduino-based home alarm system.

At UTM, I'm pursuing an Honours Bachelor of Science in Computer Science with a minor in Mathematics (2022–2027). I’ve completed courses in software design, algorithms and data structures, systems programming, computer organization, calculus, and linear algebra. Outside of coursework, I like experimenting with new tools, refining my portfolio, and learning more about cloud, data, and full-stack development.`;

export const EXPERIENCES = [
  {
    year: "2025",
    role: "Software Development Intern",
    company: "Hanyang Developments Inc.",
    description: `Programmed relay control systems using Siemens PLCs and HMI displays to automate industrial processes, helping reduce system response time. Wrote and tested logic in Structured Text and Ladder Logic to optimize safety interlocks and ensure reliable device coordination. Collaborated with senior engineers to debug PLC logic and refine process flows for more efficient and responsive systems.`,
    technologies: ["Siemens PLC", "Ladder Logic", "Structured Text", "HMI", "Automation"],
  },
  {
    year: "2020 - 2021",
    role: "Cashier & Kitchen Staff",
    company: "CoCo Fresh Tea & Juice",
    description: `Supervised shift operations by coordinating team roles and managing inventory restocks while maintaining low customer wait times. Prepared ingredients, upheld cleanliness standards, and supported teammates during peak hours to keep service smooth and consistent.`,
    technologies: ["Customer Service", "Teamwork", "Time Management"],
  },
];

export const PROJECTS = [
  {
    title: "Blockchain Token",
    image: project1,
    description:
      "Built and deployed a custom token canister on the Internet Computer blockchain, enabling token creation, transfer, and balance tracking. Developed CLI scripts to automate wallet initialization, token minting, and canister deployment to local and live IC networks, with principal-based identity authentication for secure access.",
    technologies: ["Motoko", "TypeScript", "DFX SDK", "Internet Computer"],
  },
  {
    title: "Intelligent Activity Planner",
    image: project2,
    description:
      "Led a team of four to build a Java-based activity planner that pulls data from APIs to recommend activities based on location, price, weather, and time. Applied SOLID principles and Clean Architecture to reduce code coupling and support future feature scalability, while caching API data to lower network latency.",
    technologies: ["Java", "Swing", "AWT", "REST APIs"],
  },
  {
    title: "Automated Home Alarm System",
    image: project3,
    description:
      "Designed a home alarm system using motion detectors and door sensors to send alerts to a mobile device when motion is detected or the lock is opened. Integrated the system with the Blynk platform to enable real-time monitoring, customizable alarms, and remote sensor data visualization.",
    technologies: ["Arduino", "Blynk", "C/C++", "IoT"],
  },
  {
    title: "Personal Portfolio Website",
    image: project4,
    description:
      "A responsive personal portfolio website showcasing my projects, experience, and skills, built to practice modern frontend tooling and serve as a central hub for my work.",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "2130 Dalecroft Crescent, Burlington, Ontario",
  phoneNo: "+1 289 208 5566",
  email: "minjae.song2004@gmail.com",
};
