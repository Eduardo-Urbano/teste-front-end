import type { Product } from '../../types/Product'
import styles from './ProductModal.module.scss'

interface ProductModalProps {
    product: Product
    onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <dialog className={styles.modal} open onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} type="button" onClick={onClose}>
        ×
        </button>

        <img src={product.photo} alt={product.productName} />

        <div className={styles.content}>
            <h2>{product.productName}</h2>

            <strong>
                {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                })}
            </strong>

            <p>{product.descriptionShort}</p>

            <div className={styles.actions}>
                <div className={styles.quantity}>
                    <button type="button">−</button>
                    <span>01</span>
                    <button type="button">+</button>
                </div>

                <button className={styles.buyButton} type="button">
                    Comprar
                </button>
            </div>
        </div>
      </dialog>
    </div>
  )
}