<script>
	export let name;
	import { participantName, participantNumber } from "./store.js"
	import Sidebar from './Sidebar.svelte';
	let sidebar_show = false;
</script>

<main>
	<!-- LEFT SIDE --->
	<div class="left">
		<Sidebar bind:show={sidebar_show} />
		<h1>Hello, <span>{name}!</span></h1>
		<p>Thank you for hosting the ITRE GSIX Driving Simulation.</p>
		<p>Remember that your job is to be friendly and helpful to the research participant while moving the study along in a timely manner.</p>
		<br><br>
		<button on:click={() => sidebar_show = !sidebar_show}>Toggle Navigation</button>
	</div>
	<!-- RIGHT SIDE --->
	<div class="right"></div>
</main>

<style>
	.left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 100vh;
		width: 40vw;
		padding: 0 5rem;
	}
	p {
		line-height: 1.5;
	}
	.right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 50vw;
		background: white;
	}
	button {
		border: none;
		background: none;
		color: white;
		border-bottom: 1px solid white;
	}
</style>