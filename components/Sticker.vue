<template>
  <aside :class="['sticker', { 'sticker--open': isOpen }]" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <button class="sticker__tab" :aria-expanded="isOpen ? 'true' : 'false'" @click="isOpen = !isOpen">
      <span class="sticker__tab-label">Коты</span>
      <svg class="sticker__tab-icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path fill="currentColor" d="M12 2l3.5 6.9 7.5 1.1-5.5 5.3 1.3 7.6L12 19.8 5.2 22l1.3-7.6L1 10l7.5-1.1z"/>
      </svg>
    </button>
    <div class="sticker__panel">
      <div class="sticker__header">
        <strong class="sticker__header-title">Мяу-дайджест</strong>
        <button class="sticker__header-refresh" @click="refresh" :disabled="isLoading">
          {{ isLoading ? 'Загрузка…' : 'Обновить' }}
        </button>
      </div>
      <div class="sticker__content" role="list">
        <div v-for="(url, idx) in imageUrls" :key="idx" role="listitem" class="sticker__cat">
          <img :src="url" :alt="`Кот ${idx+1}`" loading="lazy" />
        </div>
        <div v-if="!imageUrls.length && !isLoading" class="sticker__empty">Нет данных</div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useCats } from '@/composables/useCats';
import { ref } from 'vue';

const { imageUrls, refresh, isLoading } = useCats()
const isOpen = ref(false)
</script>

<style scoped lang="scss">
@use '@/assets/styles/components/_sticker.scss';
</style>

