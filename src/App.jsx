import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from "./components/Footer";

function App() {
  
  return (
    <>
      <Header />
      <main className="container py-5">
        <h1>Bienvenido a nuestra tienda</h1>
        <p>
          Este será nuestro e-commerce demo.
        </p>
      </main>
      <Footer />
    </>
  )
}

export default App
