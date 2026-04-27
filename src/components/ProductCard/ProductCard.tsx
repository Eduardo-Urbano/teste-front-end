import type { Product } from '../../types/Product'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <button className={styles.button} type="button" onClick={() => onClick(product)}>
        <img src={product.photo} alt={product.productName} />

        <h3>{product.productName}</h3>

        <p className={styles.description}>{product.descriptionShort}</p>

        <strong className={styles.price}>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>

        <span className={styles.buyButton}>Comprar</span>
      </button>
    </article>
  )
}