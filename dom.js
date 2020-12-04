const nilai1 = document.getElementById('nilai1');
const nilai2 = document.getElementById('nilai2');
const tombolJumlah = document.getElementById('tombolJumlah');
const hasilPenjumlahan = document.getElementById('hasilPenjumlahan');

tombolJumlah.addEventListener("click", function(){
    var nilaisatu = parseInt(nilai1.value);
    var nilaidua = parseInt(nilai2.value);
    var hasil = nilaisatu + nilaidua;
    hasilPenjumlahan.innerHTML = 
    `<div class="alert alert-primary mt-5" role="alert">
        `+hasil+`
    </div>`;
});