document.querySelectorAll('.curso').forEach(curso => {
  curso.addEventListener('click', () => {
    curso.classList.toggle('clicked');
  });
});