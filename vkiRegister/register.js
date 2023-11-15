function register() {
    // Kullanıcı bilgilerini local storage'a kaydet
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const name = document.getElementById('uname').value;
    const surname = document.getElementById('usurname').value;
    const email = document.getElementById('uemail').value;
    const password = document.getElementById('upassword').value;
    const passwordAgain = document.getElementById('cpassword').value;

    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(document.getElementById("upassword").value)){
    alert("Şifre en az 8 karakter uzunluğunda olmalı. Büyük harf, küçük harf ve rakam içermelidir.")
    return;
  }
    if( password!= passwordAgain){
       passwordChecker();
      
    }
    else{
       // Kullanıcıyı kontrol et, daha önce kaydedilmişse uyarı ver
    if (users.find(user => user.email === email)) {
        alert('Bu e-posta adresi zaten kayıtlı!');
        return;
    }
    
    // Kullanıcıyı kaydet
    users.push({ name, surname, email, password});
    localStorage.setItem('users', JSON.stringify(users));
    alert('Kayıt başarıyla tamamlandı!');
    window.location.href='../vkiLogin/login.html';
    }
    
   
}

function passwordChecker() {
  const password1 = document.getElementById('upassword').value;
    const password2 = document.getElementById('cpassword').value;
  const buttonDis =document.getElementsByClassName("registerButton")

    if (password1 !== password2) {
        alert('Şifreler eşleşmiyor!');
    }
}

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
}
}
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
}
}