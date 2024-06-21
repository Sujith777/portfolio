"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfMovingCards";
import { skills } from "@/data";

export default function Skills() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-2xl text-purple">Skills and Technologies</h1>
      <InfiniteMovingCards items={skills} direction="right" speed="slow" />
    </div>
  );
}
