// Импорт библиотеки React
import React from 'react'
// Импорт ReactDOM из клиентской версии React DOM для рендеринга в браузере
import ReactDOM from 'react-dom/client'
// Импорт главного компонента приложения App
import App from './App.jsx'

// Создание корневого элемента React для рендеринга приложения
// document.getElementById('root') - поиск HTML-элемента с id "root" в index.html
// createRoot() - создает корневой React-контейнер для рендеринга
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode - специальный компонент React для выявления потенциальных проблем
  // Включает дополнительные проверки и предупреждения в development-режиме
  // Не влияет на production-сборку
  <React.StrictMode>
    {/* Рендеринг главного компонента приложения App */}
    <App />
  </React.StrictMode>,
  // Запятая в конце - синтаксическая особенность JSX, необязательна в большинстве случаев
  // Но является хорошей практикой для consistency (единообразия кода)
)



