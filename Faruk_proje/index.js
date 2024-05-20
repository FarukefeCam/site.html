function showImage() {
    var image = document.getElementById("ok");
    image.style.display = "block";
  }
  
  function hideImage() {
    var image = document.getElementById("ok");
    image.style.display = "none";
  }
  window.onscroll = function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      showImage();
    } else {
      hideImage();
    }


  }
  function Tema(){
    if (document.getElementById("mode").checked == true) {
      document.getElementById("body").style.backgroundColor = "white";
      document.getElementById("anadiv").style.backgroundColor="lightgray";
      document.getElementById("body").style.color="black";
      document.getElementById("header").style.backgroundColor="white";
      document.getElementById("footer").style.backgroundColor="white";
    } else {
      document.getElementById("body").style.backgroundColor = "#454545";
      document.getElementById("anadiv").style.backgroundColor = "#4b4b4b";
      document.getElementById("body").style.color="white";
      document.getElementById("header").style.backgroundColor="#525151";
      document.getElementById("footer").style.backgroundColor="#525151";
    }
  };
  function geceModuKontrol() {
    var body = document.getElementById("body");
    var checkbox = document.getElementById("mode");
    if (checkbox.checked) {
      localStorage.removeItem("geceModuAktif");
    } else {
      localStorage.setItem("geceModuAktif", "true");
    }
    Tema();
  }
  function sayfaYuklendi() {
    if (localStorage.getItem("geceModuAktif")) {
      document.getElementById("mode").checked = false;
      geceModuKontrol();
    }
  };
