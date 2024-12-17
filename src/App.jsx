import './App.css'
import Navbar from './components/Navbar.jsx'
import Contact from './pages/Contact.jsx'
import Banner from './pages/Banner.jsx'
import Hero from './pages/Hero.jsx'
import WhyHireMe from './pages/WhyHireMe.jsx'
import Project from './pages/ProjectShowcase.jsx'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Project />
    <WhyHireMe />
    <Banner />
    <Contact />
    </>
  )
}

export default App
