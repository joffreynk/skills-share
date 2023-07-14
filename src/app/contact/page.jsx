
import styles from '@/styles/contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Let&apos;s keep in Touch</h1>
      <div className={styles.cardContainer} >
        <div  className={styles.imgContainer} >
          <Image src='/callcenter.jpg' />
        </div>
        <div  className={styles.formContainer} >
          <form action="">
            <input type="text" name="name" id="name" />
            <input type="email" name="email" id="email" />
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact