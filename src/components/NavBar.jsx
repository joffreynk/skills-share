import { navBarLinks } from "@/constants"
import Link from "next/link"

const NavBar = () => {
  return (
    <header>
      <nav>
        <div>
          <Link href='/'>Skills-share</Link>
        </div>
        <div>
        {navBarLinks.map(link=>(
            <Link key={link.id} href={link.url} >{link.title}</Link>
        ))}
        </div>
      </nav>
    </header>
  )
}

export default NavBar
