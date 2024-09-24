<script>
    import {Button} from "saraui";

    const Title = "Jastip";
    import Header from "../../components/header.svelte";
    import Footer from "../../components/footer.svelte";
</script>

<Header />
<div class="bg-[#f2f2f2] rounded-box shadow-md p-6 h-screen overflow-y-auto">
    <form class="flex flex-col gap-4">
        <!-- label dan button input tambah field UMKM -->
        <div class="flex flex-row items-center">
            <label for="name" class="text-lg mx-2">Nama UMKM</label>
            <div class="flex flex-row gap-2 items-end justify-end ml-auto">
                <button class="btn btn-ghost border-[#F9832A] text-[#F9832A]">+</button>
            </div>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <input type="text" id="namaUMKM" class="input input-bordered flex-grow" placeholder="Nama UMKM Pilihan Kamu">
        </div>
        <!-- label dan button input tambah field UMKM -->
        <div class="flex flex-row items-center">
            <label for="name" class="text-lg mx-2">Nama Barang</label>
            <div class="flex flex-row gap-2 items-end justify-end ml-auto">
                <button class="btn btn-ghost border-[#F9832A] text-[#F9832A]">+</button>
            </div>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <input type="text" id="namaBarang" class="input input-bordered flex-grow" placeholder="Mau Pesan Apa ?">
            <div class="flex flex-row gap-2 items-end justify-end ml-auto">
                <input type="number" id="jumlahBarang" class="input input-bordered w-16" placeholder="1">
            </div>
        </div>
        <!-- label dan textarea catatan pesanan-->
        <div class="flex flex-row items-center">
            <label for="name" class="text-lg mx-2">Catatan Pesanan</label>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <textarea id="catatanPesanan" class="textarea textarea-bordered flex-grow" placeholder="Contoh: Pedas, Nasi setengah"></textarea>
        </div>
        <!-- label dan input alamat umkm -->
        <div class="flex flex-row items-center">
            <label for="name" class="text-lg mx-2">Alamat UMKM</label>
        </div>
        <div class="flex flex-row gap-2 items-center">
            <input type="text" id="alamatUMKM" class="input input-bordered flex-grow" placeholder="Alamat UMKM">
        </div>
        <span class="text-xs text-gray-500 mx-2">*Jika memesan lebih dari 1 UMKM, silahkan isi alamat yang searah antar UMKM</span>
        <!-- selection alamat pengiriman -->
        <div class="flex flex-row items-center">
            <div class="flex flex-row gap-2 items-center">
                <select id="alamatPengiriman" class="select select-bordered">
                    <option value="1">Kostan</option>
                    <option value="2">TULT</option>
                    <option value="3">AWE</option>
                </select>
            </div>
        </div>
        <!-- button submit -->
        <div class="flex flex-row gap-2 items-center">
            <button class="btn bg-[#F9832A] text-white flex-grow">Pesan Sekarang</button>
        </div>
    </form>
</div>
