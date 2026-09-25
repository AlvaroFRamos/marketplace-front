import { useQuery } from '@tanstack/react-query'
import { productsApi } from './api'

export const productKeys = {
  all: ['products'],
  list: (params) => [...productKeys.all, 'list', params],
  detail: (id) => [...productKeys.all, 'detail', id],
}

export function useProducts(params = {}) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => productsApi.list(params),
  })
}

export function useProduct(id) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productsApi.getById(id),
    enabled: Boolean(id),
  })
}
