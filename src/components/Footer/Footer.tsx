import styles from './Footer.module.scss'
import { Logo } from '../Logo/Logo'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Logo/>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className={styles.social}>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </a>

            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1z" />
              </svg>
            </a>

            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 10v7" />
                <path d="M8 7v.1" />
                <path d="M12 17v-4c0-2 4-2 4 0v4" />
                <path d="M12 10v7" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4>Institucional</h4>
          <a href="#">Sobre nós</a>
          <a href="#">Movimento</a>
          <a href="#">Trabalhe conosco</a>
        </div>

        <div>
          <h4>Ajuda</h4>
          <a href="#">Suporte</a>
          <a href="#">FAQ</a>
          <a href="#">Contato</a>
        </div>

        <div>
          <h4>Termos</h4>
          <a href="#">Termos e condições</a>
          <a href="#">Privacidade</a>
          <a href="#">Trocas e devoluções</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Econverse. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}