import { navBarLinks } from "@/constants"
import Link from "next/link"
import styles from '@/styles/navBar.module.css'
const NavBar = () => {
  return (
      <nav className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>Skills-share</Link>
        </div>
        <div className={styles.links}>
        {navBarLinks.map(link=>(
            <Link className={styles.link} key={link.id} href={link.url} >{link.title}</Link>
        ))}
        <button type="button" className={styles.button}>Logout</button>
        </div>
      </nav>
  )
}

export default NavBar
