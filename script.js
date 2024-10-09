let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// Обновляем отображение при загрузке страницы
updateDisplay();

// Функция для увеличения счетчика
function incrementCounter() {
    counter += 1; // Увеличиваем на 1
    updateDisplay(); // Обновляем отображение
}

// Функция для уменьшения счетчика
function decrementCounter() {
    counter -= 1; // Уменьшаем на 1
    updateDisplay(); // Обновляем отображение
}

// Функция для сброса счетчика
function resetCounter() {
    counter = 0; // Сбрасываем счетчик
    updateDisplay(); // Обновляем отображение
}

// Функция для обновления отображения счетчика
function updateDisplay() {
    document.getElementById('counterDisplay').innerText = counter; // Обновляем текст на странице
    localStorage.setItem('counter', counter); // Сохраняем значение в localStorage
}

// Привязываем функции к кнопкам
document.getElementById('incrementCounter').addEventListener('click', incrementCounter);
document.getElementById('decrementCounter').addEventListener('click', decrementCounter);
document.getElementById('resetButton').addEventListener('click', resetCounter);
