import { Header } from './components/Header/Header'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { CategoryMenu } from './components/CategoryMenu/CategoryMenu'
import { ProductSection } from './components/ProductSection/ProductSection'
import { PartnerSection } from './components/PartnerSection/PartnerSection'
import { BrandCarousel } from './components/BrandCarousel/BrandCarousel'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <CategoryMenu />
        <ProductSection />
        <PartnerSection />
        <BrandCarousel />
        <ProductSection />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}

export default App