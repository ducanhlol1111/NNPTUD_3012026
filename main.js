// Product Data
const products = [
    {
        "id": 6,
        "title": "Quần Jogger Comfort Cổ Điển",
        "slug": "classic-comfort-fit-joggers",
        "price": 25,
        "description": "Khám phá sự kết hợp hoàn hảo giữa phong cách và sự thoải mái...",
        "category": {
            "id": 1,
            "name": "Quần Áo",
            "slug": "quan-ao",
            "image": "https://source.unsplash.com/600x600/?clothes"
        },
        "images": [
            "https://source.unsplash.com/600x600/?clothes,jeans",
            "https://source.unsplash.com/600x600/?clothes,casual",
            "https://source.unsplash.com/600x600/?clothes,style"
        ]
    },
    // Duplicates for demo purposes
    {
        "id": 7,
        "title": "Quần Cargo Tiện Ích Đô Thị",
        "slug": "urban-utility-cargo-pants",
        "price": 45,
        "description": "Chức năng và phong cách.",
        "category": {
            "id": 1,
            "name": "Quần Áo",
            "slug": "clothes",
            "image": "https://source.unsplash.com/600x600/?clothes"
        },
        "images": ["https://source.unsplash.com/600x600/?clothes,pants"]
    },
    {
        "id": 8,
        "title": "Áo Thun Cotton Cơ Bản",
        "slug": "essential-cotton-tee",
        "price": 18,
        "description": "Mềm mại và thoáng khí.",
        "category": {
            "id": 1,
            "name": "Quần Áo",
            "slug": "clothes",
            "image": "https://source.unsplash.com/600x600/?clothes"
        },
        "images": ["https://source.unsplash.com/600x600/?tshirt,clothing"]
    },
    {
        "id": 9,
        "title": "Áo Khoác Denim Vintage",
        "slug": "vintage-denim-jacket",
        "price": 65,
        "description": "Phong cách vượt thời gian với sự thoải mái hiện đại.",
        "category": {
            "id": 1,
            "name": "Quần Áo",
            "slug": "clothes",
            "image": "https://source.unsplash.com/600x600/?clothes"
        },
        "images": ["https://source.unsplash.com/600x600/?jacket,denim"]
    },
    {
        "id": 10,
        "title": "Giày Sneaker Thường Ngày",
        "slug": "casual-sneakers",
        "price": 35,
        "description": "Thoải mái và linh hoạt.",
        "category": {
            "id": 2,
            "name": "Giày Dép",
            "slug": "shoes",
            "image": "https://source.unsplash.com/600x600/?shoes"
        },
        "images": ["https://source.unsplash.com/600x600/?sneakers"]
    },
    {
        "id": 11,
        "title": "Ví Da",
        "slug": "leather-wallet",
        "price": 22,
        "description": "Tinh tế và chức năng.",
        "category": {
            "id": 3,
            "name": "Phụ Kiện",
            "slug": "accessories",
            "image": "https://source.unsplash.com/600x600/?accessories"
        },
        "images": ["https://source.unsplash.com/600x600/?wallet,leather"]
    },
    {
        "id": 12,
        "title": "Tai Nghe Không Dây",
        "slug": "wireless-headphones",
        "price": 89,
        "description": "Âm thanh chất lượng cao với khả năng chống ồn.",
        "category": {
            "id": 4,
            "name": "Điện Tử",
            "slug": "electronics",
            "image": "https://source.unsplash.com/600x600/?electronics"
        },
        "images": ["https://source.unsplash.com/600x600/?headphones,wireless"]
    },
    {
        "id": 13,
        "title": "Thảm Yoga",
        "slug": "yoga-mat",
        "price": 28,
        "description": "Bề mặt chống trượt cho bài tập của bạn.",
        "category": {
            "id": 5,
            "name": "Thể Thao",
            "slug": "sports",
            "image": "https://source.unsplash.com/600x600/?sports"
        },
        "images": ["https://source.unsplash.com/600x600/?yoga,mat"]
    },
    {
        "id": 14,
        "title": "Ốp Điện Thoại",
        "slug": "smartphone-case",
        "price": 15,
        "description": "Ốp bảo vệ và thời trang cho điện thoại.",
        "category": {
            "id": 3,
            "name": "Phụ Kiện",
            "slug": "accessories",
            "image": "https://source.unsplash.com/600x600/?accessories"
        },
        "images": ["https://source.unsplash.com/600x600/?phone,case"]
    },
    {
        "id": 15,
        "title": "Giày Chạy Bộ",
        "slug": "running-shoes",
        "price": 55,
        "description": "Nhẹ nhàng và thoải mái cho việc chạy bộ.",
        "category": {
            "id": 2,
            "name": "Giày Dép",
            "slug": "shoes",
            "image": "https://source.unsplash.com/600x600/?shoes"
        },
        "images": ["https://source.unsplash.com/600x600/?running,shoes"]
    },
    {
        "id": 16,
        "title": "Loa Bluetooth",
        "slug": "bluetooth-speaker",
        "price": 40,
        "description": "Loa di động với chất lượng âm thanh tuyệt vời.",
        "category": {
            "id": 4,
            "name": "Điện Tử",
            "slug": "electronics",
            "image": "https://source.unsplash.com/600x600/?electronics"
        },
        "images": ["https://source.unsplash.com/600x600/?speaker,bluetooth"]
    },
    {
        "id": 17,
        "title": "Áo Hoodie",
        "slug": "hooded-sweatshirt",
        "price": 32,
        "description": "Ấm áp và thoải mái cho những ngày lạnh.",
        "category": {
            "id": 1,
            "name": "Quần Áo",
            "slug": "clothes",
            "image": "https://source.unsplash.com/600x600/?clothes"
        },
        "images": ["https://source.unsplash.com/600x600/?hoodie"]
    }
];

function renderProductList() {
    const container = document.getElementById('product-container');
    container.className = 'container product-grid'; // Ensure grid class is applied

    container.innerHTML = products.map(product => {
        const image = cleanUrl(product.images[0]);
        return `
            <div class="product-card">
                <div class="card-image-wrapper">
                    <img src="${image}" alt="${product.title}" onerror="this.src='https://placehold.co/600x600?text=No+Image'">
                </div>
                <div class="card-details">
                    <span class="card-category">${product.category.name}</span>
                    <h3 class="card-title">${product.title}</h3>
                    <div class="card-price">
                        <span>$</span>${product.price.toFixed(2)}
                    </div>
                    <button class="card-btn" onclick="addToCart(this)">
                        Thêm Vào Giỏ
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function cleanUrl(url) {
    if (!url) return '';
    return url.replace(/[\[\]"]/g, '');
}

window.addToCart = function (btn) {
    const originalText = btn.innerText;
    btn.innerText = "Đã Thêm";
    btn.style.backgroundColor = "#10b981";

    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
    }, 1500);
}

document.addEventListener('DOMContentLoaded', renderProductList);
