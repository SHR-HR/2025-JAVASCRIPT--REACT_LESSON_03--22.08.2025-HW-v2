// Импорт функции defineConfig из Vite для создания конфигурации
import { defineConfig } from 'vite'
// Импорт плагина React для Vite
import react from '@vitejs/plugin-react'

// Экспорт конфигурации Vite по умолчанию
// https://vite.dev/config/ - документация по конфигурации Vite
export default defineConfig({
  // Массив плагинов, которые использует Vite
  plugins: [
    // Плагин React для поддержки JSX, горячей перезагрузки (HMR) и других React-фич
    react()
  ],
  // Настройки сервера разработки
  server: {
    port: 3000, // Порт разработки (по умолчанию: 5173)
    open: true, // Автоматически открывать браузер при запуске сервера
  },
  // Настройки сборки для production
  build: {
    outDir: 'build', // Папка для сборки (по умолчанию: 'dist')
  }
})






