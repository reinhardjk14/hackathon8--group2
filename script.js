const BOOKS_AVALAIBLE = [
  {
   "id": 1,
   "name": "The Power Of Focus",
   "category": "Self-Development",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/img20220519_16232371.jpg",
   "author": "Rifian Candra Kusuma",
   "price": 25000
  },
  {
   "id": 2,
   "name": "Sebuah Seni untuk Bersikap Bodo Amat",
   "category": "Self-Development",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/Handy_Book_1.png",
   "author": "Mark Manson",
   "price": 25000
  },
  {
   "id": 3,
   "name": "Insecurity Is My Middle Name",
   "category": "Self-Development",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/Cover_Depan_Insecurity_Is_My_Middle_Name.jpg",
   "author": "Alvi Syahrin",
   "price": 25000
  },
  {
   "id": 4,
   "name": "Talking To Strangers",
   "category": "Self-Development",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/9786020635415_TALKING_TO_STRANGERS_C_1_4.jpg",
   "author": "Malcolm Gladwell",
   "price": 25000
  },
  {
   "id": 5,
   "name": "Ego Is The Enemy",
   "category": "Self-Development",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/9786020496481_Ego_is_The_En.jpg",
   "author": "Ryan Holiday",
   "price": 25000
  },
  {
   "id": 6,
   "name": "Detektif Conan 100",
   "category": "Comic",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/722010275_Cov_Conan_100_1.jpg",
   "author": "Aoyama Gosho",
   "price": 25000
  },
  {
   "id": 7,
   "name": "Spy x Family 02",
   "category": "Comic",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/9786230022272_Spy_x_Family_02.jpg",
   "author": "Endon Tatsuya",
   "price": 25000
  },
  {
   "id": 8,
   "name": "DEMON SLAYER: Kimetsu no Yaiba 08",
   "category": "Comic",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/9786230029806_Demon_Slayer_8.jpg",
   "author": "Koyoharu Gotouge",
   "price": 25000
  },
  {
   "id": 9,
   "name": "LC: Kanojo Okarishimasu 07",
   "category": "Comic",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/722010222_Cov_Kanokari_07_1.jpg",
   "author": "REIJI MIYAJIMA",
   "price": 25000
  },
  {
   "id": 10,
   "name": "Hai, Miiko! 33 - Reguler",
   "category": "Comic",
   "image": "https:\/\/cdn.gramedia.com\/uploads\/items\/9786230305245_Miiko_33_REGULAR-1.jpg",
   "author": "Eriko Ono",
   "price": 25000
  },
  {
   "id": 11,
   "name": "The Baron In The Trees",
   "category": "Fantasy",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/72097\/image_highres\/BLK_TBITT2022940172.jpg",
   "author": "Italo Calvino",
   "price": 25000
  },
  {
   "id": 12,
   "name": "Everna: Rajni Sari",
   "category": "Fantasy",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/72895\/image_highres\/BLK_ERS2022523493.jpg",
   "author": "Andry Chang",
   "price": 25000
  },
  {
   "id": 13,
   "name": "The Story Of Kullervo",
   "category": "Fantasy",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/71733\/image_highres\/BLK_TSOK2022258807.jpg",
   "author": "J.R.R. Tolkien",
   "price": 25000
  },
  {
   "id": 14,
   "name": "Sleeping Giants",
   "category": "Fantasy",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/72828\/image_highres\/BLK_SGF2022951452.jpg",
   "author": "Sylvain Neuvel",
   "price": 25000
  },
  {
   "id": 15,
   "name": "Bannerless",
   "category": "Fantasy",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/72091\/image_highres\/BLK_B2022327470.jpg",
   "author": "Carrie Vaughn",
   "price": 25000
  },
  {
   "id": 16,
   "name": "The Cellar",
   "category": "Horror",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/73618\/image_highres\/BLK_TC2022862841.jpg",
   "author": "A.J. Whitten",
   "price": 25000
  },
  {
   "id": 17,
   "name": "Deep and Dark and Dangerous",
   "category": "Horror",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/73616\/image_highres\/BLK_DADAD2022580921.jpg",
   "author": "Mary Downing Hahn",
   "price": 25000
  },
  {
   "id": 18,
   "name": "Time for Andrew",
   "category": "Horror",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/73612\/image_highres\/BLK_TFA2022228976.jpg",
   "author": "Mary Downing Hahn",
   "price": 25000
  },
  {
   "id": 19,
   "name": "Passing Strange",
   "category": "Horror",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/73476\/image_highres\/BLK_PS2022794252.jpg",
   "author": "Joseph Citro",
   "price": 25000
  },
  {
   "id": 20,
   "name": "Creepy Case Club 5: Kasus Jendela Siluman",
   "category": "Horror",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/72111\/image_highres\/BLK_CCC5KJS202228548.jpg",
   "author": "Rizal Iwan",
   "price": 25000
  },
  {
   "id": 21,
   "name": "First or Fake Love",
   "category": "Romance",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/73701\/image_highres\/BLK_FOFL2022185194.jpg",
   "author": "Remiel",
   "price": 25000
  },
  {
   "id": 22,
   "name": "Le Mariage: Medium Rare Mom",
   "category": "Romance",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/72827\/image_highres\/BLK_LMMRM2022542658.jpg",
   "author": "Mel Bakara",
   "price": 25000
  },
  {
   "id": 23,
   "name": "Leka Lara",
   "category": "Romance",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/71692\/image_highres\/BLK_LL202268019.jpg",
   "author": "Novella Cathlin",
   "price": 25000
  },
  {
   "id": 24,
   "name": "MetroPop: Oh, My Baby Blue",
   "category": "Romance",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/73656\/image_highres\/BLK_MOMBB2022809597.png",
   "author": "Achi TM",
   "price": 25000
  },
  {
   "id": 25,
   "name": "Young Adult: The Arson Project",
   "category": "Romance",
   "image": "https:\/\/ebooks.gramedia.com\/ebook-covers\/73655\/image_highres\/BLK_YATAP2022499613.png",
   "author": "Akaigita",
   "price": 25000
  }
 ]

const produk = document.querySelector('#produk');
const selectedCategory = document.querySelector("#navbarDarkDropdownMenuLink")
load()

function selectCategory(category){
  load(category)
}

function load(category){
  produk.innerHTML = ''
  selectedCategory.innerHTML = category || 'Search By Category'
  for (let i = 0; i < BOOKS_AVALAIBLE.length; i++) {
    if(category === BOOKS_AVALAIBLE[i].category || !category){
      produk.innerHTML += `<div class="col self-dev">
      <div class="card h-100">
      <img src="${BOOKS_AVALAIBLE[i].image}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${BOOKS_AVALAIBLE[i].name}</h5>
      <p class="card-text">${BOOKS_AVALAIBLE[i].author}</p>
      <p class="card-text">Category: ${BOOKS_AVALAIBLE[i].category}</p>
      </div>
      <div class="card-footer">
      <small class="text-muted">Price: IDR ${BOOKS_AVALAIBLE[i].price}</small>
      <button class="add-to-cart" onclick="addToCart()" href="#"><img src="assets/cart4.svg" alt="add to cart"></button>
      </div>
      </div>
      </div> `
    }
  }
}

function addToCart() {
  document.getElementById('cart').innerHTML++
}

const params = new URLSearchParams(window.location.search)
console.log(params.get('cart'))

function goToCart() {
  window.location.replace(`/cart.html?cart=${  document.getElementById('cart').innerHTML}`)
}

