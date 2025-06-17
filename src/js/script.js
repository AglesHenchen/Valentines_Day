
const background = document.getElementById('background');
const numberOfPaws = 100;
const pawImageUrl = '/src/img/peg.png';


function createPaw(i) {
  const paw = document.createElement('div');
  paw.classList.add('paw');
  paw.style.left = Math.random() * 100 + 'vw';
  paw.style.top = -Math.random() * 100 + 'px';
  paw.style.backgroundImage = `url(${pawImageUrl})`;
  paw.style.animationDuration = 10 + Math.random() * 15 + 's';
  paw.style.opacity = Math.random();

  background.appendChild(paw);
}


for (let i = 0; i < numberOfPaws; i++) {
  const delay = Math.random() * 5000; 
  setTimeout(() => createPaw(i), delay); 
}
