import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from "../components/Header";
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div className='bg-[#F3F2EF]  dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6'>
            <Head>
                <title>Feed | LinkedIn</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <main className="flex justify-center gap-x-5 px-4 sm:px-12">
                <div className="flex flex-col md:flex-row gap-5">
                    {/* sidebar */}
                    <Sidebar />
                </div>
            </main>

            {/* <button onClick={signOut}>
                Sign Out
            </button> */}

        </div>
    )
}
