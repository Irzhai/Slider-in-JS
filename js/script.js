var Slide = 1;
function Divler(n){
    var i;
    var Qir = document.getElementsByClassName("Qiraq");
    var Yum = document.getElementsByClassName("yumru");
    if (n > Qir.length) {
        Slide = 1
    }
    if (n < 1) {
        Slide = Qir.length
    }
    for (i = 0; i < Qir.length; i++) {
        Qir[i].style.display = "none";
        Yum[i].style.background = 'transparent';
    }
    Qir[Slide - 1].style.display = "block";
  Yum[Slide - 1].style.background='gray';
}
function Divs_pl(n) {
    Divler(Slide += n);
}
Divler(Slide);
