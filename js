const dateIdeaElement = document.getElementById('date-idea');
dateIdeaElement.style.opacity = 0;
setTimeout(() => {
  dateIdeaElement.textContent = randomIdea;
  dateIdeaElement.style.opacity = 1;
}, 300);
