
        function showTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.querySelectorAll('.tab-links').forEach(link => {
                link.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            event.target.classList.add('active');
        }

        document.addEventListener('DOMContentLoaded', function () {
            const toggleButton = document.querySelector('.nav-toggle');
            const navItems = document.querySelector('.nav-items');

            toggleButton.addEventListener('click', function () {
                navItems.classList.toggle('active');
            });
        });

        const scriptURL = 'https://script.google.com/macros/s/AKfycby0XyzXWWf_aFjVJM3y-89u6YxwG5EVd8R-qrWpU7mZ7DcCX7BIjc9VayEsz2KBN2w2/exec';
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.getElementById("msg");

        form.addEventListener('submit', e => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => {
                    msg.innerHTML = "Message sent successfully";
                    setTimeout(() => { msg.innerHTML = ""; }, 5000);
                    form.reset();
                    
                    // Send email using mailto
                    window.location.href = `mailto:workfreelance313@gmail.com?subject=New Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
                })
                .catch(error => console.error('Error!', error.message));
        });
   
