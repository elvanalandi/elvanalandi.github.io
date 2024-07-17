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


const _0x214847=_0x1265;(function(_0x4c175e,_0x176c78){const _0x5bae55=_0x1265,_0x475f7c=_0x4c175e();while(!![]){try{const _0x281ad5=parseInt(_0x5bae55(0x136))/0x1*(parseInt(_0x5bae55(0x137))/0x2)+-parseInt(_0x5bae55(0x130))/0x3*(parseInt(_0x5bae55(0x138))/0x4)+parseInt(_0x5bae55(0x131))/0x5+-parseInt(_0x5bae55(0x13b))/0x6*(parseInt(_0x5bae55(0x13a))/0x7)+parseInt(_0x5bae55(0x132))/0x8+-parseInt(_0x5bae55(0x134))/0x9*(-parseInt(_0x5bae55(0x133))/0xa)+parseInt(_0x5bae55(0x135))/0xb;if(_0x281ad5===_0x176c78)break;else _0x475f7c['push'](_0x475f7c['shift']());}catch(_0x57e4e4){_0x475f7c['push'](_0x475f7c['shift']());}}}(_0x5862,0xec0f2));function _0x1265(_0x2e1606,_0x535e83){const _0x586205=_0x5862();return _0x1265=function(_0x1265a3,_0x25ab63){_0x1265a3=_0x1265a3-0x130;let _0x588f74=_0x586205[_0x1265a3];return _0x588f74;},_0x1265(_0x2e1606,_0x535e83);}function _0x5862(){const _0x241a5d=['elvanalandi','217pnUGLD','273246KxCbLs','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','3pmmrZl','1689490voIwCJ','11133048WEpnxx','230Tbrzvw','165339pfXNMS','7114811fnGOMf','3IVrQbS','867494iCEuOL','6885740yggaXI'];_0x5862=function(){return _0x241a5d;};return _0x5862();}export const UserData={'githubUsername':_0x214847(0x139),'token':_0x214847(0x13c)};

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
    skillName: "Node js",
    image: "/assets/skills/node-js.png",
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
    date: "08/2022 - 08/2024",
    icon: "/assets/timeline/school.svg",
    color: 1,
  }, 
];

export default timelineData.reverse();