import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Results from './components/Results'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Results />
        <About />
        <Contact />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Marketer Portfolio</p>
          <a href="#home" className="hover:text-gray-900">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App