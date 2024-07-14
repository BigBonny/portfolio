"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "project 1",
    desc: "I have decided with a couple of friends to make a content streaming website resembling Twitch or Youtube live, I was in charge of making the website while my friends were in charge of other tasks such as promotion... Unfortunately, I couldn't publish the site as I would need to pay above our budget. Regardless, the project still remains my biggest project so far, but I'll be more than happy to make even bigger and better projects in the future :)",
    stack: [{ name: "Nextjs" }, { name: "Tailwind" }, { name: "SQL" }],
    image: "",
    video: "/Streaming-website.mp4",
    live: "",
    github: "/",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 1",
    desc: 'This is my first real project, I made a website for the company "Innovative Labs" that was generous enough to offer me the job as a complete beginner.',
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Vite" }],
    image: "/innovative-labs.PNG",
    video: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 1",
    desc: "This is my first ever project, it isn't anything impressive, I remember focusing more on the logic, I had a friend of mine always telling me to one up the website's functionalities by adding new functions like adding a special characters functions and a cap letters functions... It was a fun challenge although the design was pretty below-average (to say the least), but to be fair I was only focusing on the javascript functionalities, it is pretty nice to see how far my coding journey has come along and even tho this technically isn't my VERY first website, as I have unfortunately lost it, it still is one of the first and one of the most memorable projects I made.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/project1.PNG",
    video: "",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">
                {project.desc}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent-hover">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Live project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-white text-3xl group-hover:text-accent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Github repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              modules={[Navigation]}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full rounded-[10px]">
                  <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20 rounded-[10px]">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-[10px]"></div>
                    <div className="relative w-full h-full">
                      {index === 0 ? (
                        <video src={project.video} autoPlay loop muted className="object-fill w-full h-full rounded-[10px] cursor-pointer hover:object-cover"/>
                      ) : (
                        <Image src={project.image} fill className="object-fill rounded-[10px] cursor-pointer hover:object-cover" alt={project.name} />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent-hover hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles="text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
