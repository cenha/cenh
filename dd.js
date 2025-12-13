
const petalColors = [
    'red',
    'green',
    '#ff9e9e', 
    '#ffd6a5', 
    '#fdffb6', 
    '#caffbf', 
    '#9bf6ff', 
    '#bdb2ff', 
    '#ffc6ff'  
];

function createPetal() {
    const petalContainer = document.querySelector('.petal-container');
    if (!petalContainer) return;

window.addEventListener('DOMContentLoaded',()=>{
        for (let i=0;i<10;i++){
            createPetal();
        }
        setInterval(createPetal,300);
       
    });
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size = Math.random() * 10 + 10; 
    const color = petalColors[Math.floor(Math.random() * petalColors.length)];
    const left = Math.random() * 100; 
    const animationDuration = Math.random() * 10 + 20; 
    const animationDelay = Math.random() * 10; 
    const initialRotate = Math.random() * 360; 
    const xOffset = Math.random() * 100 - 50; 

    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.backgroundColor = color;
    petal.style.left = `${left}%`;
    petal.style.top = `-${size}px`;
    petal.style.animationDuration = `${animationDuration}s`;
    petal.style.animationDelay = `${animationDelay}s`;
    petal.style.transform = `rotate(${initialRotate}deg)`;
    petal.style.setProperty('--x-offset', `${xOffset}px`); 
  
    petalContainer.appendChild(petal);
    setTimeout(() => {
        petal.remove();
    }, (animationDuration + animationDelay) * 1000);
}

setInterval(createPetal, 100);
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});