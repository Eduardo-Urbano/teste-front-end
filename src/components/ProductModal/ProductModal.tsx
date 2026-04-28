import type { Product } from '../../types/Product'
import { useState } from 'react'
import styles from './ProductModal.module.scss'

interface ProductModalProps {
    product: Product
    onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
    const [quantity, setQuantity] = useState(1)

    function decreaseQuantity() {
        setQuantity((current) => Math.max(1, current - 1))
    }

    function increaseQuantity() {
        setQuantity((current) => current + 1)
    }

    return (
        <div className={styles.overlay} onClick={onClose} role="presentation">
        <dialog className={styles.modal} open aria-labelledby="modal-product-title" onClick={(e) => e.stopPropagation()}>
            <button 
                className={styles.closeButton} 
                type="button" 
                onClick={onClose} 
                aria-label="Fechar modal"
            >
                ×
            </button>

            <img src={product.photo} alt={product.productName} />

            <div className={styles.content}>
                <h2 id="modal-product-title">{product.productName}</h2>

                <strong>
                    {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    })}
                </strong>

                <p>{product.descriptionShort}</p>

                <div className={styles.actions}>
                    <div className={styles.quantity}>
                        <button type="button" onClick={decreaseQuantity} aria-label="Diminuir quantidade">
                            −
                        </button>

                        <span aria-label={`Quantidade selecionada: ${quantity}`}>
                        {String(quantity).padStart(2, '0')}
                        </span>

                        <button type="button" onClick={increaseQuantity} aria-label="Aumentar quantidade">
                            +
                        </button>
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