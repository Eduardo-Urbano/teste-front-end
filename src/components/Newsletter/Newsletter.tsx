import styles from './Newsletter.module.scss'

export function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.fields}>
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Inscrever</button>
          </div>

          <label className={styles.terms}>
            <input type="checkbox" />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  )
}