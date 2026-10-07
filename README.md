
Сборка на Gulp + Webpack, вёрстка по BEM (блоки в `src/blocks/modules/`), выходные сборки `bx-styles/`, `bx-styles-base/`, `bx-js/` — для Bitrix-бэкенда.

## Требования

- Node.js **12.20.0**
- Yarn

## Установка и запуск

```bash
yarn install     # установка зависимостей
yarn run dev     # сервер для разработки (Browsersync, http://localhost:4000)
```

## Сборка и линтинг

```bash
yarn run build             # production-сборка
yarn run lint:styles       # lint SCSS (src/blocks/modules/)
yarn run lint:scripts      # lint JS (src/blocks)
```

## Структура

- `src/views/` — HTML страницы (`@@include` партиалы)
- `src/styles/` — SCSS, `src/blocks/modules/*/` — BEM-блоки (`*.html`, `*.scss`, `*.js`)
- `src/js/` — JS (Vanilla JS, jQuery доступен глобально)
- `src/libs/` — сторонние библиотеки

Создание нового блока: `bem create my-block`, затем подключить `.html` в шаблон, `.scss` в `src/blocks/_modules.scss` и `.js` в `src/js/import/modules.js`.