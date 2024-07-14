import Link from "next/link";

import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { TbBrandFiverr } from "react-icons/tb";
import { FaSquareUpwork } from "react-icons/fa6";

const socials = [
    {icon:<FaTwitter />, path:"https://x.com/BigBonny_Code"},
    {icon:<FaLinkedin />, path:"https://www.linkedin.com/in/big-bonny-a03943318/"},
    {icon:<FaSquareUpwork />, path:"https://www.upwork.com/freelancers/~0132ddc77b8938c75f"},
    {icon:<TbBrandFiverr />, path:"https://www.fiverr.com/bigbonny?up_rollout=true"},
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

export default Socials;