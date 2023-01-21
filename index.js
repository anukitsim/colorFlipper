const colors = ['red', 'green', 'rgb(255, 123, 84)', '#FFC6D3'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
   const randomNumber = getRandomNumber();
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];


})

const getRandomNumber = () => {
   return  Math.floor(Math.random() * colors.length);
}