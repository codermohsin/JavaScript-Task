const countBtn = document.getElementById('counter-button');
const countSpan = document.getElementById('count');
let count = 0;

countBtn.addEventListener('click', () => {
  count++;
  countSpan.textContent = count;

});