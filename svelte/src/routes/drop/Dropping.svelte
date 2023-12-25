<script lang="ts">
    import { onMount } from "svelte";

    export let animationsEnabled: boolean;
    export let soundEnabled: boolean;
    export let chosenSound: string;

    export let toGo: number;

    let loading: boolean = true;
    let current: number;
    let numbersToGo: number[] = [];

    let animationOngoing: boolean = false;

    onMount(() => {
        console.log(animationsEnabled)
        var list = [];
        for (var i = 1; i <= toGo; i++) {
            list.push(i);
        }
        numbersToGo = list;
        loading = false;
    });

    let getRandomIndex = (size: number) => {
        return Math.floor(Math.random()*size);
    }

    let next = () => {
        if (animationsEnabled && animationOngoing) return;

        animationOngoing = animationsEnabled;

        let index = getRandomIndex(toGo);
        let nextElem = numbersToGo[index];
        var copy = [...numbersToGo];
        copy.splice(index,1);
        toGo--;

        const startDelay = 50;
        let count = 20;
        let delay = startDelay;

        let animationStep = () => {
            delay *= 1.15;
            count -= 1;
            // if (end) {
            //     endSound.currentTime = 0;
            //     endSound.play();
            // } else {
            //     animationSound.currentTime = 0;
            //     animationSound.play();
            // }
            if (count === 0 || toGo === 0) {
                current = nextElem;
                animationOngoing = false;
                numbersToGo = copy;
                // let colorIndex = Math.floor(Math.random()*colors.length);
                // let newColor = colors[colorIndex];
                // let newButtonColor = buttonColors[colorIndex];
                // props.setColor(newColor);
                // setButtonColor(newButtonColor);
            } else {
                let animElem = numbersToGo[Math.floor(Math.random()*numbersToGo.length)]
                current = animElem;
                setTimeout(animationStep, delay);
            }
        }

        if (animationsEnabled)
            setTimeout(animationStep, delay);
        else {
            numbersToGo = copy;
            current = nextElem;
        }
    }
</script>

{#if !loading}
<h1 class="font-bold text-3xl text-base-content">Xmas Drop</h1>
<div on:click={next} on:keydown={next} class="flex flex-col gap-5 items-center cursor-pointer select-none" tabindex="0" role="button">
    <h1 class="text-5xl font-bold">
    {#if toGo}
    {toGo} 🎁 to go
    {:else}
    That was all
    {/if}
    </h1>
    <h2 class="text-[25vh]">
    {#if current && !animationOngoing}
    {current}
    {:else if current}
    <span class="text-primary">{current}</span>
    {:else}
    <span class="invisible">-</span>
    {/if}
    </h2>
    <button class="btn btn-accent text-lg" disabled={animationOngoing} >Next</button>
</div>
{/if}