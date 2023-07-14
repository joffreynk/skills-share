
import styles from '@/styles/contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} >Let&apos;s keep in Touch</h1>
      <div className={styles.cardContainer} >
        <div  className={styles.item} >
          <Image fill alt='call center' src='/callcenter.jpg' />
        </div>
        <div  className={styles.item} >
          <form action="" className={styles.form}>
            <input className={styles.input} placeholder='Name' type="text" name="name" id="name" />
            <input className={styles.input} placeholder='Email' type="email" name="email" id="email" />
            <textarea className={styles.input} placeholder='Message' name="message" id="message" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact