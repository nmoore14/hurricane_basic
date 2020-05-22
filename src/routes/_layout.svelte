<script>
	import Nav from '../components/Nav.svelte';
	import Hero from '../components/Hero.svelte';

	export let segment;
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Bangers&family=Montserrat&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<Nav {segment}/>
	<Hero />
	<slot></slot>
</main>
