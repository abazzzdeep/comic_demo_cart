const userIcon = document.querySelector('#header .fas.fa-user');

  const navbar = document.querySelector('#header #navbar');


  userIcon.addEventListener('click', function() {

    navbar.classList.toggle('show-navbar');
  });

  function saveText() {
    const inputText = document.getElementById('manualInput').value;
    
    console.log('Entered text:', inputText);

  }