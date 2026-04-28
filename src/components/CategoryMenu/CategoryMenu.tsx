import {
  Smartphone,
  ShoppingCart,
  Wine,
  Wrench,
  HeartPulse,
  Dumbbell,
  Shirt,
} from 'lucide-react'
import styles from './CategoryMenu.module.scss'

const categories = [
  { name: 'Tecnologia', icon: Smartphone },
  { name: 'Supermercado', icon: ShoppingCart },
  { name: 'Bebidas', icon: Wine },
  { name: 'Ferramentas', icon: Wrench },
  { name: 'Saúde', icon: HeartPulse },
  { name: 'Esportes', icon: Dumbbell },
  { name: 'Moda', icon: Shirt },
]

export function CategoryMenu() {
  return (
    <section className={styles.categoryMenu} aria-label="Categorias">
      <div className={styles.container}>
        {categories.map((category, index) => {
          const Icon = category.icon

          return (
            <button
              key={category.name}
              className={`${styles.card} ${index === 0 ? styles.active : ''}`}
              type="button"
              aria-label={`Categoria ${category.name}`}
            >
              <div className={styles.icon}>
                <Icon size={34} aria-hidden="true" />
              </div>

              <span>{category.name}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}