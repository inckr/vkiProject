const users = JSON.parse(localStorage.getItem('users')) || [];

    function login() {
      const uemail = document.getElementById('uemail').value;
      const upassword = document.getElementById('upassword').value;

      // Kullanıcıyı kontrol et, localStorage'dan alınan bilgilerle eşleşiyor mu
      const user = users.find(user => user.uemail === uemail && user.upassword === upassword);

      if (user) {
        alert('Giriş başarılı!');
      } else {
        alert('Kullanıcı adı veya şifre yanlış!');
      }
    }