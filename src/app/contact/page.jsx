
import CustomButton from '@/components/CustomButton'
import styles from '@/styles/contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} >Let&apos;s keep in Touch</h1>
      <div className={styles.cardContainer} >
        <div  className={styles.item} >
          <Image className={styles.img} fill alt='call center' src='/callcenter.png' />
        </div>
        <div  className={styles.item} >
          <form action="" className={styles.form}>
            <input className={styles.input} placeholder='Full name' type="text" name="name" id="name" />
            <input className={styles.input} placeholder='e-mail' type="email" name="email" id="email" />
            <textarea className={styles.input} placeholder='Message' name="message" id="message" cols="30" rows="10"></textarea>
            <CustomButton text='Send' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact