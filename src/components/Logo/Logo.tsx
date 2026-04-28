import styles from './Logo.module.scss'

export function Logo() {
  return (
    <div className={styles.logo} aria-label="Econverse">
      <span className={styles.ec}>ec</span>
      <span className={styles.onverse}>onverse</span>
    </div>
  )
}