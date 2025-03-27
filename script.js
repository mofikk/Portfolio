const nav = document.querySelector('.header');
fetch('/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data


    // Highlight the active link
    const currentPage = window.location.pathname; // Get the current page's path
    const navLinks = document.querySelectorAll('.header nav a'); // Select all nav links

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active'); // Add 'active' class to the matching link
      }
    });
  });


    const foot = document.querySelector('.footer');
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    foot.innerHTML = data});


