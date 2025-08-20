// Конфетті
for(let i=0; i<80; i++){
  const conf = document.createElement('div');
  conf.classList.add('confetti');
  conf.style.left = Math.random()*100 + 'vw';
  conf.style.background = `hsl(${Math.random()*360}, 100%, 50%)`;
  conf.style.width = 8 + Math.random()*6 + 'px';
  conf.style.height = conf.style.width;
  conf.style.animationDuration = 3 + Math.random()*5 + 's';
  document.body.appendChild(conf);
}
const btn = document.querySelector('.btn');
const music = document.getElementById('bg-music');

btn.addEventListener('click', () => {
  music.play().catch(err => console.log("Автовідтворення заблоковано:", err));
  alert('Кумасики та друзі — ласкаво просимо на день народження!');
});
