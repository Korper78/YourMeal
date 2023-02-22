
import { Container } from "./components/Container/Container.jsx"
import { Header } from "./components/Header/Header.jsx"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

export const App = () => {
  // const [count, setCount] = useState(0)

  return (
  <>
    <Header />
    <main>
      <nav>
        <Container className='navigation__container'/>
      </nav>
      <section></section>
    </main>
    <footer></footer>
  </>
  )
}
