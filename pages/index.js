import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { signOut } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Head>
                <title>LinkedIn</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <button onClick={signOut}>
                Sign Out
            </button>
        </div>
    )
}
