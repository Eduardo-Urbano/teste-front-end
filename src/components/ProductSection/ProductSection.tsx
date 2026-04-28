import { useEffect, useRef, useState } from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import { getProducts } from '../../services/productService'
import type { Product } from '../../types/Product'
import styles from './ProductSection.module.scss'
import { ProductModal } from '../ProductModal/ProductModal'

export function ProductSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const carouselRef = useRef<HTMLDivElement>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error(error)
        setError('Não foi possível carregar os produtos.')
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    if (!carouselRef.current) return

    event.preventDefault()
    carouselRef.current.scrollLeft += event.deltaY
  }

  function scrollCarousel(direction: 'left' | 'right') {
    if (!carouselRef.current) return

    carouselRef.current.scrollBy({
      left: direction === 'left' ? -280 : 280,
      behavior: 'smooth',
    })
  }

  if (loading) {
    return <p className={styles.status}>Carregando produtos...</p>
  }

  if (error) {
    return <p className={styles.status}>{error}</p>
  }

  return (
    <section className={styles.section} id="produtos">
      <div className={styles.titleWrapper}>
        <h2>Produtos relacionados</h2>
      </div>

      <div className={styles.tabs}>
        <button type="button">Celular</button>
        <button type="button">Acessórios</button>
        <button type="button">Tablets</button>
        <button type="button">Notebooks</button>
        <button type="button">TVs</button>
        <button type="button">Ver todos</button>
      </div>

      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          type="button"
          onClick={() => scrollCarousel('left')}
          aria-label="Voltar produtos"
        >
          ‹
        </button>

        <div
          ref={carouselRef}
          className={styles.grid}
          onWheel={handleWheel}
        >
          {products.map((product) => (
            <ProductCard
              key={product.productName}
              product={product}
              onClick={setSelectedProduct}
            />
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          type="button"
          onClick={() => scrollCarousel('right')}
          aria-label="Avançar produtos"
        >
          ›
        </button>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  )
}