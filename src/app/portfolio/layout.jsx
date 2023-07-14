import styles from '@/styles/portfolio.module.css'

const layout = ({children}) => {
  return (
    <div>
        <h1 className={styles.mainTitle}>Our services</h1>
        {children}
    </div>
  )
}

export default layout
