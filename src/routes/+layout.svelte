<script>
    import "../app.css";
    import {supabase} from "../lib/supabase";
    import {onMount} from "svelte";
    import {isLoggedIn} from "../lib/store";
    import ScrollToTop from "../components/scrollToTop.svelte";

    onMount(async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            isLoggedIn.set(true);
        } else {
            isLoggedIn.set(false);
        }
    });
</script>
<svelte:head>
    <title>Dkampus jastip</title>
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
    </style>
</svelte:head>

<div class="max-w-xl md:max-w-3xl mx-auto">
    <slot />
    <ScrollToTop />
</div>