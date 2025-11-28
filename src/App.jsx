import React from 'react'
import Navigation from './components/Navigation/Navigation'
import "./App.css"
import ContactHeader from './components/contact header/ContactHeader'
import ContactForm from './components/contact form/ContactForm'

function App() {
  return (
    <>
  
    <Navigation></Navigation>
    <main className='main_container'>
        <ContactHeader></ContactHeader>
    <ContactForm></ContactForm>

    </main>
  
      </>
  )
}

export default App