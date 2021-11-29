import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css';
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import MainPage from '../components/MainPage';
import GameCard from '../components/GameCard';
import Games from './games';
import GameList from '../components/GameList';


export default function Home() {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Wiki-Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Nav />
      <main className={styles.main}>
      <Sidebar />
      <MainPage />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}



