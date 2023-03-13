import { THeader, TFooter } from '@/components/organisms'
import Head from 'next/head'
import { Epilogue } from '@next/font/google'
import Footer from '@/components/organisms/Footer'

const epilogue = Epilogue({ subsets: ['latin'] })

export default function Layout({ children }) {
 

    return (
    <>
        <Head>
            <title>Portfolio Test</title>
        </Head>
        <div className={epilogue.className}>
        <THeader />
            <main >{children}</main>
        <Footer />
        
        </div>
    </>
    )
}