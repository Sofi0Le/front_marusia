// LoginPage.tsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Импорт файла стилей

function LoginPage() {
  const [room, setRoom] = useState('');
  const [nick, setNick] = useState('');
  const navigate = useNavigate(); // Импорт useNavigate из react-router-dom

  // Функция для проверки наличия введенных значений в полях
  const handleLogin = () => {
    if (room.trim() !== '' && nick.trim() !== '') {
      // Проведение аутентификации пользователя
      // В данном примере предполагается, что аутентификация успешна
      // После успешной аутентификации перенаправляем пользователя на главную страницу
      // И передаем данные о комнате и нике в качестве параметров
      navigate('/main', { state: { room: room, nick: nick } });
    } else {
      alert('Пожалуйста, введите номер комнаты и ник пользователя.');
    }
  };

  return (
    <div className="container"> {/* Применяем стили из LoginPage.css */}
      <form>
        <label className="label">Номер комнаты:</label>
        <input className="input" type="text" value={room} onChange={(e) => setRoom(e.target.value)} placeholder="Введите номер комнаты" />
        <br />
        <label className="label">Ник пользователя:</label>
        <input className="input" type="text" value={nick} onChange={(e) => setNick(e.target.value)} placeholder="Введите ник пользователя" />
      </form>
      <button className="button" onClick={handleLogin}>Войти</button>
    </div>
  );
}

export default LoginPage;
