import Image from 'next/image'
import React from 'react'
import { Card } from '../card/Card'
import Pagination from '../pagination/Pagination'
import styles from "./cardList.module.css"

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <Card/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList