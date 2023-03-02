"use client"
import styles from "@/app/page.module.css";
import Link from "next/link";
import {useState} from "react";

export default function Menu() {

    const [counter, setCounter] = useState(0)

    const plusCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className={styles.main}>
            {counter}
            <button onClick={plusCounter}>Плюс</button>
            <Link href={'/'}>Главная</Link>
            <Link href={'/posts'}>Посты</Link>
        </div>
    )
}