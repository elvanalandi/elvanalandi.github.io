import {
    RxHome,
    RxPerson,
    RxDashboard
  } from "react-icons/rx";

import { IoBookOutline } from "react-icons/io5";

  export const Socials = [
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
  
  export const NavLinks = [
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
  
  export const UserData = 
  {
    githubUsername: "elvanalandi",
    token: "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"
  };
  
  export const SkillData = [
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

  const timelineData = [
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
      color: "bg-cyan-500",
    },
    {
      id: "T2",
      title: "Bachelor of Informatics Engineering",
      location: "Petra Christian University, Surabaya",
      description: "",
      keyResponsibilities: [], 
      buttonText: "",
      date: "08/2016 - 08/2020",
      icon: "/assets/timeline/school.svg",
      color: "bg-yellow-500",
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
      color: "bg-cyan-500",
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
      color: "bg-cyan-500",
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
      color: "bg-cyan-500",
    },  
    {
      id: "T6",
      title: "Master of Cyber Security",
      location: "Swinburne University of Technology, Melbourne",
      description: "",
      keyResponsibilities: [],      
      buttonText: "",
      date: "08/2022 - 08/2024",
      icon: "/assets/timeline/school.svg",
      color: "bg-yellow-500",
    }, 
  ];

  export default timelineData.reverse();