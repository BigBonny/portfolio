"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    }
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent-hover"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Karim <span className="text-accent-hover">.</span>
                        </h1>
                    </Link>                
                </div>
                <nav className="flex flex-col gap-8 justify-center items-center">
                    {links.map((link,index)=>{
                        return(
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent-hover border-b-2 border-accent-hover"}capitalize hover:text-accent-hover text-xl transition-all`}>
                            {link.name}
                        </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;