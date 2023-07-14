import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src="/userdesign.jpg"
            width={250}
            height={200}
            alt="blog picture"
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.textTitle}>Creative Mind</h3>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius
            libero vel commodi quo! Delectus, eius itaque. Numquam explicabo
            officiis omnis pariatur, atque odio molestiae sit doloribus iusto,
            voluptates tempora. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique nam, voluptas labore, maxime, laboriosam
            molestias deleniti nemo voluptatibus quo esse ipsa totam minus non
            enim iste in. Eos, quam sunt?
          </p>
        </div>
      </Link>


      <Link href="/" className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src="/userdesign.jpg"
            width={250}
            height={200}
            alt="blog picture"
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.textTitle}>Creative Mind</h3>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius
            libero vel commodi quo! Delectus, eius itaque. Numquam explicabo
            officiis omnis pariatur, atque odio molestiae sit doloribus iusto,
            voluptates tempora. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique nam, voluptas labore, maxime, laboriosam
            molestias deleniti nemo voluptatibus quo esse ipsa totam minus non
            enim iste in. Eos, quam sunt?
          </p>
        </div>
      </Link>


      <Link href="/" className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src="/userdesign.jpg"
            width={250}
            height={200}
            alt="blog picture"
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.textTitle}>Creative Mind</h3>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eius
            libero vel commodi quo! Delectus, eius itaque. Numquam explicabo
            officiis omnis pariatur, atque odio molestiae sit doloribus iusto,
            voluptates tempora. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique nam, voluptas labore, maxime, laboriosam
            molestias deleniti nemo voluptatibus quo esse ipsa totam minus non
            enim iste in. Eos, quam sunt?
          </p>
        </div>
      </Link>
    
    </div>
  );
};

export default Blog;
