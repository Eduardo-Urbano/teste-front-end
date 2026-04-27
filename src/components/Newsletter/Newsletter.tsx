import styles from './Newsletter.module.scss'

export function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Receba ofertas e novidades diretamente no seu e-mail</p>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <button type="submit">Inscrever</button>
        </form>
      </div>
    </section>
  )
}