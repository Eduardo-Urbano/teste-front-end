import { Header } from './components/Header/Header'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { CategoryMenu } from './components/CategoryMenu/CategoryMenu'
import { ProductSection } from './components/ProductSection/ProductSection'
import { PartnerBanner } from './components/PartnerBanner/PartnerBanner'
import { PartnerSection } from './components/PartnerSection/PartnerSection'

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroBanner />
        <CategoryMenu />
        <ProductSection />
        <PartnerSection />
        <ProductSection />
      </main>
    </>
  )
}

export default App