import type { Product } from '../../types/Product'
import styles from './ProductCard.module.scss'

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const oldPrice = product.price * 1.07

  return (
    <article className={styles.card}>
      <button
        className={styles.button}
        type="button"
        onClick={() => onClick(product)}
        aria-label={`Ver detalhes de ${product.productName}`}
      >
        <img src={product.photo} alt={product.productName} />

        <h3>{product.descriptionShort || product.productName}</h3>

        <span className={styles.oldPrice}>
          {oldPrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>

        <strong className={styles.price}>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>

        <p className={styles.installments}>
          ou 2x de R$ 49,95 sem juros
        </p>

        <span className={styles.shipping}>Frete grátis</span>

        <span className={styles.buyButton}>Comprar</span>
      </button>
    </article>
  )
}