<script lang="ts">
    import { onMount } from "svelte";
    import Dropping from "./Dropping.svelte";
    import Finished from "./Finished.svelte";

    export let animationsEnabled: boolean;
    export let soundEnabled: boolean;
    export let chosenSound: string;

    export let total: number;
    let toGo: number = -1;
    let loading: boolean = true;

    onMount(() => {
        toGo = total;
        loading = false;
    })
</script>

{#if toGo >= 0 && !loading}
    <Dropping bind:toGo {animationsEnabled} {soundEnabled} {chosenSound}/>
{:else if loading}
    Loading...
{:else}
    <Finished />
{/if}