import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'

describe('ProductCard', () => {
  it('mostra nome e preço formatado', () => {
    render(<ProductCard product={{ id: 1, name: 'Camiseta', price: 49.9 }} />)

    expect(screen.getByRole('heading', { name: 'Camiseta' })).toBeInTheDocument()
    expect(screen.getByText(/R\$\s?49,90/)).toBeInTheDocument()
  })
})
