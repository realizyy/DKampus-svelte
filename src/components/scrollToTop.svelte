<script>
    function ScrollUp() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>
<div class="fixed bottom-5 right-5 z-10">
    <button type="button" class="p-4 w-12 h-12 rounded-full bg-white border border-grey-300 flex items-center justify-center
        shadow-md hover:shadow-lg transition-all duration-300 ease-in-out" on:click={ScrollUp}>
        <img src="/ArrowTop.svg" alt="scroll to top" width="20">
    </button>
</div>