import styles from './BrandCarousel.module.scss'

const brands = ['Logo', 'Logo', 'Logo', 'Logo', 'Logo']

export function BrandCarousel() {
  return (
    <section className={styles.section} aria-label="Navegue por marcas">
      <h2>Navegue por marcas</h2>

      <div className={styles.carousel}>
        {brands.map((brand, index) => (
          <button key={index} className={styles.brandCard} type="button">
            <div className={styles.logoCircle}>{brand}</div>
          </button>
        ))}
      </div>
    </section>
  )
}