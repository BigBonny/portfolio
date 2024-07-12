import Photo from "@/components/photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developper</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent-hover"> Karim Loukil</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent-hover rounded-full flex justify-center items-center text-accent-hover text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500 " />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
            <div className="absolute z-[1] w-[40%] h-[35%] top-0 pink__gradient" style={{pointerEvents: "none"}} />
<div className="absolute z-[2] w-[20%] h-[80%] bottom-10 white__gradient rounded-full" style={{pointerEvents: "none"}} />
<div className="absolute z-[1] w-[5%] h-[50%] right-5 bottom-20 blue__gradient" style={{pointerEvents: "none"}} />
          </div>
        </div>
      </div>
      
      
      <Stats />
    </section>
  )
}

export default Home