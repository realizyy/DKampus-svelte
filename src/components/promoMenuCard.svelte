<script>
    import { onMount } from 'svelte';
    import Swiper from 'swiper/bundle';
    import 'swiper/css/bundle';
    const promoMenu = [
        {
            name: "Bakmi Ayam",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 15.000",
            discount: "Rp. 10.000",
            tags: ["Bakmi", "Ayam"],
        },
        {
            name: "Nasi Goreng",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 20.000",
            discount: "Rp. 15.000",
            tags: ["Nasi", "Goreng"],
        },
        {
            name: "Ayam Goreng",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 25.000",
            discount: "Rp. 20.000",
            tags: ["Ayam", "Goreng"],
        },
        {
            name: "Bakso",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 30.000",
            discount: "Rp. 25.000",
            tags: ["Bakso"],
        },
        {
            name: "Sate Ayam",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 35.000",
            discount: "Rp. 30.000",
            tags: ["Sate", "Ayam"],
        },
        {
            name: "Soto Ayam",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 40.000",
            discount: "Rp. 35.000",
            tags: ["Soto", "Ayam"],
        },
        {
            name: "Mie Ayam",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 45.000",
            discount: "Rp. 40.000",
            tags: ["Mie", "Ayam"],
        },
        {
            name: "Nasi Uduk",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            price: "Rp. 50.000",
            discount: "Rp. 45.000",
            tags: ["Nasi", "Uduk"],
        },
    ];
    let swiper;

    onMount(() => {
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            },
        });
    });
</script>

<div class="swiper-container w-full pb-2 max-w-screen-lg mx-auto overflow-hidden">
    <div class="swiper-wrapper">
        {#each promoMenu as menu}
            <div class="swiper-slide">
                <div class="card bg-base-100 w-full shadow-xl">
                    <figure>
                        <img src={menu.img} alt={menu.name} />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{menu.name}</h2>
                        <div>
                            <span class="text-lg line-through">{menu.price}</span>
                            <span class="text-lg text-[#F9832A]"> {menu.discount}</span>
                        </div>
                        <div class="flex flex-wrap gap-1">
                            {#each menu.tags as tag}
                                <span class="badge badge-ghost">{tag}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>