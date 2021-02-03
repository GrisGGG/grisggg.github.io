let action = document.querySelectorAll('.action');

  action.forEach(function(el){
    el.addEventListener('click', function(ev) {
    ev.preventDefault();

    let content = document.querySelector('.content');

    content.classList.remove('animate__fadeInDown');
    content.classList.remove('animate__animated');

    content.classList.add('animate__fadeOutDownBig');
    content.classList.add('animate__animated');

      setTimeout(function () {//Redirecciona a la página de inicio
      location.href= './Boletines' ;
      }, 600);
  } )
});
