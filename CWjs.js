
const products = [
  { id: 1, name: "Apple iPhone 16 (128GB, White)", category: "Smartphones", price: 78999, rating: 4.9, description: "Apple A18 Bionic chip, 6.1-inch Super Retina display.", image: "https://tehnoyard.ru/image/cache/catalog/16092024/SmartfonAppleiPhone16ProMax256GB,WhiteTitanium(belij)/1vu-1000x1000.jpg" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", category: "Smartphones", price: 129999, rating: 4.8, description: "Dynamic AMOLED 2X display, 200MP camera.", image: "https://m.media-amazon.com/images/I/81vxWpPpgNL._SL1500_.jpg" },
  { id: 3, name: "boAt Airdopes 800 ANC", category: "Audio", price: 3999, rating: 4.6, description: "Noise cancellation up to 50dB, 40 hours playback.", image: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard1_2458620d-a842-406a-a1cb-991dfd4fcd29_900x.png?v=1715691844" },
  { id: 4, name: "Fire-Boltt Visionary Ultra Smartwatch", category: "Wearables", price: 5999, rating: 4.5, description: "AMOLED Display, Bluetooth calling, 120+ sports modes.", image: "https://images.fonearena.com/blog/wp-content/uploads/2023/08/Fire-Boltt-Visionary-Ultra.jpeg" },
  { id: 5, name: "Asus TUF Gaming A15 Laptop", category: "Computers", price: 104999, rating: 4.7, description: "Ryzen 7, RTX 4060, 16GB RAM, 1TB SSD.", image: "https://x.imastudent.com/content/0020552_asus-156-tuf-a15-fa566iu-hn231t-gaming-laptop_500.jpeg" },
  { id: 6, name: "Sony WH-1000XM5 Headphones", category: "Audio", price: 29990, rating: 4.9, description: "Industry-leading noise cancellation and 30-hour battery.", image: "https://www.soundguys.com/wp-content/uploads/2022/05/sony-wh-1000xm5-hero.jpg" },
  { id: 7, name: "Redragon K551 Mechanical Keyboard", category: "Accessories", price: 6999, rating: 4.6, description: "RGB lighting, clicky blue switches.", image: "https://m.media-amazon.com/images/I/71NnypOJQEL._SL1500_.jpg" },
  { id: 8, name: "URBN 20000mAh 22.5W Power Bank", category: "Accessories", price: 2499, rating: 4.4, description: "Compact design, Type-C PD fast charging.", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/power-bank/b/m/e/-original-imagxy37v45eke6x.jpeg?q=90" },
  { id: 9, name: "Samsung Odyssey G7 27-inch Monitor", category: "Electronics", price: 49999, rating: 4.8, description: "240Hz, QHD, 1000R curved display.", image: "https://m.media-amazon.com/images/I/81Iv5fQAyBL._SL1500_.jpg" },
  { id: 10, name: "DJI Mini 4 Pro Drone", category: "Gadgets", price: 115999, rating: 4.9, description: "4K HDR video, 34-min flight time, omnidirectional sensors.", image: "https://s.yimg.com/uu/api/res/1.2/LOoZaypRnO_R.mkNVnqrwg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-09/9d4cdcb0-5b9c-11ee-bf4a-9194b1dcf942.cf.jpg" },
  { id: 11, name: "OnePlus Buds 3 Pro", category: "Audio", price: 7499, rating: 4.5, description: "Dual drivers, Dolby Atmos, 49dB ANC.", image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/0373790c-2aee-40d3-b132-ea69311b8c3e.__CR0,0,970,600_PT0_SX970_V1___.jpg" },
  { id: 12, name: "HP Envy x360 Touch Laptop", category: "Computers", price: 87999, rating: 4.7, description: "Ryzen 5 7530U, 16GB RAM, 512GB SSD.", image: "https://images-na.ssl-images-amazon.com/images/I/81j3fsAfABL._SL1500_.jpg" },
  { id: 13, name: "boAt Stone 1450 Bluetooth Speaker", category: "Audio", price: 4999, rating: 4.6, description: "80W RMS sound, RGB lights, waterproof.", image: "https://www.boat-lifestyle.com/cdn/shop/products/S1450-FI_Blue04_1200x.png?v=1659430658" },
  { id: 14, name: "Apple Watch Ultra 2", category: "Wearables", price: 89999, rating: 4.8, description: "Titanium case, 36 hours battery life, GPS + Cellular.", image: "https://www.apple.com/newsroom/images/2024/09/apple-watch-ultra-2-now-available-in-black-titanium/article/Apple-Watch-Ultra-2-hero-240909_big.jpg.large_2x.jpg" },
  { id: 15, name: "Sony PlayStation 5 (Disc Edition)", category: "Gaming", price: 55999, rating: 4.9, description: "8K graphics, 825GB SSD, DualSense controller.", image: "https://i5.walmartimages.com/asr/281a283b-6dd1-4072-a274-973fb67ca7d2.e26b4700bb82dc0a1c9f600d88acaf73.jpeg" },
  { id: 16, name: "Mi 50-inch 4K Smart TV", category: "Electronics", price: 38999, rating: 4.4, description: "Ultra HD, Dolby Vision, PatchWall OS.", image: "https://m.media-amazon.com/images/I/81UT46-gwRL._UF1000,1000_QL80_.jpg" },
  { id: 17, name: "Logitech MX Master 3S Mouse", category: "Accessories", price: 8999, rating: 4.8, description: "Silent clicks, ergonomic, 8K DPI precision.", image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._SL1500_.jpg" },
  { id: 18, name: "Canon EOS R10 Mirrorless Camera", category: "Cameras", price: 85999, rating: 4.7, description: "24.2MP APS-C sensor, 4K 60p video.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3yzrVQSumcRlw7npBJplDKGGJt8OlGwFFA&s" },
  { id: 19, name: "Amazon Echo Show 10", category: "Smart Home", price: 22999, rating: 4.6, description: "10.1” HD display, Alexa, smart home hub.", image: "https://m.media-amazon.com/images/I/71RC3o90shL._SL1500_.jpg" },
  { id: 20, name: "Noise ColorFit Pro 5 Max", category: "Wearables", price: 5499, rating: 4.5, description: "AMOLED display, BT calling, SpO2 tracking.", image: "https://m.media-amazon.com/images/I/61pdHUiqVRL.jpg" }
];

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const noResults = document.getElementById("noResults");
const cartCount = document.getElementById("cartCount");
const modal = document.getElementById("productModal");
const cartPanel = document.getElementById("cartPanel");


function renderProducts(list) {
  productsGrid.innerHTML = "";
  if (list.length === 0) { noResults.classList.remove("hidden"); return; }
  noResults.classList.add("hidden");
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card bg-white/10 rounded-2xl p-4 shadow-xl hover:bg-white/20 transition";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="rounded-xl w-full aspect-[4/3] object-cover mb-3">
      <h3 class="font-semibold text-lg text-white">${p.name}</h3>
      <p class="text-sm text-gray-300">${p.category}</p>
      <div class="flex justify-between items-center mt-2">
        <span class="font-bold text-yellow-400">₹${p.price.toLocaleString("en-IN")}</span>
        <span class="text-yellow-500 text-sm">⭐ ${p.rating}</span>
      </div>
      <button onclick="openModal(${p.id})" class="mt-4 bg-yellow-500 text-gray-900 w-full py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">View Details</button>
    `;
    productsGrid.appendChild(card);
  });
}
renderProducts(products);

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  renderProducts(filtered);
});

sortSelect.addEventListener("change", e => {
  let sorted = [...products];
  if (e.target.value === "price-low") sorted.sort((a,b)=>a.price-b.price);
  if (e.target.value === "price-high") sorted.sort((a,b)=>b.price-a.price);
  renderProducts(sorted);
});

let selectedProduct = null;
function openModal(id) {
  selectedProduct = products.find(p=>p.id===id);
  document.getElementById("modalImage").src = selectedProduct.image;
  document.getElementById("modalName").textContent = selectedProduct.name;
  document.getElementById("modalDescription").textContent = selectedProduct.description;
  document.getElementById("modalPrice").textContent = `₹${selectedProduct.price.toLocaleString("en-IN")}`;
  document.getElementById("modalCategory").textContent = selectedProduct.category;
  document.getElementById("modalRating").textContent = `⭐ ${selectedProduct.rating}`;
  modal.classList.remove("hidden");
  setTimeout(()=>modal.querySelector(".modal-content").classList.add("show"),10);
}

document.getElementById("closeModal").onclick = ()=> {
  modal.querySelector(".modal-content").classList.remove("show");
  setTimeout(()=>modal.classList.add("hidden"),200);
};

let cart = [];

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p class='text-center text-gray-500'>Your cart is empty.</p>";
    cartTotal.textContent = "₹0";
    cartCount.textContent = "0";
    return;
  }

  let total = 0;
  cart.forEach((item, i) => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-gray-800 p-3 rounded-lg";
    div.innerHTML = `
      <div>
        <p class="font-semibold">${item.name}</p>
        <p class="text-sm text-gray-400">Qty: ${item.qty}</p>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-yellow-400 font-bold">₹${(item.price*item.qty).toLocaleString("en-IN")}</span>
        <button onclick="removeFromCart(${i})" class="text-red-600 hover:text-red-400"><i data-lucide="trash-2"></i></button>
      </div>
    `;
    cartItems.appendChild(div);
  });

  lucide.createIcons();
  cartTotal.textContent = `₹${total.toLocaleString("en-IN")}`;
  cartCount.textContent = cart.reduce((a,b)=>a+b.qty,0);
}

document.getElementById("addToCartBtn").onclick = () => {
  const existing = cart.find(p=>p.id===selectedProduct.id);
  if (existing) existing.qty += 1;
  else cart.push({...selectedProduct, qty:1});
  updateCart();
  modal.querySelector(".modal-content").classList.remove("show");
  setTimeout(()=>modal.classList.add("hidden"),200);
};

function removeFromCart(i){ cart.splice(i,1); updateCart(); }

document.getElementById("checkoutBtn").onclick = ()=>alert("Checkout feature coming soon!");

document.getElementById("cartBtn").onclick = ()=>cartPanel.classList.add("open");
document.getElementById("closeCart").onclick = ()=>cartPanel.classList.remove("open");

lucide.createIcons();
