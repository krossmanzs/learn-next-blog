import React from 'react'
import Image from 'next/image'
import styles from "./featured.module.css"

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,Leenoogs here!</b> Discover my stories and  creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" className={styles.image} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit placeat incidunt soluta aliquam odit ipsum, iusto quo quisquam facilis earum error aliquid repellendus! Qui aliquid, pariatur ducimus recusandae, aliquam dolore sed saepe ad nemo at ex molestiae, quaerat incidunt. Voluptatum, consequatur sit vero iusto praesentium aperiam laborum amet magnam doloremque.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured