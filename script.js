// Fungsi untuk memformat angka ke format Rupiah (contoh: Rp300.000)
function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

// Fungsi utama sesuai langkah pengerjaan proyek
function hitungTotal() {
    // 1. Ambil data dari input
    const namaPembeli = document.getElementById("namaPembeli").value.trim();
    const namaBarang = document.getElementById("namaBarang").value.trim();
    const hargaBarang = parseFloat(document.getElementById("hargaBarang").value);
    const jumlahBarang = parseInt(document.getElementById("jumlahBarang").value);

    // Validasi input kosong atau tidak valid
    if (!namaPembeli || !namaBarang || isNaN(hargaBarang) || isNaN(jumlahBarang) || hargaBarang < 0 || jumlahBarang <= 0) {
        alert("Mohon lengkapi semua data input dengan benar!");
        return;
    }

    // 2. Hitung subtotal
    const subtotal = hargaBarang * jumlahBarang;

    // 3. Tentukan diskon menggunakan percabangan
    let diskon = 0;
    let persenDiskon = "";

    if (subtotal >= 500000) {
        diskon = subtotal * 0.10; // Diskon 10%
        persenDiskon = "(10%)";
    } else if (subtotal >= 250000) {
        diskon = subtotal * 0.05; // Diskon 5%
        persenDiskon = "(5%)";
    } else {
        diskon = 0; // Tidak ada diskon
        persenDiskon = "(0%)";
    }

    // 4. Hitung total pembayaran
    const totalBayar = subtotal - diskon;

    // 5. Tampilkan hasil ke halaman menggunakan manipulasi DOM
    document.getElementById("outPembeli").textContent = namaPembeli;
    document.getElementById("outBarang").textContent = `${namaBarang} (${jumlahBarang}x)`;
    document.getElementById("outSubtotal").textContent = formatRupiah(subtotal);
    document.getElementById("infoDiskon").textContent = persenDiskon;
    document.getElementById("outDiskon").textContent = formatRupiah(diskon);
    document.getElementById("outTotal").textContent = formatRupiah(totalBayar);

    // Munculkan kotak hasil
    document.getElementById("hasilContainer").classList.remove("hidden");
}

// Event listener untuk tombol Hitung dan Reset
document.getElementById("btnHitung").addEventListener("click", hitungTotal);

document.getElementById("btnReset").addEventListener("click", function () {
    document.getElementById("hasilContainer").classList.add("hidden");
});