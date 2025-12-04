import './css/App.css';
import React, { useEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoadPage from './pages/LoadPage';
import ApiFetch from './hooks/fetch';

/**
 * Основной компонент приложения
 * @returns {JS.Element} React компонент
 */
function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  /**
   * Проверка статуса OAuth
   * @returns {Promise<void>}
   */
  const checkOAuthStatus = useCallback(async () => {
    try {
      const response = await ApiFetch.get('/oauth/status');
      
      if (response.status === 403) {
        window.location.pathname = '/';
        return;
      }
    } catch (error) {
      console.error('Ошибка при проверке OAuth статуса:', error);
    }
  }, []);

  /**
   * Эффект для проверки OAuth статуса при изменении маршрута
   */
  useEffect(() => {
    if (currentPath !== '/') {
      checkOAuthStatus();
    }
  }, [currentPath, checkOAuthStatus]);

  return (
    <Routes>
      <Route path="/" element={<LoadPage />} />
      <Route 
        path="/test" 
        element={<div className="App">Все прошло</div>} 
      />
    </Routes>
  );
}

export default App;