<script>
    const Title = "Home";
    import Header from "../components/header.svelte";
    import Footer from "../components/footer.svelte";
    import Carousel from "../components/carousel.svelte";
    import CategoryFood from "../components/categoryFood.svelte";
    import PromoMenuCard from "../components/promoMenuCard.svelte";
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
    ]
</script>

<Header />
<div class="pb-20">
    <div class="flex justify-center items-center mt-24 mb-5 w-1/2 mx-auto">
        <Carousel />
    </div>
    <!--Content Home-->
        <!--Category Card-->
    <div class="flex flex-wrap gap-3 mt-5 items-center justify-center">
        {#each dataButtons.slice(0, 4) as btn}
            <CategoryFood {...btn} />
        {/each}
    </div>
    <div class="flex flex-wrap gap-3 mt-5 items-center justify-center">
        {#each dataButtons.slice(4) as btn}
            <CategoryFood {...btn} />
        {/each}
    </div>
        <!--End Category Card-->
        <!--Promo Untukmu Card slider-->
    <div class="">
        <h1 class="text-2xl mt-5 text-center">Promo <span class="text-[#F9832A]">Untukmu</span></h1>
    </div>
    <div class="flex gap-3 mt-5 items-center justify-center">
        <PromoMenuCard />
    </div>
        <!--End Promo Untukmu Card slider-->
        <!-- Restoran Terdekat -->
    <div class="">
        <h1 class="text-2xl mt-5 text-center">Restoran <span class="text-[#F9832A]">Terdekat</span></h1>
    </div>
    <div class="flex gap-3 mt-5 items-center justify-center">
        <PromoMenuCard />
    </div>
    <!--End Content Home-->
</div>
<Footer />