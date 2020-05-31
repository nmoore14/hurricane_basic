<script>
	let window_width;

	function isMobile() {
		console.log('Checking if it is mobile');
	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<svelte:window bind:innerWidth={window_width} on:resize={isMobile}/>

<div id="main" class="relative flex flex-col w-screen h-screen mt-12">
	<h1 class="w-full text-white text-center text-md md:text-4xl">Determination | Faith | Community | Lifestyle</h1>
	<div id="about-main-info">
		<p class="text-white">
			Hey there! My name is Andrew Ingram and bicycles are my passion. I have been into bikes as long as I can remember. 
			Through highschool and college I was lucky enough to travel around the country racing my mountain bike. 
			When I wasn’t racing I was building trail or advocating publically for more trails to be built. 
			Sometimes it meant scraping together a few dollars to race a national championship and sometimes it was just plain 
			hard work in the dirt to have a new place to play. It was an awkward journey filled with many setbacks and injuries but the 
			lessons I learned along the way have fueled my passion for bikes in a way that nothing else could. Hurricane Cycles 
			was born as a means to share that passion. Since its humble inception in 2016 we have served hundreds of returning 
			customers and helped to boost the growth of bike riding in the area in a way that would not have been possible otherwise. 
			It has been an honor to serve this community and see this small business grow to the point that we can now give back in a very real way. 
			Bringing the trails at Cumberland Mountain to life has been one of my greatest accomplishments. 
			To see the many smiles and the families who are now getting outside and doing things together because of the trails is 
			something that will stay with me for life. I moved back to Crossville because I love it here and it is my deepest honor to 
			continue giving back and making my small town just a little bit better. Thank you to all of the amazing customers who have made this journey possible. 
			Together we will continue making the world a better place, one bicycle at a time.
		</p>
	</div>
	<div class="flex" id="video-container">
		<iframe
			class="mx-auto"
			width="1020"
			height="630"
			src="https://www.youtube.com/embed/4_s1X0CRF4E"
			title="Hurricane Video - 1"
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		>
		</iframe>
	</div>
</div>