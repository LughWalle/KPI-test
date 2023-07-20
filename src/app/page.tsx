'use client'

import Login from '@/components/Login'
import React from 'react'
import styles from './page.module.css'

const InitialPage = () => {
  return (
    <div className={styles.main}>
      <Login />
    </div>
  )
}

export default InitialPage