function register() {

    // Bilgileri LocalStorage'a Ekleme
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const name = document.getElementById('uname').value;
    const surname = document.getElementById('usurname').value;
    const email = document.getElementById('uemail').value;
    const password = document.getElementById('upassword').value;
    const passwordAgain = document.getElementById('cpassword').value;

    // Şifre Oluşturma Şartları
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(document.getElementById("upassword").value)){
    alert("Şifre en az 8 karakter uzunluğunda olmalı. Büyük harf, küçük harf ve rakam içermelidir.")
    return;
  }
//   Şifre ve Şifre Tekrarını Karşılaştırma
    if( password!= passwordAgain){
       passwordChecker();
      
    }
    else{
       // Emailin Kayıtlı Olup Olmadığının Kontrolü
    if (users.find(user => user.email === email)) {
        alert('Bu e-posta adresi zaten kayıtlı!');
        return;
    }
    
    // Kullanıcı Kaydı
    users.push({ name, surname, email, password});
    localStorage.setItem('users', JSON.stringify(users));
    alert('Kayıt başarıyla tamamlandı!');
    window.location.href='../vkiLogin/login.html';
    }};

    // Şifrelerin Karşılaştırılması
function passwordChecker() {
  const password1 = document.getElementById('upassword').value;
    const password2 = document.getElementById('cpassword').value;

    if (password1 !== password2) {
        alert('Şifreler eşleşmiyor!');
    }
}

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
}};

// Şifre Tekrarı Görünürlüğü ve Gizliliği (İcon)
function toggleCPasswordVisibility() {
var passwordInput = document.getElementById("cpassword");
var toggleIcon = document.getElementById("toggleCPasswordIcon");

if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
} else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
}};