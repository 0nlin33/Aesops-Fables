
let current = 0;

  function goTo(n) {
    document.querySelectorAll('.story').forEach((s,i) => {
      s.classList.toggle('active', i === n);
    });
    document.querySelectorAll('.nav-btn').forEach((b,i) => {
      b.classList.toggle('active', i === n);
    });
    current = n;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const tooltip = document.getElementById('tooltip');
  document.querySelectorAll('.vocab-word').forEach(el => {
    el.addEventListener('mouseenter', e => {
      tooltip.textContent = el.dataset.def;
      tooltip.style.display = 'block';
      positionTooltip(e);
    });
    el.addEventListener('mousemove', positionTooltip);
    el.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
    el.addEventListener('click', e => {
      tooltip.textContent = el.dataset.def;
      tooltip.style.display = 'block';
      positionTooltip(e);
      setTimeout(() => { tooltip.style.display = 'none'; }, 2500);
    });
  });

  function positionTooltip(e) {
    let x = e.clientX + 12, y = e.clientY - 36;
    if (x + 240 > window.innerWidth) x = e.clientX - 230;
    if (y < 0) y = e.clientY + 18;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
}