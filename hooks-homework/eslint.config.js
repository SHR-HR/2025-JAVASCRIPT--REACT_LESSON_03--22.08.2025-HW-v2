// Импорт необходимых модулей для конфигурации ESLint
import js from '@eslint/js' // Базовые правила ESLint
import globals from 'globals' // Глобальные переменные для разных сред (браузер, node.js)
import reactHooks from 'eslint-plugin-react-hooks' // Плагин для правил React Hooks
import reactRefresh from 'eslint-plugin-react-refresh' // Плагин для React Refresh (Hot Module Replacement)
import { defineConfig, globalIgnores } from 'eslint/config' // Функции для создания конфигурации ESLint

// Экспорт конфигурации ESLint по умолчанию
export default defineConfig([
  // Глобальное игнорирование файлов и папок
  globalIgnores(['dist']), // Игнорировать всю папку dist (собранные файлы)
  
  // Основная конфигурация для JavaScript/JSX файлов
  {
    files: ['**/*.{js,jsx}'], // Применять правила ко всем .js и .jsx файлам
    extends: [
      js.configs.recommended, // Рекомендуемые правила от ESLint
      reactHooks.configs['recommended-latest'], // Последние рекомендуемые правила для React Hooks
      reactRefresh.configs.vite, // Правила для React Refresh в Vite
    ],
    languageOptions: {
      ecmaVersion: 2020, // Версия ECMAScript 2020
      globals: globals.browser, // Глобальные переменные браузера (window, document, etc.)
      parserOptions: {
        ecmaVersion: 'latest', // Последняя версия ECMAScript
        ecmaFeatures: { jsx: true }, // Включить поддержку JSX
        sourceType: 'module', // Использовать ES-модули
      },
    },
    rules: {
      // Правило для неиспользуемых переменных
      'no-unused-vars': [
        'error', // Уровень ошибки
        { 
          varsIgnorePattern: '^[A-Z_]' // Игнорировать переменные, начинающиеся с заглавной буквы или _
        }
      ],
    },
  },
])




