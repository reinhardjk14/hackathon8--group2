let amount = document.getElementsByClassName("amount")[0].innerText
let totalBayar = document.getElementsByClassName("total-amount")[0].innerText

document.getElementsByClassName("amount")[0].innerText = `Rp ` + (15000 * document.getElementsByClassName("count")[0].innerText)

let qtyBuku = document.getElementsByClassName("count")
let hargaBuku = document.getElementsByClassName("amount")


function btnIncrease0() {
  document.getElementsByClassName("count")[0].innerText++
  document.getElementsByClassName("amount")[0].innerText = `Rp ` + (15000 * document.getElementsByClassName("count")[0].innerText)

  document.getElementsByClassName("items")[0].innerText++
  document.getElementsByClassName('total-amount')[0].innerText = `Rp ` + (15000 * document.getElementsByClassName("count")[0].innerText)
}

function btnDecrease0() {
  document.getElementsByClassName("count")[0].innerText--
  document.getElementsByClassName("amount")[0].innerText = `Rp ` + (15000 * document.getElementsByClassName("count")[0].innerText)
  document.getElementsByClassName('total-amount')[0].innerText = `Rp ` + (15000 * document.getElementsByClassName("count")[0].innerText)
  
  if (document.getElementsByClassName("count")[0].innerText === 0) {
    alert("Hello! I am an alert box!")
  }
}

function btnIncrease1() {
  document.getElementsByClassName("count")[1].innerText++
  document.getElementsByClassName("amount")[1].innerText = `Rp ` + (15000 * document.getElementsByClassName("count")[1].innerText)

  document.getElementsByClassName("items")[1].innerText++
  
}

function btnDecrease1() {
  document.getElementsByClassName("count")[1].innerText--
  document.getElementsByClassName("amount")[1].innerText = `Rp ` + (15000 * document.getElementsByClassName("count")[1].innerText)

  if (document.getElementsByClassName("count")[1].innerText === 1) {
    alert("Hello! I am an alert box!")
  }
}


// =  = = = = = = =  CHECKOUT = = = = = = = = = =




function checkoutAlert() {
  let confirmAction = confirm(
`Terimakasih sudah mempercayakan Bookshelf Shop.

Total belanja anda saat ini sebesar ${totalBayar},00

Klik Cancel untuk edit keranjang anda.
Klik OK untuk melanjutkan pembayaran.`);

  if (confirmAction) {
alert(`Silahkan transfer ke rekening BCA 5390232491 a/n Vira sebesar ${totalBayar},00

Apabila sudah transfer harap kirim bukti transfer ke nomor whatsapp 081275829203 a/n Vira (Admin 1 Bookshelf Shop)
`);
  } else {
    alert("Silahkan edit keranjang anda");
  }
}

let removeBtn = document.getElementsByClassName("remove")

for (let i = 0; i < removeBtn.length; i++) {
  //console.log(i, removeBtn[i].innerText);

  function btnRemove() {
    document.getElementsByClassName("count")[i].innerText = 0
    document.getElementsByClassName("amount")[i].innerText = 0
  }
}


