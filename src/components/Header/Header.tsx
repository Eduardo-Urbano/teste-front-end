import {
  CreditCard,
  Heart,
  Search,
  ShieldCheck,
  Truck,
  User,
  ShoppingCart,
  Crown,
  Package,
} from 'lucide-react'
import styles from './Header.module.scss'
import { Logo } from '../Logo/Logo'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span><ShieldCheck size={16} /> Compra <strong>100% segura</strong></span>
        <span><Truck size={16} /> <strong>Frete grátis</strong> acima de R$ 200</span>
        <span><CreditCard size={16} /> <strong>Parcele</strong> suas compras</span>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.logo}><Logo /></div>

        <label className={styles.search}>
          <span>Buscar produto</span>
          <input type="text" placeholder="O que você está buscando?" />
          <Search size={20} />
        </label>

        <nav className={styles.actions} aria-label="Ações do usuário">
          <button type="button" aria-label="Pedidos"><Package size={24} /></button>
          <button type="button" aria-label="Favoritos"><Heart size={24} /></button>
          <button type="button" aria-label="Minha conta"><User size={24} /></button>
          <button type="button" aria-label="Carrinho"><ShoppingCart size={24} /></button>
        </nav>
      </div>

      <nav className={styles.menu} aria-label="Menu principal">
        <a href="#">Todas Categorias</a>
        <a href="#">Supermercado</a>
        <a href="#">Livros</a>
        <a href="#">Moda</a>
        <a href="#">Lançamentos</a>
        <a href="#">Ofertas do dia</a>
        <a href="#"><Crown size={16} /> Assinatura</a>
      </nav>
    </header>
  )
}