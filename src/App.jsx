import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import CounterSection from "./components/countersection/CounterSection";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/Contact";
import Blog from "./components/Blog/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <CounterSection />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
