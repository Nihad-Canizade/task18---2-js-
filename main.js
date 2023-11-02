// Nihad

function Hesabla(){
    var nh = document.getElementById("nihadheight").value;
    var nw = document.getElementById("nihadweight").value;
    var nisum = nw / (nh ** 2);
    document.getElementById("ni-netice").value = nisum;

    var nihadin_boyu = 169;
    var nihadin_cekisi = 75;
    var nisum2 = nihadin_cekisi / (nihadin_boyu ** 2);
    
    if(nh == "x" && nw == "y"){
        document.getElementById("ni-netice").value = nisum2;
    }
}


// Nail

function Hesabla2(){
    var nh2 = document.getElementById("nailheight").value;
    var nw2 = document.getElementById("nailweight").value;
    var nasum = nw2 / (nh2 ** 2);
    document.getElementById("na-netice").value = nasum;

    var nailin_boyu = 187;
    var nailin_cekisi = 65;
    var nasum2 = nailin_cekisi / (nailin_boyu ** 2)
    if(nh2 == "a" && nw2 == "b"){
        document.getElementById("na-netice").value = nasum2;
    }
}


// Sual , Cavab
var nihadin_boyu = 169;
var nihadin_cekisi = 75;
var nisum2 = nihadin_cekisi / (nihadin_boyu ** 2);
    

var nailin_boyu = 187;
var nailin_cekisi = 65;
var nasum2 = nailin_cekisi / (nailin_boyu ** 2);

if(nisum2 > nasum2){
    console.log(true);
} else{
    console.log(false);
}