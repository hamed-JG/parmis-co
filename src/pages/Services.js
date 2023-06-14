import React from 'react'
import styles from './styles/pages.module.css'
import Service from '../Components/static/Services/services/Service'
import Goal from '../Components/static/Services/ourGoal/Goal'
import Icons from '../Components/static/Services/icons/Icons'

function Services() {
  return (
    <div className={styles.main}>
      <Service/>
      <Goal/>
      <Icons/>
    </div>
  )
}

export default Services