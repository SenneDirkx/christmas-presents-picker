<script lang="ts">
    import "../app.css";
    import Footer from "./Footer.svelte";
</script>

<div class="min-h-screen bg-base">
    <div class="h-screen flex">
        <slot />
    </div>
    <Footer />
</div>