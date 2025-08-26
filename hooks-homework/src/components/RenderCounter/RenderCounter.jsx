// Импорт необходимых модулей из React
import React, { useState, useRef, useEffect } from 'react';
// Импорт файла стилей для компонента RenderCounter
import './RenderCounter.scss';

// Создание функционального компонента RenderCounter
const RenderCounter = () => {
  // Использование хука useState для создания состояния count с начальным значением 0
  // count - текущее значение счетчика (вызывает ререндер при изменении)
  // setCount - функция для обновления значения count
  const [count, setCount] = useState(0);
  
  // Использование хука useState для создания состояния inputValue с начальным значением пустой строки
  // inputValue - текущее значение текстового поля (вызывает ререндер при изменении)
  // setInputValue - функция для обновления значения inputValue
  const [inputValue, setInputValue] = useState('');
  
  // Использование хука useRef для создания ссылки renderCount с начальным значением 0
  // renderCount - объект со свойством current, которое хранит количество рендеров
  // useRef не вызывает ререндер при изменении значения!
  const renderCount = useRef(0);

  // Увеличиваем счетчик рендеров при каждом рендере
  // Эта строка выполняется при каждом рендере компонента
  renderCount.current += 1;

  // Использование хука useEffect без зависимостей для логирования
  // useEffect выполняется после каждого рендера компонента
  useEffect(() => {
    // Вывод в консоль информации о количестве рендеров
    console.log(`Компонент отрендерен ${renderCount.current} раз(а)`);
  }); // Отсутствие массива зависимостей означает выполнение после каждого рендера

  // Функция для увеличения счетчика count
  const increment = () => {
    // Использование функциональной формы setCount для обновления состояния
    // prev - предыдущее значение count
    setCount(prev => prev + 1);
  };

  // Функция для сброса состояний
  const reset = () => {
    setCount(0); // Сброс счетчика в 0
    setInputValue(''); // Очистка текстового поля
  };

  // Функция для обновления значения текстового поля
  const updateInput = (e) => {
    // e.target.value - текущее значение input поля
    setInputValue(e.target.value);
  };

  // Возвращение JSX разметки компонента
  return (
    <div className="render-counter-container">
      <h2>Счётчик рендеров</h2>
      
      {/* Контейнер для отображения статистики */}
      <div className="stats">
        {/* Отображение количества рендеров (из useRef) */}
        <p className="render-count">Количество рендеров: <span>{renderCount.current}</span></p>
        {/* Отображение значения счетчика (из useState) */}
        <p className="state-count">Значение счётчика: <span>{count}</span></p>
      </div>
      
      {/* Контейнер для кнопок управления */}
      <div className="controls">
        {/* Кнопка для увеличения счетчика */}
        <button onClick={increment} className="increment-btn">
          Увеличить счётчик
        </button>
        
        {/* Кнопка для сброса состояний */}
        <button onClick={reset} className="reset-btn">
          Сбросить
        </button>
      </div>
      
      {/* Секция для работы с текстовым полем */}
      <div className="input-section">
        {/* Текстовое поле input */}
        <input
          type="text" // Тип поля - текст
          value={inputValue} // Привязка значения к состоянию
          onChange={updateInput} // Обработчик изменения значения
          placeholder="Введите текст..." // Подсказка в пустом поле
          className="text-input" // CSS класс для стилизации
        />
        {/* Отображение текущего значения текстового поля */}
        <p>Текст: {inputValue}</p>
      </div>
      
      {/* Секция с объяснением работы useRef */}
      <div className="explanation">
        <h4>Почему useRef не вызывает ререндер?</h4>
        <p>
          useRef хранит значение между рендерами, но его изменение 
          не вызывает повторный рендер компонента, в отличие от useState.
        </p>
      </div>
    </div>
  );
};

// Экспорт компонента RenderCounter по умолчанию
export default RenderCounter;








