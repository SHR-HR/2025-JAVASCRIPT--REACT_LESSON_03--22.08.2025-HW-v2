// Импорт необходимых модулей из React
import React, { useState } from 'react';
// Импорт компонентов для отображения
import Timer from './components/Timer/Timer';
import UsersList from './components/UsersList/UsersList';
import RenderCounter from './components/RenderCounter/RenderCounter';
// Импорт файла стилей для основного компонента App
import './App.scss';

// Создание основного функционального компонента App
function App() {
  // Использование хука useState для создания состояния currentComponent с начальным значением 'timer'
  // currentComponent - текущий активный компонент для отображения
  // setCurrentComponent - функция для обновления значения currentComponent
  const [currentComponent, setCurrentComponent] = useState('timer');

  // Функция для рендеринга текущего активного компонента
  const renderComponent = () => {
    // Использование оператора switch для выбора компонента на основе currentComponent
    switch (currentComponent) {
      case 'timer':
        return <Timer />; // Возвращаем компонент Timer если currentComponent === 'timer'
      case 'users':
        return <UsersList />; // Возвращаем компонент UsersList если currentComponent === 'users'
      case 'render':
        return <RenderCounter />; // Возвращаем компонент RenderCounter если currentComponent === 'render'
      default:
        return <Timer />; // По умолчанию возвращаем компонент Timer
    }
  };

  // Возвращение JSX разметки основного компонента приложения
  return (
    <div className="app">
      {/* Шапка приложения */}
      <header className="app-header">
        {/* Основной заголовок приложения */}
        <h1>React Hooks Домашнее Задание</h1>
        
        {/* Навигационная панель с кнопками */}
        <nav className="nav-buttons">
          {/* Кнопка для переключения на компонент Timer */}
          <button 
            onClick={() => setCurrentComponent('timer')} // Обработчик клика - установка currentComponent в 'timer'
            className={currentComponent === 'timer' ? 'active' : ''} // Добавление класса 'active' если кнопка активна
          >
            Таймер
          </button>
          
          {/* Кнопка для переключения на компонент UsersList */}
          <button 
            onClick={() => setCurrentComponent('users')} // Обработчик клика - установка currentComponent в 'users'
            className={currentComponent === 'users' ? 'active' : ''} // Добавление класса 'active' если кнопка активна
          >
            Список пользователей
          </button>
          
          {/* Кнопка для переключения на компонент RenderCounter */}
          <button 
            onClick={() => setCurrentComponent('render')} // Обработчик клика - установка currentComponent в 'render'
            className={currentComponent === 'render' ? 'active' : ''} // Добавление класса 'active' если кнопка активна
          >
            Счётчик рендеров
          </button>
        </nav>
      </header>
      
      {/* Основное содержимое приложения */}
      <main className="app-main">
        {/* Вызов функции renderComponent для отображения текущего активного компонента */}
        {renderComponent()}
      </main>
    </div>
  );
}

// Экспорт компонента App по умолчанию
export default App;






