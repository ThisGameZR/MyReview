import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Feature from "../components/home/Feature";
import Landing from "../components/home/Landing";
import Landing2 from "../components/home/Landing2";
import About from "../components/home/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-[5vh]"></div>
      <Landing2 />
      <Feature />
      <Landing />
      <About />
      <div className="h-[5vh]"></div>
      <Footer />
    </>
  );
}
