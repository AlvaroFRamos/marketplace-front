import styles from './ProductCard.module.css'

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>{currency.format(product.price)}</p>
    </article>
  )
}
