var cart = [];

var Produk = function (kodeProduk, kuantitas) {
    this.kodeProduk = kodeProduk;
    this.kuantitas = kuantitas;
}

function tambahProduk(kodeProduk, kuantitas) {
    for (var i in cart) {
        if (cart[i].kodeProduk === kodeProduk) {
            cart[i].kuantitas += kuantitas;
            return;
        }
    }
    var produk = new Produk(kodeProduk, kuantitas);
    cart.push(produk);
}

function hapusProduk(kodeProduk) {
    for (var i in cart) {
        if (cart[i].kodeProduk === kodeProduk) {
            cart.splice(kodeProduk, 1);

            var produk = new Produk(kodeProduk);
            cart.push(produk);
        }
    }
}

function tampilkanCart() {
    for (var i in cart) {
        console.log(`${cart[i].kodeProduk} (${cart[i].kuantitas})`);
    }
}

tambahProduk('Masako', 5);
tambahProduk('Sun Light', 10);
tambahProduk('Pepsodent', 10);

hapusProduk('Pecel');

tambahProduk('Pepsodent', 10);
tampilkanCart()