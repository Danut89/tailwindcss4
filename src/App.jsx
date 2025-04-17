import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Divider from './components/Divider'
import BannerCTA from './components/BannerCTA'
import ScrollDown from './components/ScroolDown'  
import ProjectsCarousel from './components/ProjectsCarousel'




function App() {
  return (
    <>
    <div className="font-body text-text bg-background">
      <Navbar />
      <Hero />
      <Divider />
      <ScrollDown />
      <About />
      <Divider />
      <ProjectsCarousel />
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

