import { PartnerBanner } from '../PartnerBanner/PartnerBanner'
import styles from './PartnerSection.module.scss'

export function PartnerSection() {
  return (
    <section className={styles.section} aria-label="Parceiros">
      <PartnerBanner />
      <PartnerBanner />
    </section>
  )
}