# Sticker Cats (Nuxt 4 + TypeScript + SCSS)

Демо-приложение из двух страниц с анимированным BEM-стикером справа по центру. Стикер загружает 3 изображения котов с публичного API.

## Стек
- Nuxt 4, Vue 3, TypeScript
- SCSS + BEM
- Архитектура: HttpClient → ApiClient → Service → Composable → UI

## Быстрый старт
1) Установка
```bash
npm install
```
2) Запуск
```bash
npm run dev
```
Откройте `http://localhost:5173` (порт может отличаться в логе).

## Окружение
Используется runtimeConfig:
- `NUXT_PUBLIC_API_BASE_URL` — база API (дефолт: `https://cataas.com`).

Пример `.env`:
```bash
NUXT_PUBLIC_API_BASE_URL=https://cataas.com
```

## Скрипты
- `npm run dev` — разработка
- `npm run build` — сборка
- `npm run preview` — предпросмотр
- `npm run generate` — статический билд (`.output/public`)
- `npm run deploy` — деплой в `gh-pages`

## Структура каталогов
- `assets/styles/` — глобальные переменные, компоненты, страницы (SCSS)
- `components/Sticker.vue` — анимированный стикер (hover-раскрытие)
- `composables/useCats.ts` — загрузка 3 изображений через сервис
- `lib/http/HttpClient.ts` — базовый HTTP-клиент (ofetch)
- `lib/api/CatApiClient.ts` — API-клиент котов
- `lib/services/CatService.ts` — сервисный слой
- `domain/` — типы, интерфейсы, енамы, константы
- `pages/` — `index.vue`, `sticker.vue`

## Деплой на GitHub Pages
Вариант быстрый (скриптом):
```bash
npm run generate
npm run deploy
```
Затем включите Pages в настройках репозитория: Source → Deploy from a branch → `gh-pages` / root.

Если проект открывается по адресу `https://<user>.github.io/<repo>/`, задайте базовый путь:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  nitro: { preset: 'github-pages' },
  app: { baseURL: process.env.NUXT_PUBLIC_BASE_PATH || '/' }
})
```
Сборка с базовым путём:
```bash
NUXT_PUBLIC_BASE_PATH=/repo-name/ npm run generate
npm run deploy
```

## Качество
- Строгий TS, разделение слоёв, BEM-стили
- URL API из env через runtimeConfig
- Вынесенные стили компонентов/страниц