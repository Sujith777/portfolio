"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { projects } from "@/data";

export function Projects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-4 mt-5">
        {projects.map((project) => (
          <div
            key={project?.id}
            className="lg:min-h-[32.5rem] sm:h-[41rem] sm:w-[570px] h-[32rem] flex items-center justify-center w-[90vw]"
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={project?.img}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="mt-4 font-bold lg:text-2xl mg:text-xl text-base line-clamp-1"
                >
                  {project?.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project?.des}
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project?.link}
                    target="__blank"
                    className="px-4 py-2 bg-purple rounded-xl text-sm font-semibold dark:text-white"
                  >
                    Visit site
                  </CardItem>
                  <CardItem className=" rounded-xl">
                    <div className="flex items-center">
                      {project?.iconLists.map((icon, idx) => (
                        <div
                          key={icon}
                          style={{ transform: `translateX(-${5 * idx * 2}px)` }}
                          className="border border-white/[0.2] rounded-full h-8 w-8 bg-black-100 lg:w-10 lg:h-10 flex items-center justify-center"
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      ))}
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
}
