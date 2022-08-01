import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";
import Link from 'next/link';


export default function Navbar(){
    <nav className={styles.navbar}>
      <div className={styles.options}>
        <Link href="/">Home</Link>
        <a href="#">About me</a>
        <a href="/#Contact">Contact Info</a>
        <a href="/#Education">Education</a>
        <a href="/#Work">Work Experience</a>
        <a href="/#Volunter">Volunteer Experience</a>
        <a href="Projects">Projects &amp; Work Done</a>
      </div>
    </nav>
  }
  