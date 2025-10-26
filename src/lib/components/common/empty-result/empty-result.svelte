<script>
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Large from '$lib/components/ui/typography/large.svelte';
	import Muted from '$lib/components/ui/typography/muted.svelte';

	const quotes = [
		// Films
		"These aren't the droids you're looking for.", // Star Wars
		"I'm afraid I can't do that.", // 2001: A Space Odyssey
		"Lost in time, like tears in the rain.", // Blade Runner
		"What's our vector, Victor?", // Airplane
		// Books
		"We can know only that we know nothing.", // War and Peace
		"You shall not pass!", // The Lord of the Rings
		// Video games
		"You've met with a terrible fate, haven't you?", // Majora's Mask
		"Reticulating splines.", // The SIMS
		"Snake? Snake!? SNAAAAKE!", // Metal Gear Solid
		"The cake is a lie.", // Portal
		"Don't you dare go Hollow.", // Dark Soul's
		"Wind's howling.", // The Witcher 3
	];
	// Pick a random quote when the component loads
	// const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

	// Get last shown index from localStorage or default to -1
	let index = Number(localStorage.getItem('quoteIndex') ?? '-1');

	// Move to the next quote (wrap around if needed)
	index = (index + 1) % quotes.length;

	// Save the updated index
	localStorage.setItem('quoteIndex', index.toString());

	// Get the selected quote
	const selectedQuote = quotes[index];
</script>

<div class="flex flex-1 flex-col items-center justify-center gap-2">
	<Icon className="text-3xl" icon="i-carbon-ai-status-failed" />
	<Large>Not found...</Large>
	<Muted>{selectedQuote}</Muted>
</div>
