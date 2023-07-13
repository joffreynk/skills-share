
import styles from '@/styles/about.module.css';
import Image from 'next/image';

const About = () => {
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.img} width={800} height={500} src='/hero.jpg'  alt='about us' />
        <div className={styles.imgText}>
          <h1>your success is our priority</h1>
          <p>Lorem ipsum dolor, sit amet consectetur </p>
        </div>
      </div>
      <div className={styles.aboutDiscriptionContainer}>
        <div className={styles.item} >
          <h1 className={styles.title}>Who are we?</h1>
          <div className={styles.description}>
            <p className={styles.descText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cumque doloribus mollitia ullam fugiat. Consectetur quas tempore iure, ad nemo explicabo nam, voluptatem quisquam sequi pariatur, impedit corrupti assumenda dolorem?</p>
            <p className={styles.descText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam aspernatur, rem ullam, impedit sapiente eius necessitatibus enim, est praesentium ipsa officia magni sunt ad laboriosam recusandae eos earum atque.</p>
            <p className={styles.descText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ratione quidem hic sit voluptas ipsa nulla autem. Cumque, itaque. Quo dolor quod eius quasi maxime quis, debitis aliquid esse hic?</p>
          </div>
        </div>

        <div className={styles.item} >
          <h1 className={styles.title}>what are our services?</h1>
          <div className={styles.description}>
            <p className={styles.descText}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cumque doloribus mollitia ullam fugiat. Consectetur quas tempore iure, ad nemo explicabo nam, voluptatem quisquam sequi pariatur, impedit corrupti assumenda dolorem?</p>
          <ul>
            <li>Fast Mobile app and website design</li>
            <li>UI & UX design</li>
            <li>poster, banners, cards and other designs</li>
          </ul>
          <button type="button">Contact us</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About