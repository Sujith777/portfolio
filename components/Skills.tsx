"use client";

import { InfiniteMovingCards } from "./ui/InfMovingCards";
import { skills } from "@/data";

export default function Skills() {
  return (
    <div className="py-20" id="skills">
      <h1 className="heading mb-4 text-purple">Skills and Technologies</h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards items={skills} direction="right" speed="slow" />
      </div>
    </div>
  );
}
