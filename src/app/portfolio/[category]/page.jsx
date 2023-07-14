import React from 'react'
import styles from '@/styles/category.module.css'
import CustomButton from '@/components/CustomButton'
import Image from 'next/image'
const Category = ({params}) => {
 
  const cat = params.category.split('-').join(' ')
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{cat}</h2>
      <div  className={styles.content}>
      <div  className={styles.textContainer}>
        <h3>Creative Mind</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius libero vel commodi quo! Delectus, eius itaque. Numquam explicabo officiis omnis pariatur, atque odio molestiae sit doloribus iusto, voluptates tempora.</p>
        <CustomButton text='view more' />
      </div>
      <div  className={styles.imageContainer}>
        <Image src='/userdesign.jpg' fill alt='category picture' />
      </div>
      </div>
    </div>
  )
}

export default Category