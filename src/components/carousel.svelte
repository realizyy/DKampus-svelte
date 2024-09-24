<script>
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import Autoplay from "embla-carousel-autoplay";

    let emblaApi;
    let options = {loop: true};
    let plugins = [Autoplay({delay: 3000, stopOnInteraction: false})];

    function onInit(event) {
        emblaApi = event.detail;
    }

    const color = [
        {name: "red", color: "red"},
        {name: "blue", color: "blue"},
        {name: "green", color: "green"},
        {name: "yellow", color: "yellow"},
    ];
</script>

<div
        class="embla"
        use:emblaCarouselSvelte="{{options, plugins}}"
        on:emblaInit="{onInit}">
    <div class="embla__container">
        {#each color as {name, color}}
            <div class="embla__slide w-screen h-64 rounded-box" style="background-color: {color}">
                <h1 class="text-black font-bold text-2xl">{name.toUpperCase()}</h1>
            </div>
        {/each}
    </div>
</div>

<style>
    .embla {
        overflow: hidden;
    }

    .embla__container {
        display: flex;
    }

    .embla__slide {
        flex: 0 0 100%;
        min-width: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>