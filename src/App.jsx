// src/App.jsx
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext'
const {darkmode} = useDarkMode
function App() {
  return (
    <DarkModeProvider>
    <div className={`w-[100%] flex flex-col items-center justify-center font-sans ${darkmode ? "bg-gray-800 text-white" : "bg-white text-gray-900"} overflow-x-hidden`}>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <footer className={`text-center p-4 text-sm ${darkmode ? "bg-gray-800 text-gray-400" : "bg-white text-gray-500"}`}>
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </footer>
    </div>
    </DarkModeProvider>
  )
}

export default App
