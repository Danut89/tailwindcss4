import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Divider from './components/Divider'
import BannerCTA from './components/BannerCTA'



function App() {
  return (
    <>
    <div className="font-body text-text bg-background">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <BannerCTA />
      <Divider />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App

