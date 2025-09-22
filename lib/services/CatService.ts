import type { ICatService } from '@/domain/interfaces/cat.interfaces'
import type { ImageObjectUrl } from '@/domain/types/cat.types'
import { CatApiClient } from '@/lib/api/CatApiClient'

export class CatService implements ICatService {
  private readonly api: CatApiClient

  constructor(baseUrl: string) {
    this.api = new CatApiClient(baseUrl)
  }

  async loadRandomImages(count: number): Promise<ImageObjectUrl[]> {
    const tokens = Array.from({ length: count }, () => `${Date.now()}${Math.random()}`)
    const blobs = await Promise.all(tokens.map((t) => this.api.fetchCatBlob({ t })))
    return blobs.map((blob) => URL.createObjectURL(blob))
  }
}

