import { ofetch } from 'ofetch'

export interface RequestOptions {
  path: string
  query?: Record<string, string>
}

export class HttpClient {
  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  protected async getJson<T = unknown>({ path, query }: RequestOptions): Promise<T> {
    const url = `${this.baseUrl}${path}`
    return ofetch<T>(url, { query })
  }

  protected async getBlob({ path, query }: RequestOptions): Promise<Blob> {
    const url = `${this.baseUrl}${path}`
    return ofetch(url, { query, responseType: 'blob' }) as unknown as Promise<Blob>
  }
}

