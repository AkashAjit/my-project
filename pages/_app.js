import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import '../styles/globals.css'



export default function App({ Component, pageProps }) {

  return( 
  <>
  <Navbar/>
  <Component {...pageProps} />
  </>
  )
}
