"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from '@/styles/dashboard.module.css'
import useSWR from 'swr'

const Dashboard = () => {
  const [error, setError] = useState(false)
  const session = useSession();
  const router = useRouter();
const { data, error: loadingError, isLoading } = useSWR(`/api/posts/?username=${session?.data?.name}`, (...args) => (fetch(...args).then((res) =>res.json())));

  if (session?.status === "loading")
    return <LoadingSpinner title="Skills share is autherizing you" />;
  if (session?.status === "unauthenticated") {
    router?.push("/dashboard/login");
    return;
  }


  const handleSubmit = async(e) =>{
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        'contentType': 'application/json',
        body: JSON.stringify({name, email, password})
      });
      error && setError(false);
      res.ok && router.push('/dashboard/login/?message=Account successfully registered')
    } catch (error) {
      e.target[2].value = '';
      setError(true)
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading ? <LoadingSpinner title='loading blog posts' /> : loadingError ? 'Failed to fetch your posts' : data.length>0 ? data.map((blog) => (
              <Link
                key={blog._id}
                href={`/blog/${blog._id}`}
                className={styles.content}
              >
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
                  <p className={styles.textDescription}>{blog.intro}</p>
                </div>
              </Link>
            )): "oooops! you do't have any pos"}
      </div>
      <div className={styles.createPosts}>
      <h2 className={styles.title}>post a blog</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" placeholder='Post title' minLength={2} className={styles.input}required  />
        <input type="text" name="intro" id="intro" placeholder='Post Introduction' className={styles.input} required />
        <input type="url" name="imgUrl" id="imgUrl" placeholder='Image url' minLength={4} className={styles.input}required  />
        <textarea name="content" className={styles.input}  id="content" cols="20" placeholder="post description" rows="10"></textarea>
        <button  className={styles.btn}>Add post</button>
        {error && (<p>check your input data!</p>)}
      </form>
    </div>
    </div>
  );
};

export default Dashboard;
