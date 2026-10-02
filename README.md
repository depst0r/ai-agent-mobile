# 📱 AI Agent Mobile

Мобильная версия мультиагентного чата: три ИИ-агента в кармане.

![React Native](https://img.shields.io/badge/React_Native-0.87-61dafb?logo=react)
![Expo](https://img.shields.io/badge/Expo-SDK_57-000020?logo=expo)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

---

## ✨ Что это

React Native приложение с тремя ИИ-агентами. Выбираешь агента — он отвечает **в своей роли**.

| Агент | Роль |
|-------|------|
| 🎨 **Дизайнер** | Структура страниц, стиль, цвета |
| 💻 **Разработчик** | Код на JS/TS, объяснения |
| 🧪 **Тестировщик** | Проверка кода, поиск багов |

Ответы рендерятся как **Markdown** — с блоками кода, заголовками, списками.

---

## 🛠 Стек

- **React Native** + **Expo** (SDK 57)
- **TypeScript** — типизация
- **@ronradtke/react-native-markdown-display** — рендер Markdown
- **@expo-google-fonts/press-start-2p** — пиксельный шрифт
- **Pollinations API** — бесплатный LLM, без ключей

---

## 🚀 Быстрый старт

```bash
git clone https://github.com/depst0r/ai-agent-mobile.git
cd ai-agent-mobile
npm install
npx expo start
```

**На телефоне:**
1. Установи **Expo Go** ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))
2. Открой Expo Go — проект подхватится сам (если ты в той же Wi-Fi сети)
3. Или отсканируй QR-код из терминала

---

## 📁 Структура проекта

```
ai-agent-mobile/
│
├── App.tsx                  # 🧠 Главный экран: стейты, логика запроса, UI
├── style.ts                 # 🎨 Стили (основные + markdownStyles)
├── index.ts                 # Точка входа
│
├── lib/
│   └── agents.ts            # 🎭 Список агентов: id, name, prompt
│
├── assets/                  # Иконки, splash screen
├── app.json                 # Конфиг Expo
└── README.md
```

---

## ⚙️ Как это работает

```
Пользователь выбирает агента
        ↓
Пишет сообщение, жмёт «Отправить»
        ↓
fetch → Pollinations API (system-промпт + сообщение)
        ↓
Ответ рендерится через Markdown
```

**Ключевые моменты:**
- **System-промпт** задаёт роль агента
- **Markdown-рендер** — код, списки, заголовки
- **Скролл** — длинные ответы не уезжают за экран
- **Live reload** — изменения видны сразу на телефоне

---

## 🎨 Особенности

- **Пиксельный стиль** — шрифт Press Start 2P, тёмная тема
- **Три агента** — переключение одним тапом
- **Markdown** — код подсвечивается, списки оформлены
- **Без ключей** — Pollinations работает без регистрации

---

## 📄 Лицензия

MIT
