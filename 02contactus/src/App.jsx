import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation'

import './App.css'
import Contact from './components/ContactForm/Contact'
function App() {

  return (
    <>
      
        <Navigation />
        <main className="main_container">
        <ContactHeader />
        <Contact />
      </main>
    </>
  )
}

export default App
