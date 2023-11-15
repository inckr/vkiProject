// Select elementini seç
    var boySelect = document.getElementById("boySelect");

    // 30'dan 260'a kadar olan sayıları eklemek için bir for döngüsü
    for (var i = 110; i <= 300; i++) {
      // Option elementini oluştur ve innerHTML kullanarak içeriğini ayarla
      var option = document.createElement("option");
      option.innerHTML = i;
      if(i===150){option.selected=true;}
      // Option elementini select elementine ekle
      boySelect.appendChild(option);
    }
    var kiloSelect = document.getElementById("kiloSelect");

    // 30'dan 260'a kadar olan sayıları eklemek için bir for döngüsü
    for (var i = 30; i <= 260; i++) {
      // Option elementini oluştur ve innerHTML kullanarak içeriğini ayarla
      var option = document.createElement("option");
      option.innerHTML = i;
      if(i===55){option.selected=true;}
      // Option elementini select elementine ekle
      kiloSelect.appendChild(option);
    }
 


 function hesapla(){
  var kilo=document.getElementById("kiloSelect").value;
  var boy=document.getElementById("boySelect").value;

  var k= Number(kilo);
  var b=Number(boy/100);
  var h=k / (b*b);
  if(h<18){
    alert(h.toFixed(1) +" zayıf")
  }else if(h>=18 && h<25){
    alert(h.toFixed(1) +" normal")
  } else alert(h.toFixed(1)+" kilolu")
  };
 


  function selectGender(selectedGender) {
    // Tüm cinsiyetleri pasif yap
    var genders = document.querySelectorAll('.vki-gender div');
    genders.forEach(function (element) {
        element.classList.remove('active');
    });

    // Seçilen cinsiyeti aktif yap
    var selectedElement = document.querySelector('.vki-' + selectedGender);
    selectedElement.classList.add('active');
}







    