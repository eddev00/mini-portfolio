"use client";
import React from "react";
import Image from "next/image";
import gif1 from "../../../public/gif4.gif";
import ProjectItem from "@/components/ProjectItem";
import project1 from "../../../public/project1.png";
import project2 from "../../../public/project2.png";
import portfolio from "../../../public/PORTFOLIO.png";
import chatbot from "../../../public/chatbot.png";
import langchain from "../../../public/langchain.png";
import expensetracker from "../../../public/expensetracker.png";

import { motion } from "framer-motion";

const page = () => {
  return (
    <main className=" text-black font-medium px-6 max-w-xl mx-auto flex flex-col gap-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ type: "spring", duration: 2 }}
      >
        <div className="flex flex-col gap-6 ">
          <div className="text-center  p-3 bg-[#6AFF79] font-bold text-lg">
            Personal Projects
          </div>
          <div className="container flex flex-wrap gap-6 mx-auto justify-between mb-6">
            <ProjectItem
              image={project1}
              title="Cosmos Memory"
              paragraph="A react app that display data about the galaxy from NASA API"
            />

            <ProjectItem
              image={langchain}
              title="Conversational chatbot"
              paragraph=" Chatbot model built on top of LLM model to answer from private data"
            />
            <ProjectItem
              image={expensetracker}
              title="Expense Tracker"
              paragraph="A react app that track your expenses"
            />
            <ProjectItem
              image={portfolio}
              title="Personal Portfolio"
              paragraph="My personal portfolio website built with Next.js and Tailwindcss"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6 ">
            <div className="text-center  p-3 bg-[#6AFF79] font-bold text-lg">
              University Projects
            </div>
            <div className="container_items flex flex-wrap gap-6 breakpoint:mx-auto">
              <ProjectItem
                image={project2}
                title="University schooling dashboard"
                paragraph="web app that manage the schooling process of a university + a chatbot that answer students questions "
              />
              <ProjectItem
                image={chatbot}
                title="A chatbot for the university"
                paragraph="A chatbot that answer students questions about the university"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default page;
