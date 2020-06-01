<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	#blog-list {
		z-index: 1000 !important;
	}

	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

	ul > li:nth-child(even) {
		background-color: #e7e7e7;
		color: black;
	}

	ul > li:nth-child(odd) {
		background-color: #1a202c;
		color: white;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="flex flex-col w-5/6 mx-auto text-center" id="blog-list">
	<h1 class="text-5xl text-center text-white">Hurricane Blog</h1>
	<ul class="list-none list-inside">
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li  class="text-white py-4 my-4 rounded-lg"><a rel='prefetch' href='blog/{post.slug}' class="w-full">{post.title}</a></li>
		{/each}
	</ul>
</div>
