<script lang="ts">
    import "../app.css";
    import Footer from "./Footer.svelte";
</script>

<div class="min-h-screen bg-base">
    <div class="max-h-[80vh] h-[800px] flex justify-center items-center">
        <slot />
    </div>
    <Footer />
</div>