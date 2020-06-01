// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'Back on the Bike!',
		slug: 'back-on-the-bike',
		html: `
			<p>
				I simply can’t tell you how much this picture means to me. Just under 2 months ago I was Involved in a fairly serious car wreck that left my knee literally in several different pieces. 
				The doctor had to remove a 3rd of my kneecap and sew everything else back together as best he could. I was told the severity of this injury would likely prevent me from ever running or riding a bike again. 
				I’ve been doing this recovery thing like it’s my full time job and working hard every day to prove the doctors wrong. Today I was able to ride a bike for the first time since the injury and I got to share 
				that experience with my amazing wife! It was a very flat and smooth trail but it was still riding. And although it wasn’t very fast, it was possibly the most fun I have ever had on a bicycle! 
				Here’s to more Good times! Bicycles really do make the world a better place. 
				<br/>
				<br/>
				<img src="../../../images/andrew_back_on_bike.jpg" alt="Andrew back on bike">
				<br/>
				<br/>
				-Andrew
			</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
