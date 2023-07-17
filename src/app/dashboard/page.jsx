"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from '@/styles/dashboard.module.css'
import useSWR from 'swr'

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(`/api/posts${session?.data?.name && (`/?username=${session?.data?.name}`)}`, (...args) => (fetch(...args).then((res) =>res.json())));

  if (session?.status === "loading")
    return <LoadingSpinner title="Skills share is autherizing you" />;
  if (session?.status === "unauthenticated") {
    router?.push("/dashboard/login");
    return;
  }


  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {data &&data.length
          ? data.map((blog) => (
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
            ))
          : "oooops! you do't have any pos"}
      </div>
    </div>
  );
};

export default Dashboard;
