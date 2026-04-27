import { Header } from './components/Header/Header'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { CategoryMenu } from './components/CategoryMenu/CategoryMenu'
import { ProductSection } from './components/ProductSection/ProductSection'

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroBanner />
        <CategoryMenu />
        <ProductSection />
      </main>
    </>
  )
}

export default App