import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { RegisterPage } from './pages/RegisterPage';
import { UsersPage } from './pages/UsersPage';
import { User } from './types/user';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const handleRegister = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<RegisterPage onRegister={handleRegister} />} />
            <Route path="/users" element={<UsersPage users={users} />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;