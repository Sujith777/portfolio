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
    title: "CarePulse - a healthcare platform",
    des: "A full stack healthcare application built using Next.js, Typescript, TailwindCSS and Shadcn UI that leverages Appwrite as a backend as a service.",
    img: "/carepulse.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/appwrite.svg"],
    link: "https://billasp-carepulse.vercel.app",
  },
  ,
  {
    id: 2,
    title: "Imaginify - A SaaS application based on generative AI",
    des: "Explore the wonders of image operations like resizing, background removal and such based on Cloudinary generative AI.",
    img: "/ai-saas.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://billasp-imaginify.vercel.app",
  },
  {
    id: 3,
    title: "Flowmazon - E-commerce Website",
    des: "A full stack e-commerce application using Next.js, Typescript, Prisma, Stripe and Tailwind CSS.",
    img: "/ecommerce.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg"],
    link: "https://billasp-flowmazon.vercel.app",
  },
  {
    id: 4,
    title: "Jobinator - A job posting board",
    des: "A full stack job posting board that supports progressive enhancement using Next.js, Typescript, Prisma, Shadcn UI and Clerk.",
    img: "/jobinator.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/prisma.svg", "/c.svg"],
    link: "https://billasp-jobinator.vercel.app",
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

export const workExperience = [
  {
    id: 1,
    title: "Software Development Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, AWS CDK and Typescript.",
    className: "md:col-span-2",
    thumbnail: "/exp.svg",
    duration: "Jan 2023 - Jun 2023",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Sujith777",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sujith-praveen-billa",
  },
];
