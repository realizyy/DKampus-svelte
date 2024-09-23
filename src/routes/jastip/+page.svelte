<script>
    import {Button} from "saraui";

    const Title = "Jastip";
    import Header from "../../components/header.svelte";
    import Footer from "../../components/footer.svelte";
</script>

<Header />
<div class="rounded-box shadow-md p-6 md:p-8 h-screen overflow-y-auto">
    <h2 class="text-2xl font-semibold mb-4">Dkampus Jasa Titip (Jastip)</h2>
    <div class="mb-4">
        <label class="block text-gray-700 items-center">Jenis Jastip:</label>
        <div class="flex space-x-4 m-4">
            <label for="jenisJastip" class="text-gray-700">Barang</label>
            <input type="checkbox" class="toggle toggle-md bg-[#F9832A]" id="jenisJastip" checked>
            <label for="jenisJastip" class="text-gray-700">Makanan</label>
        </div>

        <div class="warung mb-4">
            <label class="mb-2">Nama Warung:</label>
            <div class="flex item-center mb-2">
                <input type="text" class="p-1.5 w-full border-2 border-[#F9832A] rounded-md " placeholder="Nama UMKM pilihanmu" required>
<!--                button add + -->
                <button type="button" class="bg-[#F9832A] text-white font-bold rounded-md mx-2 w-10">+</button>
            </div>

            <label class="mb-2">Menu/Barang:</label>
            <div class="flex item-center mb-2">
                <input type="text" class="p-1.5 w-full border-2 border-[#F9832A] rounded-md " placeholder="Nama barang/menu pilihanmu" required>
                <input type="number" class="p-1.5 mx-2 w-24 border-2 border-[#F9832A] rounded-md " placeholder="Jumlah" required>
            </div>
        </div>
        <button type="button" class="bg-[#F9832A] hover:bg-[#F9832A] text-white font-bold py-2 px-4 rounded-md">Tambah Menu/Barang</button>
    </div>
</div>
<Footer />
