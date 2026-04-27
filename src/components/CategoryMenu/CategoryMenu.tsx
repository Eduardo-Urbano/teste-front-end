import styles from './CategoryMenu.module.scss'

const categories = [
  'Tecnologia',
  'Supermercado',
  'Bebidas',
  'Ferramentas',
  'Saúde',
  'Esportes',
  'Moda',
]

export function CategoryMenu() {
  return (
    <section className={styles.categoryMenu} aria-label="Categorias">
      <div className={styles.container}>
        {categories.map((category) => (
          <button key={category} className={styles.card} type="button">
            <div className={styles.icon}>⬚</div>
            <span>{category}</span>
          </button>
        ))}
      </div>
    </section>
  )
}