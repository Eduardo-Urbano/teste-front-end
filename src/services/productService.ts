import type { Product } from '../types/Product'

const PRODUCTS_URL = 'COLE_AQUI_O_LINK_DO_JSON'

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL)

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }

  const data = await response.json()

  return data.products
}