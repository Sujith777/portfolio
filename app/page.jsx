"use client";
import Head from "next/head";
import Image from "next/image";
import { redirect } from "next/navigation";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import avatar from "../public/avatar.png";
import code from "../public/code.png";
import foodapp from "../public/foodapp.png";
import hoobank from "../public/hoobank.png";
import movieland from "../public/movieland.png";
import tindog from "../public/tindog.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sujith Praveen Portfolio</title>
        <meta name="description" content="A portfolio genereted using NextJS" />
        <link rel="icon" type="icon" href="/public/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:p-40 dark:bg-gray-900">
        <section>
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">Sujith Praveen</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1FyYzvaVJseoo-j6lE_EKJ6E-EeY4smsx/view?usp=sharing"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 dark:text-teal-400 text-teal-600 font-medium md:text-6xl">
              Sujith Praveen Billa
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer
            </h3>
            <p className="text-md py-5 leading-8 dark:text-gray-200 text-gray-800 md:text-xl max-w-xl mx-auto">
              Computer Science graduate from National Institute of Technology,
              Patna in 2023 looking for employment opportunities in Software
              Development and Machine Learning domains. I like to stay updated
              to the industry trends and open to learn new skills required for
              the role.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillLinkedin />
            <AiFillInstagram />
            <AiFillGithub />
          </div>
          <div className="relative my-20 ">
            <Image
              className="rounded-full mx-auto"
              src={avatar}
              alt="avatar"
              style={{
                height: "30%",
                width: "30%",
                objectFit: "contain",
              }}
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am a fullstack web developer with knowledge and hands on
              experience with <span className="text-teal-500">MongoDB</span>,{" "}
              <span className="text-teal-500">ExpressJS</span>,{" "}
              <span className="text-teal-500" span>
                ReactJs,{" "}
              </span>
              and <span className="text-teal-500">NodeJS</span>. I can work as a
              front-end developer, a backend developer or a fullstack developer.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center dark:bg-white items-center shadow-lg p-10 rounded-xl my-10 m-auto">
              <Image
                src={code}
                alt="code"
                style={{
                  margin: "auto",
                  objectFit: "cover",
                  height: "60px",
                  width: "60px",
                }}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&apos;s make
                it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Coding Tools I use</h4>
              <p className="text-gray-800 py-1">ReactJS</p>
              <p className="text-gray-800 py-1">NodeJS</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">ExpressJS</p>
              <p className="text-gray-800 py-1">REST API</p>
              <p className="text-gray-800 py-1">Redux</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 justify-center p-10 lg:flex-row lg:flex-wrap mx-auto">
            <div className="basis-1/3 flex-1">
              <Image
                src={hoobank}
                alt="hoobank"
                className="rounded-lg object-cover"
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={foodapp}
                alt="foodapp"
                className="rounded-lg object-cover"
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={movieland}
                alt="movieland"
                className="rounded-lg object-cover"
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={tindog}
                alt="tindog"
                className="rounded-lg object-cover"
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
