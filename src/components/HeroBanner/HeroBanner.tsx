import heroImage from '../../assets/hero-banner.png'
import styles from './HeroBanner.module.scss'

export function HeroBanner() {
  return (
    <section className={styles.hero} aria-label="Promoção Black Friday">
      <img src={heroImage} alt="" className={styles.image} />

      <div className={styles.content}>
        <h1>Venha conhecer nossas promoções</h1>
        <p>50% Off nos produtos</p>
        <a href="#produtos">Ver produto</a>
      </div>
    </section>
  )
}