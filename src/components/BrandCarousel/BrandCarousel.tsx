import styles from './BrandCarousel.module.scss'
import { Logo } from '../Logo/Logo'

const brands = [1, 2, 3, 4, 5]

export function BrandCarousel() {
  return (
    <section className={styles.section} aria-label="Navegue por marcas">
      <h2>Navegue por marcas</h2>

      <div className={styles.carousel}>
        {brands.map((brand) => (
          <button key={brand} className={styles.brandCard} type="button">
            <div className={styles.logoCircle}>
              <Logo />
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}