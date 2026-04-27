import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span>Compra 100% segura</span>
        <span>Frete grátis acima de R$ 200</span>
        <span>Parcele suas compras</span>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.logo}>econverse</div>

        <label className={styles.search}>
          <span>Buscar produto</span>
          <input type="text" placeholder="O que você está buscando?" />
        </label>

        <nav className={styles.actions} aria-label="Ações do usuário">
          <button type="button">♡</button>
          <button type="button">👤</button>
          <button type="button">🛒</button>
        </nav>
      </div>

      <nav className={styles.menu} aria-label="Menu principal">
        <a href="#">Todas Categorias</a>
        <a href="#">Supermercado</a>
        <a href="#">Livros</a>
        <a href="#">Moda</a>
        <a href="#">Lançamentos</a>
        <a href="#">Ofertas do dia</a>
      </nav>
    </header>
  )
}