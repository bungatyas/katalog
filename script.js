const produkSkincare = [
    {
        brand: "Skintific",
        nama: "5X Ceramide Moisture Gel",
        harga: "Rp 100.000",
        deskripsi: "Pelembap wajah yang membantu menjaga kelembapan dan merawat skin barrier.",
        gambar: "img/moist scintific.jpeg"
    },
    {
        brand: "Skintific",
        nama: "Niacinamide Serum",
        harga: "Rp 113.000",
        deskripsi: "Serum untuk membantu membuat tampilan kulit terlihat lebih cerah dan merata.",
        gambar: "img/serum scintific.jpeg"
    },
    {
        brand: "Skintific",
        nama: "5X Ceramide Sunscreen",
        harga: "Rp 115.000",
        deskripsi: "Sunscreen untuk membantu melindungi kulit dari paparan sinar matahari.",
        gambar: "img/sunscreen scintific.jpeg"
    },
    {
        brand: "Glad2Glow",
        nama: "G2G pomegranmate 10% Niacinamide serum",
        harga: "Rp 40.000",
        deskripsi: "Serum G2G adalah produk perawatan wajah yang membantu merawat kulit, melembapkan, dan membuat kulit tampak lebih sehat.",
        gambar: "img/serum g2g.jpeg"
    },
    {
        brand: "Glad2Glow",
        nama: "G2G cherry blossom betaine micellar water",
        harga: "Rp 45.000",
        deskripsi: "Micellar water G2G adalah produk pembersih wajah yang membantu mengangkat kotoran, minyak, dan sisa makeup agar wajah bersih dan segar.",
        gambar: "img/micelar g2g.jpeg"
    },
    {
        brand: "Glad2Glow",
        nama: "G2G pomegranmate 5% Niacinamide brightening moisturaizer",
        harga: "Rp 40.000",
        deskripsi: "Moisturizer G2G adalah produk perawatan wajah yang membantu melembapkan kulit, menjaga kelembapan, dan membuat kulit terasa lebih halus.",
        gambar: "img/moist g2g.jpeg"
    },
    {
        brand: "Facetology",
        nama: "Facetology Triple Care 13,5% Total Acids Purple Ranger Peeling Treatment,",
        harga: "Rp 50.000",
        deskripsi: "Pembersih wajah untuk membantu mengangkat kotoran pada kulit.",
        gambar: "img/exfo facetolgy.jpeg"
    },
    {
        brand: "Facetology",
        nama: "Facetology Triple Care Sunscreen SPF 40 PA+++",
        harga: "Rp 91.000",
        deskripsi: "Sunscreen Facetology adalah produk pelindung kulit dari sinar UV matahari yang membantu mencegah kulit terbakar dan menjaga kulit tetap sehat.",
        gambar: "img/susceen facetologi.jpeg"
    },
    {
        brand: "Facetology",
        nama: "Facetology Triple Care Acne Calm Micellar Water",
        harga: "Rp 35.000",
        deskripsi: "Micellar water Facetology adalah pembersih wajah yang membantu mengangkat kotoran, minyak, dan sisa makeup agar wajah bersih dan segar.",
        gambar: "img/micelar facetology.jpeg"
    }
];

function tampilkanDetail(index) {
    let produk = produkSkincare[index];

    document.getElementById("detailNama").textContent = produk.nama;
    document.getElementById("detailBrand").textContent = produk.brand;
    document.getElementById("detailHarga").textContent = produk.harga;
    document.getElementById("detailDeskripsi").textContent = produk.deskripsi;
    document.getElementById("detailGambar").src = produk.gambar;
    document.getElementById("detailGambar").alt = produk.nama;

    document.getElementById("detailModal").classList.add("aktif");
}

function tutupDetail() {
    document.getElementById("detailModal").classList.remove("aktif");
}

document.getElementById("detailModal").addEventListener("click", function(event) {
    if (event.target === this) {
        tutupDetail();
    }
});