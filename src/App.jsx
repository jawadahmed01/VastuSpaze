import Header from "./compounts/Header";
import Hero from "./compounts/Hero";
import Portfolio from "./compounts/Portfolio";
import Reviews from "./compounts/Reviews";
import Services from "./compounts/Services";
import Contact from "./compounts/Contact";
import Footer from "./compounts/Footer";
import About from "./compounts/About";

function App() {
  return (
    <>
         <div className="page-wrapper">
             <Header />
             <Hero />
             <Services />
             <Portfolio />
             <Reviews />
             <About />
             <Contact />
             <Footer />
         </div>
    </>
  )
}
export default App;