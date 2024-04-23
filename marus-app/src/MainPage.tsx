import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './styles.css';

interface Question {
  question_id: number;
  question_text: string;
  question_image_tf: boolean;
  full_url: string;
}

interface User {
  name: string;
  room: string;
}

const mockCalculations: Question[] = [
  {
    question_id: 1,
    question_text: 'В каком городе находится данная достопримечательность?',
    question_image_tf: true,
    full_url: '/images/image_2.jpg',
  }
];

function MainPage() {
  const [user, setUser] = useState<User>({ name: '', room: '' });

  // Получаем значения ника и номера комнаты из location state
  const location = useLocation();
  const { room, nick } = location.state;

  return (
    <div className="main-page">
      <h1>
        <span>Комната: {room}</span><br />
        <span>Пользователь: {nick}</span>
      </h1>
      {mockCalculations.map((question, index) => (
        <div key={index}>
          <h3>Вопрос </h3>
          <p>{question.question_text}</p>
          {question.question_image_tf && (
            <div className="image-container">
              <img src={question.full_url} alt="" className="question-image" />
              {index === mockCalculations.length - 1 && (
                <button type="button" className="btn">Ответить</button>
              )}
            </div>
          )}
          {!question.question_image_tf && index === mockCalculations.length - 1 && (
            <button type="button" className="btn">Ответить</button>
          )}
        </div>
      ))}
      <Link to="/login/">Выход</Link>
    </div>
  );
}

export default MainPage;
