import '../styles/main.scss'	
import '../styles/globals/reset.scss'	

import Layout from '@/layout/default.jsx'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
