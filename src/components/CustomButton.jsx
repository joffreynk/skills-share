import Link from 'next/link'
import styles from '@/styles/customButton.module.css'

const CustomButton = ({url, text}) => (
    <Link href={url||'/'} ><button type="button" className={styles.container}>{text}</button></Link>
  )

export default CustomButton