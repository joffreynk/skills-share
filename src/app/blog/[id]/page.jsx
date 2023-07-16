import React from 'react'
import styles from '@/styles/blogId.module.css'
import Image from 'next/image'
import fetcher from '@/utils/fetcher'
const BlogPost = async({params}) => {
  const data = await fetcher(`posts/${params.id}`)

  return (
    <div className={styles.mainContainer}>
        <div className={styles.firstContainer}>
        <div className={styles.introContainer}>
          <h2 className={styles.title}> {data.title} </h2>
          <p className={styles.introduction}>{data.intro}</p>
          <div className={styles.posterUser}>
          <Image className={styles.userPicture} src='/home.jpg' width={40} height={40} alt='posted user' />
          <span className={styles.userName}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
        <Image className={styles.blogPicture} src={data.imgUrl} fill alt='posted user' />
        </div>
        </div>
        <div className={styles.secondContainer}>
          <p className={styles.description}>{data.content}</p>
          
        </div>
    </div>
  )
}

export default BlogPost