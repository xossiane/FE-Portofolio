import { THeader, TFooter } from '@/components/organisms'
import Head from 'next/head'
import { Epilogue } from '@next/font/google'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

const epilogue = Epilogue({ subsets: ['latin'] })

export default function Layout({ children }) {
 

    return (
    <>
    
        <Head>
            <title>Portfolio Test</title>
        </Head>
        <div className={epilogue.className}>
        <Header />
            <main >{children}</main>
        <Footer />
        
        </div>
    </>
    )
}