<script lang="ts">
    import Logo from "$lib/Logo.svelte";


    let inputNumber = '';
    let errorMsg = '';

    export let total: number | undefined;
    export let animationsEnabled: boolean;
    export let soundEnabled: boolean;
    export let chosenSound: string;

    let handleSubmit = () => {
        let number = parseInt(inputNumber);
        if (isNaN(number)) {
            errorMsg = "That is not a number.";
            return;
        } else if (number <= 0) {
            errorMsg = "Number of presents under the tree must be greater than 0."
            return;
        } else if (number > 1000) {
            errorMsg = "Number of presents under the tree must not be greater than 1000."
            return;
        }
        
        total = number;
    }
</script>

<Logo secondary="#d8b4fe" />
<div class="mt-5 flex flex-col items-center">
    <p class="mb-2 text-md text-base-content">How many gifts are under the Christmas tree?</p>
    <input type="number" bind:value={inputNumber} class="input input-bordered input-accent w-full max-w-xs" placeholder="10"/>
</div>
<label class="swap flex max-w-full w-80 items-center">
    <span class="w-72 text-lg">Animations</span>
    <input type="checkbox" bind:checked={animationsEnabled} />
    <div class="swap-on text-success">ON</div>
    <div class="swap-off text-error">OFF</div>
</label>
<label class="swap flex max-w-full w-80 items-center">
    <span class="w-72 text-lg">Sound</span>
    <!-- this hidden checkbox controls the state -->
    <input type="checkbox" bind:checked={soundEnabled} />
    <!-- volume on icon -->
    <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/></svg>
    <!-- volume off icon -->
    <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/></svg>
</label>
{#if soundEnabled}
<div class="flex flex-col items-center w-full">
    <p class="mb-2 text-md">Select your soundtrack.</p>
    <select bind:value={chosenSound} class="select select-secondary w-full max-w-xs text-lg">
        <option value="boom">
            Boom
        </option>
    </select>
</div>
{/if}
{#if errorMsg}
<p class="text-error">{errorMsg}</p>
{/if}
<button class="btn bg-purple-300 text-lg" on:click={handleSubmit}>Start</button>
