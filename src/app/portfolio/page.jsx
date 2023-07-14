import styles from '@/styles/portfolio.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.serviceOption} >choose a service</h2>
      <div className={styles.services}>
        <Link href='/portfolio/ui-and-ux' className={styles.service}>
          <span className={styles.serviceTitle} >UI and UX</span>
        </Link>
        <Link href='/portfolio/development' className={styles.service}>
          <span className={styles.serviceTitle} >Mobile and web development</span>
        </Link>
        <Link href='/portfolio/coaching-and-development' className={styles.service}>
          <span className={styles.serviceTitle} >coaching and community support</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
