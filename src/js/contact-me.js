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