let amount = document.getElementsByClassName("amount")[0].innerText

document.getElementsByClassName("amount")[0].innerText = `Rp ` + (25000 * document.getElementsByClassName("count")[0].innerText)

let qtyBuku = document.getElementsByClassName("count")
let hargaBuku = document.getElementsByClassName("amount")


function btnIncrease0() {
  document.getElementsByClassName("count")[0].innerText++
  document.getElementsByClassName("amount")[0].innerText = `Rp ` + (25000 * document.getElementsByClassName("count")[0].innerText)

  document.getElementsByClassName("items")[0].innerText++
  document.getElementsByClassName('total-amount')[0].innerText = `Rp ` + (25000 * document.getElementsByClassName("count")[0].innerText)
  document.getElementsByClassName('title')[0].innerText++
  if (document.getElementsByClassName('title')[0].innerText > 0) {
    document.getElementsByClassName('title-book')[0].innerText = 'Books'
  }
  }
  
function btnDecrease0() {
  if (document.getElementsByClassName("count")[0].innerText > 0) {
    document.getElementsByClassName("count")[0].innerText--
    document.getElementsByClassName("items")[0].innerText--
    document.getElementsByClassName("amount")[0].innerText = `Rp ` + (25000 * document.getElementsByClassName("count")[0].innerText)
    document.getElementsByClassName('total-amount')[0].innerText = `Rp ` + (25000 * document.getElementsByClassName("count")[0].innerText)
    document.getElementsByClassName('title')[0].innerText--
    if (document.getElementsByClassName('title')[0].innerText < 2) {
      document.getElementsByClassName('title-book')[0].innerText = 'Book'
    }
  }
}


// =  = = = = = = =  CHECKOUT = = = = = = = = = =


function checkoutAlert() {
  let totalBayar = document.getElementsByClassName("total-amount")[0].innerText
  let confirmAction = confirm(
`Terimakasih sudah mempercayakan Bookshelf Shop.

Total belanja anda saat ini sebesar ${totalBayar},00

Klik Cancel untuk edit keranjang anda.
Klik OK untuk melanjutkan pembayaran.`);

  if (confirmAction) {
alert(`Silahkan transfer ke rekening BCA 7103050517 a/n Reinhard Jordi Kurniawan sebesar ${totalBayar},00

Apabila sudah transfer harap kirim bukti transfer ke nomor whatsapp 0818898950 a/n Jordi (Admin 1 Bookshelf Shop)
`);
  } else {
    alert("Silahkan edit keranjang anda");
  }
}

let removeBtn = document.getElementsByClassName("remove")

function btnRemove() {
  document.getElementsByClassName("count")[0].innerText = 0
  document.getElementsByClassName("amount")[0].innerText = 0
  document.getElementsByClassName("total-amount")[0].innerText = 0
  document.getElementsByClassName("items")[0].innerText = 0
  document.getElementsByClassName('title')[0].innerText = 0
}

const params = new URLSearchParams(window.location.search)
if (params.get('cart')) {
  document.getElementsByClassName('count')[0].innerHTML = params.get('cart')
  document.getElementsByClassName("amount")[0].innerText = `Rp ${params.get('cart') * 25000}`
  document.getElementsByClassName('title')[0].innerHTML = params.get('cart')
  document.getElementsByClassName("items")[0].innerText = params.get('cart')
  document.getElementsByClassName("total-amount")[0].innerText =  document.getElementsByClassName("amount")[0].innerText
}


console.log(params.get('cart'))