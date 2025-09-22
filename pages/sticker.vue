<template>
  <div class="p-sticker">
    <div class="p-sticker__hero">
      <div class="container">
        <h1 class="title">Страница со стикером</h1>
        <p class="subtitle">Скролльте страницу, стикер фиксирован справа по центру.</p>
      </div>
    </div>

    <div class="container">
      <section class="p-sticker__grid">
        <article v-for="n in 8" :key="n" class="card">
          <h3>Блок {{ n }}</h3>
          <p>
            Мини-контент для демонстрации скролла. Этот текст служит заполнителем, чтобы
            показать как ведет себя страница при прокрутке, а также взаимодействие со стикером.
          </p>
        </article>
      </section>
      <div class="spacer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from 'nuxt/app';
useHead({ title: 'Sticker Page | Sticker Cats' })
</script>

