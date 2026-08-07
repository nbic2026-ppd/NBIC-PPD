(() => {
  'use strict';
  const root = document.querySelector('[data-home-deadline]');
  if (!root) return;
  const target = new Date(root.dataset.homeDeadline).getTime();
  const fields = {
    days: root.querySelector('[data-count="days"]'),
    hours: root.querySelector('[data-count="hours"]'),
    minutes: root.querySelector('[data-count="minutes"]'),
    seconds: root.querySelector('[data-count="seconds"]')
  };
  const pad = n => String(Math.max(0, n)).padStart(2, '0');
  function update() {
    const diff = target - Date.now();
    if (diff <= 0) {
      Object.values(fields).forEach(el => { if (el) el.textContent = '00'; });
      root.classList.add('is-closed');
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    if (fields.days) fields.days.textContent = pad(days);
    if (fields.hours) fields.hours.textContent = pad(hours);
    if (fields.minutes) fields.minutes.textContent = pad(minutes);
    if (fields.seconds) fields.seconds.textContent = pad(seconds);
  }
  update();
  setInterval(update, 1000);
})();
