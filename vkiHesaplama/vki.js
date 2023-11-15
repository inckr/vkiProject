// Boy ve Kilo Elementlerinin Seçilmesi
var boySelect = document.getElementById("boySelect");

// Boy Sayıları Eklemek İçin Döngü
for (var i = 110; i <= 260; i++) {
  var option = document.createElement("option");
  option.innerHTML = i;
  if (i === 150) {
    option.selected = true;
  }
  boySelect.appendChild(option);
}
var kiloSelect = document.getElementById("kiloSelect");

// Kilo Sayılarını Eklemek İçin Döngü
for (var i = 30; i <= 260; i++) {
  var option = document.createElement("option");
  option.innerHTML = i;
  if (i === 55) {
    option.selected = true;
  }
  kiloSelect.appendChild(option);
}

// Hesaplama
function hesapla() {
  var kilo = document.getElementById("kiloSelect").value;
  var boy = document.getElementById("boySelect").value;
  var k = Number(kilo);
  var b = Number(boy / 100);
  var h = k / (b * b);

  // Sonuçlara Göre Bilgilerin Alert İle Gösterimi
  if (h < 18.5) {
    alert(
      "=> " +
        h.toFixed(1) +
        " Değerinize göre tıbben ZAYIF kategorisindesiniz. Sağlıklı bir şekilde ideal kilonuza ulaşabilmeniz için lütfen bir kliniğe başvurunuz."
    );
  } else if (h >= 18.5 && h < 24.99) {
    alert(
      "=> " +
        h.toFixed(1) +
        " Değerinize göre tıbben NORMAL kategorisindesiniz. Sizi tebrik eder, bundan sonraki yaşamınızda da formunuzu korumanızı dileriz."
    );
  } else if ("=> " + h > 25 && h < 29.99) {
    alert(
      h.toFixed(1) +
        "Değerinize göre tıbben KİLOLU kategorisindesiniz. Size medikal tedavi öneriyoruz. Diyet ve egzersiz yaparak ideal kilonuza ulaşabilirsiniz. Bunun için kliniğe başvurbilirsiniz."
    );
  } else {
    alert(
      "=> " +
        h.toFixed(1) +
        " Değerinize göre tıbben OBEZİTE kategorisindesiniz. Sağlıklı bir şekilde zayıflayabilmeniz için en yakın zamanda bir kliniğe başvurup kilo vermelisiniz."
    );
  }
}

// Cinsiyet Seçimi Aktif-Pasif
function selectGender(selectedGender) {
  // Tüm Cinsiyetlerin Önce Pasif Görünmesi
  var genders = document.querySelectorAll(".vki-gender div");
  genders.forEach(function (element) {
    element.classList.remove("active");
  });

  // Seçilen Cinsiyetin Aktif Olması
  var selectedElement = document.querySelector(".vki-" + selectedGender);
  selectedElement.classList.add("active");
}
