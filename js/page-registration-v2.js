(function(){
  const formLink = document.querySelector('a[href="#official-form"]');
  if(formLink){
    formLink.addEventListener('click', function(e){
      const target = document.querySelector('#official-form');
      if(target && 'scrollBehavior' in document.documentElement.style){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  }
})();