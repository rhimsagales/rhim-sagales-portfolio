const contactmeForm = document.querySelector('.contact-me-form');

const contactMeInputs = document.querySelectorAll('.inputs-container > label > input, .inputs-container > textarea');

const contactMeSubmitBtn = document.querySelector('.contact-me-submit-btn');

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

contactMeInputs.forEach(input => {
    console.log(input);
    input.addEventListener('input', () => {
        contactMeSubmitBtn.disabled = !(Array.from(contactMeInputs).every(input => input.value.trim() !== '') && isValidEmail(contactMeInputs[0].value.trim()));
    });
});



async function sendEmail(email, fullName, message){
    const templateParams = {
        email: email,
        fullName : fullName,
        message : message,
    };
    try {
        const response = await emailjs.send(
            'service_kpuazm4',   // Service ID
            'template_qdl1fgq',  // Template ID
            templateParams,      // Template parameters
            'yNOraJnx3DvSgZapG'  // User ID
        );

        if (response.status === 200) {
            console.log('Email sent successfully!', response);
            contactmeForm.reset();
            contactMeSubmitBtn.disabled = true;
            alert('Your message has been sent successfully!');
        } else {
            console.error('Failed to send email:', response);
            alert('There was an error sending your message. Please try again later.');
        }
    }
    catch(e) {
        console.error('Error sending email:', e);
        alert('There was an error sending your message. Please try again later.');
    }
}

contactmeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = contactMeInputs[0].value.trim();
    const fullName = contactMeInputs[1].value.trim();
    const message = contactMeInputs[2].value.trim();

    if (isValidEmail(email) && fullName && message) {
        sendEmail(email, fullName, message);
    } else {
        alert('Please fill in all fields correctly.');
    }
});