// Импорт необходимых модулей из React
import React, { useState, useEffect } from 'react';
// Импорт файла стилей для компонента Timer
import './Timer.scss';

// Создание функционального компонента Timer
const Timer = () => {
  // Использование хука useState для создания состояния count с начальным значением 0
  // count - текущее значение счетчика
  // setCount - функция для обновления значения count
  const [count, setCount] = useState(0);
  
  // Использование хука useState для создания состояния isVisible с начальным значением true
  // isVisible - флаг видимости компонента (true - видим, false - скрыт)
  // setIsVisible - функция для обновления значения isVisible
  const [isVisible, setIsVisible] = useState(true);

  // Использование хука useEffect для обработки побочных эффектов
  // useEffect принимает функцию с эффектом и массив зависимостей [isVisible]
  // Эффект будет выполняться при каждом изменении isVisible
  useEffect(() => {
    // Объявление переменной для хранения идентификатора таймера
    let timerId = null;
    
    // Если компонент видим, запускаем таймер
    if (isVisible) {
      // setInterval создает интервал, который выполняется каждые 1000 мс (1 секунда)
      timerId = setInterval(() => {
        // Обновление состояния count с использованием функциональной формы setCount
        // prevCount - предыдущее значение count
        setCount(prevCount => prevCount + 1);
      }, 1000); // Интервал в 1000 миллисекунд (1 секунда)
    }

    // Функция очистки - выполняется при размонтировании компонента или перед повторным выполнением эффекта
    return () => {
      // Если таймер был запущен (timerId не null)
      if (timerId) {
        // Остановка таймера с помощью clearInterval
        clearInterval(timerId);
        // Вывод сообщения в консоль для отладки
        console.log('Таймер очищен');
      }
    };
  }, [isVisible]); // Массив зависимостей: эффект зависит от значения isVisible

  // Функция для переключения видимости компонента
  const toggleVisibility = () => {
    // Изменение состояния isVisible на противоположное текущему
    setIsVisible(!isVisible);
    // Если компонент становится видимым (был скрыт, теперь показываем)
    if (!isVisible) {
      // Сброс счетчика в 0
      setCount(0); // Сброс счетчика при повторном показе
    }
  };

  // Возвращение JSX разметки компонента
  return (
    <div className="timer-container">
      <h2>Таймер</h2>
      {/* Условный рендеринг: если isVisible true, показываем содержимое таймера */}
      {isVisible ? (
        <div className="timer-content">
          {/* Отображение текущего значения счетчика */}
          <p className="timer-count">Счётчик: {count}</p>
          {/* Статус таймера */}
          <p className="timer-status">Таймер запущен</p>
        </div>
      ) : (
        // Если isVisible false, показываем сообщение о скрытии
        <p className="timer-hidden">Таймер скрыт</p>
      )}
      {/* Кнопка для переключения видимости таймера */}
      {/* Текст кнопки меняется в зависимости от состояния isVisible */}
      <button onClick={toggleVisibility} className="timer-toggle-btn">
        {isVisible ? 'Скрыть таймер' : 'Показать таймер'}
      </button>
    </div>
  );
};

// Экспорт компонента Timer по умолчанию
export default Timer;





