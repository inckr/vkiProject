// Şifre Görünürlüğü ve Gizliliği (İcon)
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("upassword");
  var toggleIcon = document.getElementById("togglePasswordIcon");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
  } else {
      passwordInput.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
  }}

// LocalStorage'daki Kullanıcı Bilgilerini Getirme
const users = JSON.parse(localStorage.getItem('users')) || [];
function login() {
const username = document.getElementById('uemail').value;
const password = document.getElementById('upassword').value;

// LocalStorage'daki Kullanıcı Bilgilerini Karşılaştırma
const user = users.find(user => user.email === username && user.password === password);

// Bilgiler Doğruysa Sayfaya Yönlendir Değilse Uyar
if (user) {
 window.location.href='../vkiHesaplama/vki.html';
} else {
  alert('Kullanıcı adı veya şifre yanlış!');
}
}

