<script>
    export let name;
    export let img;
</script>

<button type="button" class="p-4 w-28 h-28 rounded-xl bg-white border border-grey-300 flex flex-col items-center justify-center
    space-y-2 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
    <img src="{img}" alt="{name}" width="50">
    <span>{name}</span>
</button>
