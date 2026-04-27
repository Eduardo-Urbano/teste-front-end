import styles from './PartnerBanner.module.scss'

export function PartnerBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <h2>Parceiros</h2>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <button type="button">Confira</button>
      </div>
    </section>
  )
}