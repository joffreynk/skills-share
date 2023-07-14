import React from 'react'
import styles from '@/styles/category.module.css'
const Category = ({params}) => {
 
    const cat = params.category.split('-').join(' ')
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat}</h1>
    </div>
  )
}

export default Category