import Link from 'next/link'
import styles from '@/styles/customButton.module.css'

const CustomButton = ({url, text}) => (url?
    <Link href={url||'/'} ><button type="button" className={styles.container}>{text}</button></Link>
    :
    <button type="button" className={styles.container}>{text}</button>
  )

export default CustomButton