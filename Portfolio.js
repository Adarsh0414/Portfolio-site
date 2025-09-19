document.addEventListener("DOMContentLoaded", () => {
  const titles = [
    "Computer Science Undergraduate",
    "Aspiring Software Engineer",
    "Web Developer",
  ];

  let index = 0;
  let charIndex = 0;
  const element = document.getElementById("dynamic-job-title");
  let typing = true;

  function typeWriter() {
    if (typing) {
      if (charIndex < titles[index].length) {
        element.textContent += titles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 150);
      } else {
        typing = false;
        setTimeout(typeWriter, 1000); // Wait before deleting
      }
    } else {
      if (charIndex > 0) {
        element.textContent = titles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, 100);
      } else {
        typing = true;
        index = (index + 1) % titles.length;
        typeWriter();
      }
    }
  }

  if (element) {
    element.textContent = "";
    typeWriter();
  }

  // Magic Cursor Logic
  const colors = ["#e84e66", "#67c69e", "#eefd1a", "#80acc9", "#73a8bb", "#f8e1f7", "#6ed2a4", "#1d2af3", "#c9a30d"];
  let lastMouseX = 0;
  let lastMouseY = 0;
  let lastTime = 0;

  document.addEventListener('mousemove', e => {
    const currentTime = new Date().getTime();
    if (currentTime - lastTime < 50) return;

    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = color;
    particle.style.boxShadow = `0 0 10px ${color}`;

    particle.style.left = (e.pageX) + 'px';
    particle.style.top = (e.pageY) + 'px';

    particle.addEventListener('animationend', () => {
      particle.remove();
    });

    lastTime = currentTime;
  });
});