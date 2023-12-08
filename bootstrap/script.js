function topFunction() {
    document.body.scrollTop = 0; // Untuk Safari
    document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
  }

  // Menunjukkan atau menyembunyikan tombol berdasarkan posisi scroll
  window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTopBtn").style.display = "block";
    } else {
      document.getElementById("backToTopBtn").style.display = "none";
    }
  };

function klik(){
  alert("Sorry we have an Error :(, Try again later");
}