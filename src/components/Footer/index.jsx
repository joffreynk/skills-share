import { socialLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

import styles from '@/styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container} >
      <p className={styles.right}>
        skills share @ {new Date().getFullYear()} all right reserved
      </p>
      <div className={styles.socialICons}>
        {
          socialLinks.map(social=>(
            <Link className={styles.social} key={`${social.id}- ${social.title}`} href={social.link}> <Image src={social.imgUrl} width={25} height={25} alt={social.title} /> </Link>
          ))
        }
      </div>
    </footer>
  )
}

export default Footer