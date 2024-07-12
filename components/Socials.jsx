import Link from "next/link";

import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";

const socials = [
    {icon:<FaGithub />, path:"/"},
    {icon:<FaTwitter />, path:"/"},
    {icon:<FaLinkedin />, path:"/"},
    {icon:<FaInstagram />, path:"/"},
    {icon:<FaSquareUpwork />, path:"/"},
    {icon:<TbBrandFiverr />, path:"/"},
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>{socials.map((item, index)=>{
        return(
            <Link href={item.path} key={index} className={iconStyles}>
                {item.icon}
            </Link>
        )
    })}</div>
  )
}

export default Socials