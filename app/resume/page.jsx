"use client";

import { FaReact, FaHtml5, FaCss3, FaJs, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const about = 
  {
    title:'about me',
    desc:"Here are some information you might want to know about me",
    info:[
      {
        fieldName:"Name",
        fieldInfo:"Karim Loukil"
      },
      {
        fieldName:"Phone",
        fieldInfo:"i forgot"
      },
      {
        fieldName:"Experience",
        fieldInfo:"2 big projects completed"
      },
      {
        fieldName:"Email",
        fieldInfo:"bigbonny481@gmail.com"
      },
      {
        fieldName:"Frelance",
        fieldInfo:"Available"
      },
      {
        fieldName:"Languages",
        fieldInfo:"English, French, Arabic, Japanese, Spanish"
      },
    ]
  }
const skills = {
  title:"My skills",
  desc: "I am confident in my skills in these languages (except for python)",
  skillList:[
    {
      con:<FaHtml5 />,
      name:"html 5"
    },
    {
      con:<FaCss3 />,
      name:"css 3"
    },
    {
      con:<FaJs />,
      name:"javascript"
    },
    {
      con:<FaReact />,
      name:"react.js"
    },
    {
      con:<FaPython/>,
      name:"python"
    },
    {
      con:<FaNodeJs />,
      name:"node.js"
    },
    {
      con:<SiTailwindcss />,
      name:"tailwind"
    },
    {
      con:<SiNextdotjs />,
      name:"next.js"
    },
    {
      con:<SiTypescript />,
      name:"typescript"
    },
  ]
}

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full h-full">
             <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.desc}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index)=>{
                    return(
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl hover:text-accent-hover transition-all duration-300">
                                {skill.con}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">
                                {skill.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
             </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
          <div className="flex flex-col gap-[30px]">

             <h3 className="text-4xl font-bold">{about.title}</h3>
             <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.desc}</p>
             <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item,index)=>{
                return(
                  <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldInfo}</span>
                  </li>
                )
              })}
             </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>

  )
}

export default Resume