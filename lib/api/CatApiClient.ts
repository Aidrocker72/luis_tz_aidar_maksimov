import type { ICatApiClient } from '@/domain/interfaces/cat.interfaces'
import { HttpClient } from '../http/HttpClient'

export class CatApiClient extends HttpClient implements ICatApiClient {
  async fetchCatBlob(params?: Record<string, string>): Promise<Blob> {
    return this.getBlob({ path: '/cat', query: params })
  }
}

