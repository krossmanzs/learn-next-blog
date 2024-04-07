import Link from 'next/link'
import React from 'react'
import styles from "./menuCategories.module.css"

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/bloc?cat=style" className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
        <Link href="/bloc?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>Fashion</Link>
        <Link href="/bloc?cat=food" className={`${styles.categoryItem} ${styles.food}`}>Food</Link>
        <Link href="/bloc?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
        <Link href="/bloc?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>Culture</Link>
    </div>
  )
}

export default MenuCategories