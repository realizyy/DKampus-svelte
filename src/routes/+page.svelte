<script>
    const Title = "Home";
    import Header from "../components/header.svelte";
    import Footer from "../components/footer.svelte";
    import Carousel from "../components/carousel.svelte";
    import CategoryFood from "../components/categoryFood.svelte";
    import SliderCard from "../components/sliderCard.svelte";

    let anouncementMsg = "🎉🎉🎉 Selamat datang di DKampus! 🎉🎉🎉 ";


    const dataButtons = [
        {
            name: "Westren",
            img: "/burger slant.png",
        },
        {
            name: "Ayam",
            img: "/chickens leg.png",
        },
        {
            name: "Bakmi",
            img: "/chinese noodle.png",
        },
        {
            name: "Kopi",
            img: "/coffee.png",
        },
        {
            name: "Nasi",
            img: "/rice bowl.png",
        },
        {
            name: "Seafood",
            img: "/octopus.png",
        },
        {
            name: "Cemilan",
            img: "/french fries.png",
        },
        {
            name: "Roti & Kue",
            img: "/pretzel.png",
        },
        {
            name: "Minuman",
            img: "/cola.svg",
        },
        {
            name: "Mie",
            img: "/ramen.svg",
        },
        {
            name: "Sate",
            img: "/sate.svg",
        }
    ]
    const promoMenu = [
        {
            umkm: "UMKM Name",
            name: "Bakmi Ayam",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 15.000",
            discount: "Rp. 10.000",
            tags: ["Bakmi", "Ayam"],
        },
        {
            umkm: "UMKM Name",
            name: "Nasi Goreng",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 20.000",
            discount: "Rp. 15.000",
            tags: ["Nasi", "Goreng"],
        },
        {
            umkm: "UMKM Name",
            name: "Ayam Goreng",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 25.000",
            discount: "Rp. 20.000",
            tags: ["Ayam", "Goreng"],
        },
        {
            umkm: "UMKM Name",
            name: "Bakso",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 30.000",
            discount: "Rp. 25.000",
            tags: ["Bakso"],
        },
        {
            umkm: "UMKM Name",
            name: "Sate Ayam",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 35.000",
            discount: "Rp. 30.000",
            tags: ["Sate", "Ayam"],
        },
        {
            umkm: "UMKM Name",
            name: "Soto Ayam",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 40.000",
            discount: "Rp. 35.000",
            tags: ["Soto", "Ayam"],
        },
        {
            umkm: "UMKM Name",
            name: "Mie Ayam",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 45.000",
            discount: "Rp. 40.000",
            tags: ["Mie", "Ayam"],
        },
        {
            umkm: "UMKM Name",
            name: "Nasi Uduk",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 50.000",
            discount: "Rp. 45.000",
            tags: ["Nasi", "Uduk"],
        },
    ];
    let faq = [
        {
            question: "Apa itu Jastip?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem, nam error corporis, id harum eius amet iste nesciunt molestiae totam, modi est pariatur quibusdam ut? Molestiae, molestias. Placeat, nulla!",
        },
        {
            question: "Bagaimana cara memesan Jastip?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem, nam error corporis, id harum eius amet iste nesciunt molestiae totam, modi est pariatur quibusdam ut? Molestiae, molestias. Placeat, nulla!",
        },
        {
            question: "Berapa lama Jastip akan sampai?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem, nam error corporis, id harum eius amet iste nesciunt molestiae totam, modi est pariatur quibusdam ut? Molestiae, molestias. Placeat, nulla!",
        },
        {
            question: "Apakah Jastip bisa diantar ke luar kota?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem, nam error corporis, id harum eius amet iste nesciunt molestiae totam, modi est pariatur quibusdam ut? Molestiae, molestias. Placeat, nulla!",
        },
        {
            question: "Apakah Jastip bisa diantar ke luar negeri?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem, nam error corporis, id harum eius amet iste nesciunt molestiae totam, modi est pariatur quibusdam ut? Molestiae, molestias. Placeat, nulla!",
        },
    ]

</script>

<Header />
<div class="h-auto bg-[#f2f2f2] rounded-box">
    <!--Anouncement running text-->
    <div class="text-center p-2">
        <marquee behavior="scroll" direction="left" scrollamount="6">
            {anouncementMsg}
        </marquee>
    </div>
    <div class="flex justify-center items-center mb-5 mx-auto">
        <Carousel />
    </div>
    <!--Content Home-->

    <!--Infomation jastip-->
    <div class="bg-[#F9832A] p-5 rounded-lg mb-5">
        <div class="flex flex-row">
            <img src="/person1.svg" alt="person" />
            <div class="text-white ml-2">
                <p class="text-2xl font-bold">DJastip</p>
                <p class="text-md">Dkampus Jasa Titip (Jastip)<br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem, nam error corporis, id harum eius amet iste nesciunt molestiae totam, modi est pariatur quibusdam ut? Molestiae, molestias. Placeat, nulla!</p>
            </div>
        </div>
    </div>

    <!--Pesan jastip-->
    <div class="bg-[#F9832A] p-5 rounded-lg mb-5">
        <div class="flex flex-row">
            <div class="text-white ml-2">
                <p class="text-2xl font-bold mb-1">Pesan Jastip Sekarang!</p>
                <p class="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem, nam error corporis, id harum eius amet iste nesciunt molestiae totam, modi est pariatur quibusdam ut? Molestiae, molestias. Placeat, nulla!</p>
            </div>
            <img src="/person2.png" alt="person" class="-scale-x-[1] w-[80%] h-[80%] flex items-center justify-center mx-auto" />
        </div>
    </div>

    <!-- FAQ -->
    <div class="bg-[#F9832A] p-5 rounded-lg mb-5 gap-y-2 text-white">
        <div class="flex flex-row">
            <div class="mb-2">
                <p class="text-2xl font-bold">Frequntly Asked Question</p>
            </div>
        </div>
        {#each faq as { question, answer }}
            <div tabindex="0" class="collapse collapse-plus bg-neutral-200/45 mb-2">
                <div class="collapse-title text-lg font-semibold">
                    {question}
                </div>
                <div class="collapse-content">
                    <p>{answer}</p>
                </div>
            </div>
        {/each}
    </div>
    <!--End Content Home-->
</div>
<Footer />