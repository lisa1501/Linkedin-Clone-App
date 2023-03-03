import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { signOut } from 'next-auth/react'
import Header from "../components/Header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Head>
                <title>LinkedIn</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <button onClick={signOut}>
                Sign Out
            </button>
        </div>
    )
}
