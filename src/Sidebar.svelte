<script>
    import { fly } from 'svelte/transition';
    export let show = false;
    import { participantName, participantNumber } from "./store.js"
</script>

{#if show}
    <nav transition:fly={{x: 1550, opacity: 1}}>
        <h2>Current Participant: <span>{$participantName}</span></h2>
        <h2>Participant Number: <span>#{$participantNumber}</span></h2>
        <br>
        <input bind:value={$participantName}>
        <br>
        <input bind:value={$participantNumber}><button on:click="{() => $participantNumber = ('')}">
            Reset Participant Number
        </button>
        <br>
        <button on:click="{() => $participantName = ('')}">
            Reset Participant Name
        </button>
        <br>
        <button>Go Back</button>
    </nav>
{/if}


<style>
nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding: 2rem 2rem 0.6rem;
    background: #dfdfdf;
    overflow-y: auto;
	width: 40vw;
    color: black;
    font-weight: 100;
}
h2 {
    font-size: 1.5rem;
    line-height: 1.15;
    text-transform: capitalize;
}
span {
    font-weight: 600;
    color: #102f47;
}
</style>