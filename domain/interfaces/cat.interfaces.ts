import type { ImageObjectUrl } from '../types/cat.types'

export interface ICatApiClient {
  fetchCatBlob(params?: Record<string, string>): Promise<Blob>
}

export interface ICatService {
  loadRandomImages(count: number): Promise<ImageObjectUrl[]>
}

