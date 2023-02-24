import { Provider } from "react-redux"
import { Catalog } from "./components/Catalog/Catalog.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { Header } from "./components/Header/Header.jsx"
import { Navigation } from "./components/Navigation/Navigation.jsx"
import { store } from "./store/index.js"
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

export const App = () => {
  // const [count, setCount] = useState(0)

  return (
  <Provider store={store}>
    <Header />
    <main>
      <Navigation />
      <Catalog />
    </main>
    <Footer />
  </Provider>
  )
}
