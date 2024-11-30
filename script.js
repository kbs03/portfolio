function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tab links
    document.querySelectorAll('.tab-links').forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add active class to the clicked tab link
    event.target.classList.add('active');
}


// toggle button js

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav-toggle');
    const navItems = document.querySelector('.nav-items');  // Make sure this matches the updated HTML

    toggleButton.addEventListener('click', function () {
        navItems.classList.toggle('active');
    });
});


  const scriptURL = 'https://script.google.com/macros/s/AKfycby0XyzXWWf_aFjVJM3y-89u6YxwG5EVd8R-qrWpU7mZ7DcCX7BIjc9VayEsz2KBN2w2/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg =document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML="msg sent sucessfully"
setTimeout(function()
{
    msg.innerHTML=""
},5000)
form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })

