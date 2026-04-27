import type { Product } from '../types/Product'

const PRODUCTS_URL = '/api-produtos'

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL)

  console.log('response:', response)

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }

  const data = await response.json()

  console.log('data:', data)

  return data.products
}