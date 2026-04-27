import { useState } from 'react'
import heroImg from './assets/hero-banner.png'
import './styles/global.scss'
import { Header } from './components/Header/Header'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { CategoryMenu } from './components/CategoryMenu/CategoryMenu'


function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <CategoryMenu />
      </main>
    </>
  )
}

export default App
