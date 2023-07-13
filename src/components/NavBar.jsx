import { navBarLinks } from "@/constants"
import Link from "next/link"

const NavBar = () => {
  return (
    <header>
      <nav>
        {navBarLinks.map(link=>(
            <Link key={link.id} href={link.url} >{link.title}</Link>
        ))}
      </nav>
    </header>
  )
}

export default NavBar
