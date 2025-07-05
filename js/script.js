function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Harap lengkapi semua kolom.');
    return false;
  }

  alert('Pesan Anda telah terkirim. Terima kasih!');
  return false; // Simpan default agar tidak reload
}
