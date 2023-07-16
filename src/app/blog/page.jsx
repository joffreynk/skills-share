import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/blog.module.css";
import fetcher from "@/utils/fetcher";
import { notFound } from "next/navigation";

const Blog = async() => {

  const data = await fetcher('posts');
  
  return (
    <div className={styles.container}>
      {data.length ? 
     data.map(blog=>(
<Link key={blog._id} href={`/blog/${blog._id}`} className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src={blog.imgUrl}
            width={250}
            height={200}
            alt="blog picture"
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.textTitle}>{blog.title} </h3>
          <p className={styles.textDescription}>
           {blog.intro}
          </p>
        </div>
      </Link>
)) 
       : notFound}

    </div>
  );
};

export default Blog;
