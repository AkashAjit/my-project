import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import "../styles/globals.css";
import react,{useEffect} from "react";


export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
