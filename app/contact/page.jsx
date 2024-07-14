"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion"; 
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const info = [
  {
    icon:<FaPhoneAlt />,
    title:"Phone",
    desc:"+33699329469"
  },
  {
    icon:<FaEnvelope />,
    title:"Email",
    desc:"bigbonny481@gmail.com"
  },
]

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pc0yq7l', 'template_9n1v92s', form.current, {
        publicKey: 'Gfj5leeUAz7bDlt5V',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}} className="py-6">
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex items-center flex-col gap-6 p-10 bg-[#27272c] rounded-xl" ref={form} onSubmit={sendEmail}>
              <h3 className="text-4xl text-accent-hover">Let&apos;s work together!</h3>
              <p className="text-white/60">Be sure to specify your needs as well as the tools needed and your budget.</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input type="firstname" placeholder="FirstName" name="user_name"/>
                <Input type="email" placeholder="Email address" name="user_email"/>
              </div>
              <Textarea className="h-[200px]" placeholder="Type your message here!" name="message"/>
              <Button className="max-w-40" size="md">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
            {info.map((item,index)=>{
              return (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent-hover rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 text-xl>{item.desc}</h3>
                </div>
              </li>
              )
            })}
            </ul>
            
          </div>
        </div>
      </div>
    </motion.section>

  )
}

export default Contact