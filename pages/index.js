import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Rumi| Home</title>
      <meta name='keywords' content='rumi'/>
    </Head>
    <div >
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nihil molestiae praesentium, saepe perspiciatis voluptatibus provident alias voluptate magni illum quas cumque tempore, ullam vero laudantium! Ad amet ipsa sunt!</p>
      <p  className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde nihil molestiae praesentium, saepe perspiciatis voluptatibus provident alias voluptate magni illum quas cumque tempore, ullam vero laudantium! Ad amet ipsa sunt!</p>
      <Link href='/rumi'>
      <a  className={styles.btn}>See Rumi Listing</a></Link>
  </div>
    </>
  )
}
