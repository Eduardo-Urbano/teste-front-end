import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h3>Econverse</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <h4>Institucional</h4>
          <a href="#">Sobre nós</a>
          <a href="#">Contato</a>
        </div>

        <div>
          <h4>Ajuda</h4>
          <a href="#">Suporte</a>
          <a href="#">FAQ</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Econverse. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}