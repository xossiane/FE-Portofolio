import { THeader, TFooter } from '@/components/organisms'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
    <>
        <Head>
            <title>Portfolio-test</title>
        </Head>
        <THeader />
            <main>{children}</main>
        <TFooter />
    </>
    )
}