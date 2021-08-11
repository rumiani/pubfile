
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Customers from '../comps/customers'
import Services from '../comps/Services'
import Video from '../comps/Video'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
export default function Home() {
  return (
    <>
    <Head>
      <title>Rumi</title>
      <meta name='keywords' content='rumi'/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous"/>
    </Head>
    <Navbar/>
    <Services/>
    <Video/>
    <Customers/>
    <Footer/>
    </>
  )
}
