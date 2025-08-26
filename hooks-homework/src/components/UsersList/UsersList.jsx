// Импорт необходимых модулей из React
import React, { useState, useEffect } from 'react';
// Импорт файла стилей для компонента UsersList
import './UsersList.scss';

// Создание функционального компонента UsersList
const UsersList = () => {
  // Использование хука useState для создания состояния users с начальным значением пустого массива
  // users - массив пользователей
  // setUsers - функция для обновления массива users
  const [users, setUsers] = useState([]);
  
  // Использование хука useState для создания состояния loading с начальным значением true
  // loading - флаг загрузки данных (true - идет загрузка, false - загрузка завершена)
  // setLoading - функция для обновления значения loading
  const [loading, setLoading] = useState(true);
  
  // Использование хука useState для создания состояния error с начальным значением null
  // error - сообщение об ошибке (null - ошибок нет, строка - текст ошибки)
  // setError - функция для обновления значения error
  const [error, setError] = useState(null);

  // Использование хука useEffect для загрузки данных при монтировании компонента
  // useEffect принимает функцию с эффектом и пустой массив зависимостей []
  // Эффект выполняется только один раз после первоначального рендера
  useEffect(() => {
    // Имитация загрузки данных
    setLoading(true); // Устанавливаем состояние загрузки в true
    setError(null); // Сбрасываем возможные предыдущие ошибки
    
    // Создание таймера для имитации задержки загрузки данных
    const timer = setTimeout(() => {
      try {
        // Фейковые данные пользователей
        const fakeUsers = [
          { id: 1, name: 'Иван Иванов', email: 'ivan@example.com' },
          { id: 2, name: 'Мария Петрова', email: 'maria@example.com' },
          { id: 3, name: 'Алексей Сидоров', email: 'alex@example.com' },
          { id: 4, name: 'Елена Кузнецова', email: 'elena@example.com' },
          { id: 5, name: 'Дмитрий Смирнов', email: 'dmitry@example.com' }
        ];
        
        // Обновление состояния users с полученными данными
        setUsers(fakeUsers);
        // Установка состояния загрузки в false после успешной загрузки
        setLoading(false);
      } catch (err) {
        // В случае ошибки устанавливаем сообщение об ошибке
        setError('Ошибка загрузки данных');
        // Устанавливаем состояние загрузки в false
        setLoading(false);
      }
    }, 2000); // 2 секунды задержки для имитации загрузки

    // Функция очистки - выполняется при размонтировании компонента
    // Очищаем таймер, чтобы предотвратить утечку памяти
    return () => clearTimeout(timer);
  }, []); // Пустой массив зависимостей - эффект выполняется только при монтировании

  // Функция для перезагрузки списка пользователей
  const reloadUsers = () => {
    setUsers([]); // Очищаем текущий список пользователей
    setLoading(true); // Устанавливаем состояние загрузки в true
    
    // Имитация загрузки новых данных с меньшей задержкой
    setTimeout(() => {
      const newUsers = [
        { id: 6, name: 'Ольга Новикова', email: 'olga@example.com' },
        { id: 7, name: 'Сергей Волков', email: 'sergey@example.com' }
      ];
      
      // Обновление состояния users с новыми данными
      setUsers(newUsers);
      // Установка состояния загрузки в false после завершения
      setLoading(false);
    }, 1500); // 1.5 секунды задержки
  };

  // Условный рендеринг: если идет загрузка, показываем индикатор загрузки
  if (loading) {
    return (
      <div className="users-list-container">
        <h2>Список пользователей</h2>
        <div className="loading">Загрузка...</div>
      </div>
    );
  }

  // Условный рендеринг: если есть ошибка, показываем сообщение об ошибке
  if (error) {
    return (
      <div className="users-list-container">
        <h2>Список пользователей</h2>
        <div className="error">{error}</div>
      </div>
    );
  }

  // Основной рендеринг компонента после успешной загрузки данных
  return (
    <div className="users-list-container">
      <h2>Список пользователей</h2>
      
      {/* Контейнер с сеткой для отображения пользователей */}
      <div className="users-grid">
        {/* Метод map для преобразования массива users в массив JSX элементов */}
        {users.map(user => (
          // Карточка пользователя с уникальным ключом (key) на основе id
          <div key={user.id} className="user-card">
            {/* Имя пользователя */}
            <h3>{user.name}</h3>
            {/* Email пользователя */}
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      
      {/* Кнопка для загрузки других пользователей */}
      <button onClick={reloadUsers} className="reload-btn">
        Загрузить других пользователей
      </button>
    </div>
  );
};

// Экспорт компонента UsersList по умолчанию
export default UsersList;







