const rainContainer = document.querySelector('.rain'); //
const dropsCount = 100; // Количество капель
const characters = '0123456789'; // Символы для дождя
    
for (let i = 0; i < dropsCount; i++) {
    const drop = document.createElement('div');
    drop.className = 'drop'; //
    drop.textContent = characters.charAt(Math.floor(Math.random() * characters.length)); //
    drop.style.left = Math.random() * 100 + 'vw'; // Устанавливаем случайное расположение
    drop.style.animationDuration = Math.random() * 3 + 2 + 's'; // Задаем случайную скорость падения
                
    rainContainer.appendChild(drop); //
                
    // Перезапускаем анимацию по истечении времени
    drop.addEventListener('animationend', () => {
        drop.textContent = characters.charAt(Math.floor(Math.random() * characters.length)); //
        drop.style.bottom = '100%'; // Сбрасываем каплю на верх
        drop.style.animationDuration = Math.random() * 3 + 2 + 's'; // Обновляем скорость
        drop.style.left = Math.random() * 100 + 'vw'; // Перегенерируем позицию
    });
}