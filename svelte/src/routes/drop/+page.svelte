<script lang="ts">
    import Setup from "./Setup.svelte";
    import Drop from "./Drop.svelte";

    let total: number | undefined = undefined;

    let animationsEnabled: boolean = true;
    let soundEnabled: boolean = true;
    let chosenSound: string = "boom";
</script>

<div class="container mx-auto px-2 flex flex-col gap-5 items-center max-w-96">
{#if total == undefined} 
<Setup bind:total bind:animationsEnabled bind:soundEnabled bind:chosenSound />
{:else if total}
<Drop {total} {animationsEnabled} {soundEnabled} {chosenSound} />
{:else}
Something went wrong.
{/if}
</div>