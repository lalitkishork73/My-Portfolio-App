import html from "../assets/html.png";
import reactImage from "../assets/react.png";

const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
    url:"https://html.com/"
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    title: "CSS",
    style: "shadow-blue-500",
    url:"https://www.w3schools.com/css/"
  },
  {
    id: 3,
    src: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    title: "JavaScript",
    style: "shadow-yellow-500",
    url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    id: 4,
    src: "https://img.icons8.com/fluency/72/c-plus-plus-logo.png",
    title: "C++",
    style: "shadow-yellow-500",
    url:"https://www.geeksforgeeks.org/c-plus-plus/"
  },
  {
    id: 5,
    src: "https://img.icons8.com/fluency/72/c-programming.png",
    title: "C",
    style: "shadow-yellow-500",
    url:"https://www.w3schools.com/c/"
  },
  {
    id: 6,
    src: "https://img.icons8.com/color/72/java-coffee-cup-logo--v1.png",
    title: "Java",
    style: "shadow-yellow-500",
    url:"https://www.w3schools.com/java/"
  },
  {
    id: 7,
    src: reactImage,
    title: "React",
    style: "shadow-blue-600",
    url:"https://www.w3schools.com/react/default.asp"
  },
  {
    id: 8,
    src: "https://img.icons8.com/color/48/000000/git.png",
    title: "Git",
    style: "shadow-blue-600",
    url:"https://www.w3schools.com/git/"
  },
  {
    id: 9,
    src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    title: "GitHub",
    style: "shadow-blue-600",
    url:"https://github.com/lalitkishork73"
  },
  {
    id: 10,
    src: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    title: "tailwindcss",
    style: "shadow-blue-600",
    url:"https://tailwindcss.com/docs/installation"
  },
  {
    id: 11,
    src: "https://cdn.worldvectorlogo.com/logos/jquery-2.svg",
    title: "JQuery",
    style: "shadow-blue-600",
    url:"https://www.w3schools.com/jquery/default.asp"
  },
  {
    id: 12,
    src: "https://img.icons8.com/color/72/sass.png",
    title: "Saas",
    style: "shadow-blue-600",
    url:"https://sass-lang.com/documentation/"
  },
  {
    id: 13,
    src: "https://img.icons8.com/color/48/000000/bootstrap.png",
    title: "Bootstrap",
    style: "shadow-blue-600",
    url:"https://getbootstrap.com/docs/5.0/getting-started/introduction/"
  },
  {
    id: 14,
    src: "https://img.icons8.com/color/48/000000/nodejs.png",
    title: "NodeJS",
    style: "shadow-blue-600",
    url:"https://www.w3schools.com/nodejs/"
  },
  {
    id: 15,
    src: "https://img.icons8.com/nolan/72/express-js.png",
    title: "ExpressJs",
    style: "shadow-blue-600",
    url:"https://expressjs.com/"
  },
  {
    id: 16,
    src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    title: "MongoDB",
    style: "shadow-blue-600",
    url:"https://www.tutorialspoint.com/mongodb/index.htm"
  },
  {
    id: 17,
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "Postman",
    style: "shadow-blue-600",
    url:"https://www.javatpoint.com/postman"
  },
  {
    id: 18,
    src: "https://img.icons8.com/color/48/000000/redis.png",
    title: "Redis",
    style: "shadow-blue-600",
    url:"https://www.javatpoint.com/redis-tutorial"
  },
  {
    id: 19,
    src: "https://img.icons8.com/fluent/50/000000/mysql-logo.png",
    title: "My-SQL",
    style: "shadow-blue-600",
    url:"https://www.javatpoint.com/mysql-tutorial"
  },
  {
    id: 20,
    src: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
    title: "Visual studio Code",
    style: "shadow-blue-600",
    url:"https://code.visualstudio.com/"
  },
  {
    id: 21,
    src: "https://cdn.worldvectorlogo.com/logos/codepen-icon.svg",
    title: "CodePen",
    style: "shadow-blue-600",
    url:"https://codepen.io/"
  },
  {
    id: 22,
    src: "https://cdn.worldvectorlogo.com/logos/atom-4.svg",
    title: "Atom",
    style: "shadow-blue-600",
    url:"https://flight-manual.atom.io/getting-started/sections/installing-atom/"
  },
  {
    id: 23,
    src: "https://img.icons8.com/color/48/000000/ubuntu.png",
    title: "Ubuntu",
    style: "shadow-blue-600",
    url:"https://ubuntu.com/"
  },
  {
    id: 24,
    src: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    title: "AWS",
    style: "shadow-blue-600",
    url:"https://www.javatpoint.com/aws-tutorial"
  },
  {
    id: 25,
    src: "https://img.icons8.com/color/48/000000/docker.png",
    title: "Docker",
    style: "shadow-blue-600",
    url:"https://www.javatpoint.com/docker-tutorial"
  },
  {
    id: 26,
    src: "https://cdn.worldvectorlogo.com/logos/raspberry-pi.svg",
    title: "Raspberry-PI",
    style: "shadow-blue-600",
    url:"https://www.raspberrypi.org/"
  },
  {
    id: 27,
    src: "https://seeklogo.com/images/A/arduino-logo-BC7CBC1DAA-seeklogo.com.png",
    title: "Arduino",
    style: "shadow-blue-600",
    url:"https://www.arduino.cc/"
  },
  {
    id: 28,
    src: "https://img.icons8.com/color/344/data-.png",
    title: "Assembly language",
    style: "shadow-blue-600",
    url:"https://www.tutorialspoint.com/assembly_programming/index.htm"
  },
  {
    id: 29,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png?20170128174110",
    title: "MATLAB",
    style: "shadow-blue-600",
    url:"https://www.tutorialspoint.com/matlab/index.htm"
  },
  {
    id: 30,
    src: "https://cdn.worldvectorlogo.com/logos/cisco-2.svg",
    title: "Cisco Packet Tracer",
    style: "shadow-blue-600",
    url:"https://www.packettracernetwork.com/tutorials/"
  },

];

export default techs;
