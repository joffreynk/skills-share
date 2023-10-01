"use client";

import useSWR from "swr";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "@uploadthing/react/styles.css";

import LoadingSpinner from "@/components/LoadingSpinner";
import styles from "@/styles/dashboard.module.css";
import { UploadButton } from "@/utils/uploadthing";

const Dashboard = () => {
  const [error, setError] = useState(false);
  const [ImageUrl, setImageUrl] = useState('')
  const session = useSession();
  const router = useRouter();
  const {
    data,
    error: loadingError,
    mutate,
    isLoading,
  } = useSWR(`/api/posts/?username=${session?.data?.user?.name}`, (...args) =>
    fetch(...args).then((res) => res.json())
  );

  if (session?.status === "loading")
    return <LoadingSpinner title="Skills share is autherizing you" />;
  if (session?.status === "unauthenticated") {
    router?.push("/dashboard/login");
    return;
  }

  const deletePost = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        contentType: "application/json",
      });
      mutate();
      e.target.reset();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const intro = e.target[1].value;
    const content = e.target[2].value;

    try {
      const post = await fetch("/api/posts", {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify({
          title,
          intro,
          imgUrl: ImageUrl,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      if(post.ok){
        e.target.reset();
        setImageUrl('')
        setError(false)
      }
    } catch (error) {
      setError(true)
      throw new Error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading ? (
          <LoadingSpinner title="loading blog posts" />
        ) : loadingError ? (
          "Failed to fetch your posts"
        ) : data.length > 0 ? (
          data.map((blog) => (
            <div key={blog._id} className={styles.card}>
              <Link href={`/blog/${blog._id}`} className={styles.content}>
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
              <button
                className={styles.delete}
                onClick={() => deletePost(blog._id)}
              >
                {" "}
                delete{" "}
              </button>
            </div>
          ))
        ) : (
          "oooops! you do't have any post"
        )}
      </div>
      <div className={styles.createPosts}>
        <h2 className={styles.title}>post a blog</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Post title"
            minLength={2}
            className={styles.input}
            required
          />
          <input
            type="text"
            name="intro"
            id="intro"
            placeholder="Post Introduction"
            className={styles.input}
            required
          />
          <div>
            {ImageUrl.length > 5 ? (
              <Image src={ImageUrl} width={250} height={150} alt="blog picture" />
            ) : (
              <UploadButton
                className={styles.uploadButton}
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  setImageUrl(res[0].url);
                }}
                onUploadError={(error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              />
            )}
          </div>


          <textarea
            name="content"
            className={styles.input}
            id="content"
            cols="20"
            placeholder="post description"
            rows="10"
          ></textarea>
          <div>
          <button className={styles.btn}>Add post</button>
          </div>
          {error && <p>check your input data!</p>}
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
