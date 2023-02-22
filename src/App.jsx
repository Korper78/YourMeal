import { Catalog } from "./components/Catalog/Catalog.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { Header } from "./components/Header/Header.jsx"
import { Navigation } from "./components/Navigation/Navigation.jsx"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

export const App = () => {
  // const [count, setCount] = useState(0)

  return (
  <>
    <Header />
    <main>
      <Navigation />
      <Catalog />
    </main>
    <Footer />
  </>
  )
}
