import React from 'react'
import styles from '@/styles/blogId.module.css'
import Image from 'next/image'
const BlogPost = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.firstContainer}>
        <div className={styles.introContainer}>
          <h2 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <p className={styles.introduction}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolorum pariatur praesentium aspernatur, sapiente error. Recusandae fuga quidem, pariatur nesciunt cupiditate itaque totam laborum blanditiis, et eos, esse culpa obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, nihil facere distinctio quas, unde ipsum dignissimos laudantium libero in et numquam ad placeat inventore! Accusamus sunt tempore nobis corrupti deserunt?</p>
          <div className={styles.posterUser}>
          <Image className={styles.userPicture} src='/home.jpg' width={40} height={40} alt='posted user' />
          <span className={styles.userName}>Joffreynk</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
        <Image className={styles.blogPicture} src='/home.jpg' fill alt='posted user' />
        </div>
        </div>
        <div className={styles.secondContainer}>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur eaque accusamus cumque asperiores praesentium minima reiciendis sed! Quisquam doloribus quaerat vero a corporis vel eaque recusandae blanditiis ullam autem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto veritatis provident fuga culpa ratione, dolorem nisi alias eos quos excepturi, reiciendis quam cum placeat sequi repudiandae. Incidunt rem ratione quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur eaque accusamus cumque asperiores praesentium minima reiciendis sed! Quisquam doloribus quaerat vero a corporis vel eaque recusandae blanditiis ullam autem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto veritatis provident fuga culpa ratione, dolorem nisi alias eos quos excepturi, reiciendis quam cum placeat sequi repudiandae.</p>

          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur eaque accusamus cumque asperiores praesentium minima reiciendis sed! Quisquam doloribus quaerat vero a corporis vel eaque recusandae blanditiis ullam autem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto veritatis provident fuga culpa ratione, dolorem nisi alias eos quos excepturi, reiciendis quam cum placeat sequi repudiandae. Incidunt rem ratione quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sint magnam cumque excepturi sit atque dolorem laborum itaque ducimus ab tenetur repellendus eos similique totam, aut officiis iusto, praesentium non! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default BlogPost