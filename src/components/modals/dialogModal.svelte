<dialog id="dialogModal" class="modal">
    <div class="modal-box">
        <p class="py-4"><slot></slot></p>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>