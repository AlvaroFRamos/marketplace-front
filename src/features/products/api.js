import { http } from '@/lib/http'

export const productsApi = {
  list: (params = {}) => http.get(`/products?${new URLSearchParams(params)}`),
  getById: (id) => http.get(`/products/${id}`),
}
