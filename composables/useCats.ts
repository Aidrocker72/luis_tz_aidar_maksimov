import { CatService } from '@/lib/services/CatService'
import { useRuntimeConfig, useState } from 'nuxt/app'
import type { Ref } from 'vue'

type UseCats = () => {
  imageUrls: Ref<string[]>
  isLoading: Ref<boolean>
  errorMessage: Ref<string | null>
  refresh: () => Promise<void>
}

export const useCats: UseCats = () => {
  const service = new CatService(useRuntimeConfig().public.apiBaseUrl as string)
  const imageUrls = useState<string[]>('cats/images', () => [])
  const isLoading = useState<boolean>('cats/loading', () => false)
  const errorMessage = useState<string | null>('cats/error', () => null)

  const refresh = async () => {
    try {
      isLoading.value = true
      errorMessage.value = null
      const urls = await service.loadRandomImages(3)
      // Revoke old URLs to avoid memory leaks
      imageUrls.value.forEach((u: string) => URL.revokeObjectURL(u))
      imageUrls.value = urls
    } catch (err) {
      errorMessage.value = 'Не удалось загрузить изображения котов'
      // eslint-disable-next-line no-console
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  if (import.meta.client && imageUrls.value.length === 0 && !isLoading.value) {
    // Initial load on client only
    refresh()
  }

  return { imageUrls, isLoading, errorMessage, refresh }
}

