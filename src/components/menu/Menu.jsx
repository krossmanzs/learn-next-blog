import Link from 'next/link'
import React from 'react'
import MenuCategories from '../menuCategories/MenuCategories'
import MenuPosts from '../menuPosts/MenuPosts'
import styles from "./menu.module.css"

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* What's Hot */}
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false}/>

      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>

      {/* Chosen by the editor */}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true}/>
      
    </div>
  )
}

export default Menu