"use client"
import styles from "@/app/page.module.css";
import {useEffect, useState} from "react";
import {getAllPosts, Post} from "@/app/services/post";

// interface PropsType{
//     posts:Post[]
// }


export default function Main() {
const [posts,setPosts]=useState<Post[]>([])

    useEffect(()=>{
        getAllPosts()
            .then((data)=>setPosts(data))
    },[])

    return (
            <div className={styles.main}>
                <h1 ></h1>
                <div>{posts.map((item)=><div key={item.id}>{item.title}</div>)}</div>
            </div>
    )
}