<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

    (function(){
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
    })();

    const scriptURL = 'https://script.google.com/macros/s/AKfycby0XyzXWWf_aFjVJM3y-89u6YxwG5EVd8R-qrWpU7mZ7DcCX7BIjc9VayEsz2KBN2w2/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Send data to Google Sheets
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(() => { msg.innerHTML = ""; }, 5000);
                form.reset();

                // Send email using EmailJS
                emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                    user_name: name,
                    user_email: email,
                    user_message: message
                }).then(() => {
                    alert("Email sent successfully!");
                }).catch(error => {
                    console.error('Error sending email:', error);
                });
            })
            .catch(error => console.error('Error!', error.message));
    });

