import { env } from '@/config/env'

export class HttpError extends Error {
  constructor(status, body) {
    super(`HTTP ${status}`)
    this.status = status
    this.body = body
  }
}

async function request(path, { body, headers, ...options } = {}) {
  const response = await fetch(`${env.apiUrl}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  })

  const data = response.status === 204 ? null : await response.json().catch(() => null)
  if (!response.ok) throw new HttpError(response.status, data)
  return data
}

export const http = {
  get: (path, options) => request(path, { ...options, method: 'GET' }),
  post: (path, body, options) => request(path, { ...options, method: 'POST', body }),
  put: (path, body, options) => request(path, { ...options, method: 'PUT', body }),
  patch: (path, body, options) => request(path, { ...options, method: 'PATCH', body }),
  delete: (path, options) => request(path, { ...options, method: 'DELETE' }),
}
