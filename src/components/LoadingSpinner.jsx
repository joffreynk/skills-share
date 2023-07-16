import React from 'react'
import styles from '@/styles/loadingSpinner.module.css'
const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3 className={styles.title3}>loading blog posts</h3>
        <div>
        <div className={styles.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
        </div>
      </div>
      <div className={styles.loadingSpinner} />
    </div>
  )
}

export default LoadingSpinner
