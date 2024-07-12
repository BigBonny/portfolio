"use client";

import CountUp from "react-countup";

const stats = [
    {
        num:1,
        texte:'Year of experience',
    },
    {
        num:5,
        texte:'Coding Languages mastered',
    },
    {
        num:10,
        texte:'Libraries mastered',
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-8">
        <div className="container mx-auto ">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">

            {stats.map((item, index)=>{
                return(
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                        <CountUp
                        end={item.num}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-extrabold "
                        />
                        <p className={`${item.texte.length < 15? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.texte}</p>
                    </div>
                )
            })}
            </div>
        </div>
    </section>
  )
}

export default Stats