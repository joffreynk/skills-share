import Image from 'next/image'

import styles from '@/styles/homepage.module.css'
import CustomButton from '@/components/CustomButton'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.left}>

        <h1 className={styles.title}>The best way to learn is to share your skills with others.</h1>
        <p className={styles.description}>Join a large community, learn by sharing what you know and grow your network.</p>
        <CustomButton url='/portfolio' text='see our works' />
      </div>
      <div>
        <Image src='/hero.jpg' width={700} height={500} alt='hello image' />
      </div>
      <div>
      </div>
    </main>
  )
}
