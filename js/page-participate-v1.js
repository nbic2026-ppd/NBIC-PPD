
(function(){
  const root = document.documentElement;

  // Registration countdown
  const panel = document.querySelector('[data-registration-countdown]');
  if(panel){
    const target = new Date(panel.getAttribute('data-target'));
    function tick(){
      let diff = Math.max(0, target.getTime() - Date.now());
      const days = Math.floor(diff / 86400000); diff -= days * 86400000;
      const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
      const minutes = Math.floor(diff / 60000); diff -= minutes * 60000;
      const seconds = Math.floor(diff / 1000);
      const vals = {days,hours,minutes,seconds};
      Object.entries(vals).forEach(([key,val])=>{
        const el = panel.querySelector('[data-count="'+key+'"]');
        if(el) el.textContent = String(val).padStart(2,'0');
      });
    }
    tick();
    setInterval(tick,1000);
  }

  // Ensure details accordions are keyboard-safe; no forced single-open behavior.
})();
