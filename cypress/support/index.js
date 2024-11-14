Cypress.on('uncaught:exception', (err, runnable) => {
    // Проверяем, содержит ли ошибка статус 401
    if (err.message.includes('401') || (err.response && err.response.status === 401)) {
      // Возвращаем false, чтобы предотвратить остановку теста
      return false;
    }
  
    // Разрешаем обработку других ошибок
    return true;
  });
  
  