import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
        <div className="container mx-auto flex justify-between items-center">
        <Link href={'/'}>
            <h1 className="text-4xl font-semibold">Karim <span className="text-accent-hover">.</span></h1>

        </Link>

        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href={"/contact"}>
                <Button>Contact me</Button>
            </Link>
        </div>

        <div className="xl:hidden">
            mobile nav
        </div>

     </div>
    </header>
  )
}

export default Header