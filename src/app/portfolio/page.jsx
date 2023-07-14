import styles from '@/styles/portfolio.module.css'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.serviceOption} >choose a service</h2>
      <div className={styles.services}>
        <div className={styles.service}>
          <span className={styles.serviceTitle} >UI and UX</span>
        </div>
        <div className={styles.service}>
          <span className={styles.serviceTitle} >Mobile and web development</span>
        </div>
        <div className={styles.service}>
          <span className={styles.serviceTitle} >coaching and community support</span>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
