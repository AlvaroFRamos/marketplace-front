import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para o início</Link>
    </section>
  )
}
