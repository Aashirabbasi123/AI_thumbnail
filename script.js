// Category active effect
const buttons = document.querySelectorAll('.scroll-content button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

document.getElementById('generateBtn').addEventListener('click', () => {
  alert('Generating Thumbnails...');
});
