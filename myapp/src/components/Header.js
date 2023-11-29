import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className={styles.main_container}>
        <div className={styles.header_container}>
            <nav className={styles.navbar}>
            <section><Link to='/events'>Events</Link> </section>
            <section><Link to='/calendar'> Calendar</Link></section>
            <section><Link to='/'> Explore</Link></section>
            </nav>
        </div>
    </div>
  )
}

export default Header