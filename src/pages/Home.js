import React from 'react'
import styles from './styles/pages.module.css'
import Banner from '../Components/static/Home/banner/Banner'

function Home() {
  return (
    <div className={styles.main}>
      <Banner/>
    </div>
  )
}

export default Home