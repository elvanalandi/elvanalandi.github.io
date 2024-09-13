import {
  RxHome,
  RxPerson,
  RxDashboard
} from "react-icons/rx";

import { IoBookOutline } from "react-icons/io5";

// Define types for Socials array
interface Social {
  name: string;
  src: string;
  link: string;
}

// Define types for NavLinks array
interface NavLink {
  id: string;
  name: string;
  icon: React.ComponentType<any>; // Adjust the type for icon based on your icon library
  url: string;
}

// Define types for SkillData array
interface Skill {
  skillName: string;
  image: string;
  width: number;
  height: number;
}

// Define types for timelineData array
interface TimelineEntry {
  id: string;
  title: string;
  location: string;
  description: string;
  keyResponsibilities: string[];
  buttonText: string;
  date: string;
  icon: string;
  color: number;
}

export const Socials: Social[] = [
  {
    name: "LinkedIn",
    src: "/assets/linkedin.svg",
    link: "https://www.linkedin.com/in/elvan-alandi-46528b206/"
  },
  {
    name: "Email",
    src: "/assets/email.svg",
    link: "mailto:elvanalandi@gmail.com"
  },
];

export const NavLinks: NavLink[] = [
  {
    id: "L1",
    name: "Home",
    icon: RxHome,
    url: "/",
  },
  {
    id: "L2",
    name: "About me",
    icon: RxPerson,
    url: "/about-me",
  },
  {
    id: "L3",
    name: "Projects",
    icon: RxDashboard,
    url: "/my-projects",
  },
  {
    id: "L4",
    name: "Experience",
    icon: IoBookOutline,
    url: "/my-experience",
  },
];

export const ProImage ={
    src: "/assets/projects/card.jpg",
};

const _0x8f4486=_0x435b;function _0x435b(_0x31aee6,_0x22a209){const _0x44aaac=_0x44aa();return _0x435b=function(_0x435bd2,_0x451531){_0x435bd2=_0x435bd2-0x11e;let _0x4d22fd=_0x44aaac[_0x435bd2];return _0x4d22fd;},_0x435b(_0x31aee6,_0x22a209);}(function(_0x5cb8ce,_0x539eb6){const _0x446c4c=_0x435b,_0x4517d8=_0x5cb8ce();while(!![]){try{const _0x1f1381=parseInt(_0x446c4c(0x11e))/0x1*(parseInt(_0x446c4c(0x121))/0x2)+parseInt(_0x446c4c(0x122))/0x3+-parseInt(_0x446c4c(0x127))/0x4*(-parseInt(_0x446c4c(0x11f))/0x5)+parseInt(_0x446c4c(0x126))/0x6+-parseInt(_0x446c4c(0x128))/0x7*(parseInt(_0x446c4c(0x124))/0x8)+parseInt(_0x446c4c(0x123))/0x9*(parseInt(_0x446c4c(0x129))/0xa)+-parseInt(_0x446c4c(0x125))/0xb*(parseInt(_0x446c4c(0x12a))/0xc);if(_0x1f1381===_0x539eb6)break;else _0x4517d8['push'](_0x4517d8['shift']());}catch(_0x19d714){_0x4517d8['push'](_0x4517d8['shift']());}}}(_0x44aa,0x8ffca));function _0x44aa(){const _0x528653=['4697322sSTeJY','4EwJcxq','7gaqvBZ','153040AUxwkU','12SsgfcK','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','88pXXAYY','2306855RoMlfT','elvanalandi','17322DKKMlh','3390303cbCQOv','261hhBOhG','9176792HxVhQg','20278214yKWGwp'];_0x44aa=function(){return _0x528653;};return _0x44aa();}export const UserData={'githubUsername':_0x8f4486(0x120),'token':_0x8f4486(0x12b)};

export const SkillData: Skill[] = [
  {
    skillName: "Html 5",
    image: "/assets/skills/html.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "Css",
    image: "/assets/skills/css.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "Java Script",
    image: "/assets/skills/js.png",
    width: 65,
    height: 65,
  },
  {
    skillName: "Tailwind Css",
    image: "/assets/skills/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "React",
    image: "/assets/skills/react.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "Java",
    image: "/assets/skills/java.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "JQuery",
    image: "/assets/skills/jquery.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "Type Script",
    image: "/assets/skills/ts.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "Next js 13",
    image: "/assets/skills/next.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "MySQL",
    image: "/assets/skills/mysql.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "PHP",
    image: "/assets/skills/php.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "Python",
    image: "/assets/skills/python.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "Bash",
    image: "/assets/skills/bash.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "Go",
    image: "/assets/skills/golang.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "C",
    image: "/assets/skills/c.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "C++",
    image: "/assets/skills/c++.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "AWS",
    image: "/assets/skills/aws.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "Oracle",
    image: "/assets/skills/oracle.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "Oracle Cloud",
    image: "/assets/skills/oracle-icon.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "HackTheBox",
    image: "/assets/skills/htb.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "TryHackMe",
    image: "/assets/skills/tryhackme.svg",
    width: 80,
    height: 80,
  },
  {
    skillName: "Wireshark",
    image: "/assets/skills/wireshark.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "Linux",
    image: "/assets/skills/linux.png",
    width: 80,
    height: 80,
  },
  {
    skillName: "Windows",
    image: "/assets/skills/windows.png",
    width: 80,
    height: 80,
  },
];

const timelineData: TimelineEntry[] = [
  {
    id: "T1",
    title: "Mobile App Developer Intern",
    location: "PT Multi Innovacia Indonesia",
    description: "Developed front-end mobile application using Kotlin programming language",
    keyResponsibilities: [
      "Collaborated effectively with team members while maintaining a strong sense of individual responsibility", 
      "Developed mobile application pages based on design requirements from the design team",
      "Developed the functionality of the application",
    ], 
    buttonText: "Details",
    date: "05/2019 - 07/2019",
    icon: "/assets/timeline/work.svg",
    color: 0,
  },
  {
    id: "T2",
    title: "Bachelor of Informatics Engineering",
    location: "Petra Christian University, Surabaya",
    description: "Completed",
    keyResponsibilities: [], 
    buttonText: "",
    date: "08/2016 - 08/2020",
    icon: "/assets/timeline/school.svg",
    color: 1,
  },
  {
    id: "T3",
    title: "Freelance Web Developer",
    location: "Surabaya, Indonesia",
    description: "Developed websites to meet the clients' requirements using the Laravel framework and several plugins to support the website's development",
    keyResponsibilities: [
      "Aligned website development with clients' specifications", 
      "Conducted progress meetings with clients to ensure requirements were met",
      "Implemented effective communication channels to promptly address client inquiries and provide ongoing support",
    ], 
    buttonText: "Details",
    date: "03/2021 - 05/2021",
    icon: "/assets/timeline/work.svg",
    color: 0,
  },
  {
    id: "T4",
    title: "Full Stack Developer",
    location: "PT Pillar Dinamika Integra",
    description: "Managed both back-end and front-end aspects of the software development process",
    keyResponsibilities: [
      "Completed code debugging and implemented fixes to resolve problems based on the priority system", 
      "Modified existing software systems to enhance performance and add new features",
      "Conducted testing on the website before deployment into production stage",
    ], 
    buttonText: "Details",
    date: "05/2021 - 09/2021",
    icon: "/assets/timeline/work.svg",
    color: 0,
  },
  {
    id: "T5",
    title: "Technical Support Developer Intern",
    location: "Digital Innovation Lab, Swinburne University",
    description: "Developed an edge-cloud pipeline for 5G-Brimbank project",
    keyResponsibilities: [
        "Develop the pipeline according to the client requirements", 
        "Regularly reported project progress through comprehensive weekly updates",
        "Thoroughly documented all aspects of the project for future reference and knowledge transfer",
    ],      
    buttonText: "Details",
    date: "08/2023 - 10/2023",
    icon: "/assets/timeline/work.svg",
    color: 0,
  },  
  {
    id: "T6",
    title: "Master of Cyber Security",
    location: "Swinburne University of Technology, Melbourne",
    description: "Completed",
    keyResponsibilities: [],      
    buttonText: "",
    date: "08/2022 - 06/2024",
    icon: "/assets/timeline/school.svg",
    color: 1,
  }, 
];

export default timelineData.reverse();
