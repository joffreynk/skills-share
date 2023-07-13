import { socialLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer >
      <p>
        skills share @ {new Date().getFullYear()} all right reserved
      </p>
      <div>
        {
          socialLinks.map(social=>(
            <Link key={`${social.id}- ${social.title}`} href={social.link}> <Image src={social.imgUrl} width={22} height={22} alt={social.title} /> </Link>
          ))
        }
      </div>
    </footer>
  )
}

export default Footer