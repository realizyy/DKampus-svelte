<script>
    import Header from "../../../components/header.svelte";
    let cart = [
        {
            id: 1,
            namaUmkm: "Bakso bang jordan",
            goods:[
                {
                    nama: "Bakso Beranak Gacor",
                    qty: 1,
                    note: "Pedes, banyakin sambalnya!",
                },
                {
                    nama: "Jus Mangga",
                    qty: 1,
                    note: "Gulanya setengah ya",
                }
            ]
        }
    ]
</script>
<Header />
<div class="container mx-auto h-screen mt-5">
    <!--section selector button (Proses dan Riwayat) -->
    <div class="flex flex-row gap-2 mx-2 mb-5">
        <a href="/pesanan" class="transition-all py-2 font-semibold rounded-2xl w-[50%] flex flex-col items-center text-center text-lg duration-300 bg-[#F9832A] text-white border-2 border-[#F9832A]">
            Proses
        </a>
        <a href="/pesanan/history" class="transition-all py-2 font-semibold rounded-2xl w-[50%] flex flex-col items-center text-center text-lg duration-300 bg-[#F9832A] text-white border-2 border-[#F9832A]">
            Riwayat
        </a>
    </div>

    <!-- History pesanan -->
    <div class="bg-white rounded-lg shadow-md w-full">
        <div class="bg-[#F9832A] text-white p-4 flex items-center justify-between rounded-box">
            <h1 class="text-2xl font-bold">Riwayat Pesanan</h1>
        </div>
        <div class="p-4">
            {#each cart as item}
                <div class="flex items-center justify-between border-b border-gray-300 py-2">
                    <div class="flex items center">
                        <div class="ml-4 items center">
                            <p class="text-lg font-semibold capitalize">
                                <img src="/shop.svg" alt="UMKM" class="w-6 h-6 inline-block mb-1">
                                {item.namaUmkm}
                            </p>
                        </div>
                    </div>
                </div>
                {#each item.goods as good}
                    <div class="flex items center justify-between border-b border-gray-300 py-2">
                        <div class="flex items center">
                            <div class="ml-4 items center">
                                <p class="text-lg font-semibold capitalize">
                                    {good.nama}
                                </p>
                                <p class="text-sm text-gray-500">
                                    Catatan : {good.note}
                                </p>
                            </div>
                        </div>
                        <div class="flex items center">
                            <p class="text-lg font-semibold">
                                {good.qty}x
                            </p>
                        </div>
                    </div>
                {/each}
            {/each}
        </div>
    </div>
</div>
