export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently exploring Django and Golang",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Imaginify - A SaaS application based on generative AI",
    des: "Explore the wonders of image operations like resizing, background removal and such based on Cloudinary generative AI.",
    img: "/ai-saas.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://billasp-imaginify.vercel.app",
  },
  {
    id: 2,
    title: "Flowmazon - E-commerce Website",
    des: "A full stack e-commerce application using Next.js, Typescript, Prisma, Stripe and Tailwind CSS.",
    img: "/ecommerce.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg"],
    link: "https://billasp-flowmazon.vercel.app",
  },
  {
    id: 3,
    title: "Jobinator - A job posting board",
    des: "A full stack job posting board that supports progressive enhancement using Next.js, Typescript, Prisma, Shadcn UI and Clerk.",
    img: "/jobinator.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg", "/c.svg"],
    link: "https://billasp-jobinator.vercel.app",
  },
  {
    id: 4,
    title: "Snapgram - a social media platform",
    des: "A full stack social media application built using React.js, React Query, Typescript and Prisma that leverages Appwrite as a backend as a service.",
    img: "/snapgram.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/appwrite.svg"],
    link: "https://billasp-snapgram.vercel.app",
  },
];

export const skills = [
  {
    image: "/cpp.png",
    name: "C Plus Plus",
  },
  {
    image: "/express.png",
    name: "Express.js",
  },
  {
    image: "/firebase.png",
    name: "Firebase",
  },
  {
    image: "/github.png",
    name: "Github",
  },
  {
    image: "/javascript.png",
    name: "Javascript",
  },
  {
    image: "/mongodb.png",
    name: "MongoDB",
  },
  {
    image: "/nextjs.png",
    name: "Next.js",
  },
  {
    image: "/node.png",
    name: "Node.js",
  },
  {
    image: "/python.png",
    name: "Python",
  },
  {
    image: "/react.png",
    name: "React.js",
  },
  {
    image: "/redux.png",
    name: "Redux",
  },
  {
    image: "/tailwind.png",
    name: "Tailwind CSS",
  },
  {
    image: "/typescript.png",
    name: "Typescript",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
