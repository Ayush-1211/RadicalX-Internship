import '../styles/globals.css'
import Header from '@/templates/Header'

function Myapp({Component, pageProps}) {
    return (
        <>
          <Header />
          <Component {...pageProps} />
        </>
    )
}
export default Myapp