// App.js
/*import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

function App() {
  const [user, setUser] = useState(null); // Хранение информации о пользователе

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/main" /> : <LoginPage setUser={setUser} />}
        </Route>
        <Route path="/main">
          {user ? <MainPage user={user} setUser={setUser} /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;*/