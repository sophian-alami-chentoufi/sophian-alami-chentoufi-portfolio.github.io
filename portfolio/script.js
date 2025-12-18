document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const btn = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  if (btn && nav) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px'
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));

  // Hover tilt (simple, sans lib externe)
  const tiltCards = document.querySelectorAll('.hover-tilt');

  tiltCards.forEach(card => {
    const height = card.clientHeight;
    const width = card.clientWidth;

    card.addEventListener('mousemove', (e) => {
      const xVal = e.layerX;
      const yVal = e.layerY;

      const yRotation = 10 * ((xVal - width / 2) / width);
      const xRotation = -10 * ((yVal - height / 2) / height);

      card.style.transform = `perspective(800px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    });
  });
});

