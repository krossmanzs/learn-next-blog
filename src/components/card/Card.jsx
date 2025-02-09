import styles from "./card.module.css"
import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="">
                <h1>{item.title}</h1>
            </Link>
            <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed rem possimus omnis error? Accusamus laboriosam consequuntur minima at ratione consectetur doloribus consequatur sequi...</p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}
