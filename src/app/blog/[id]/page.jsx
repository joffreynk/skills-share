import React from 'react'
import styles from '@/styles/blogId.module.css'
const BlogPost = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.firstContainer}>
        <div className={styles.introContainer}></div>
        <div className={styles.imageContainer}></div>
        </div>
        <div className={styles.secondContainer}></div>
    </div>
  )
}

export default BlogPost