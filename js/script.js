// Auto-fill welcome name based on form input
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const welcomeText = document.getElementById('welcome');

  nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    welcomeText.textContent = name ? `Hi ${name}` : 'Hi Name';
  });

  // Form validation and display result
  const form = document.getElementById('contactForm');
  const result = document.getElementById('formResult');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !message) {
      result.textContent = 'Please fill out all fields.';
      result.style.color = 'red';
    } else {
      result.textContent = `Thank you, ${name}! Your message has been sent.`;
      result.style.color = 'green';
      form.reset();
      welcomeText.textContent = 'Hi Name';
    }
  });
});
