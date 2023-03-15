
import '../styles/globals/reset.scss'	

import Layout from '@/layout/default.jsx'
import Svg from '@/components/ions/svg'


export default function App({ Component, pageProps }) {
  return (
    
    <Layout>
      <Svg />
      <Component {...pageProps} />
    </Layout>
  )
}
