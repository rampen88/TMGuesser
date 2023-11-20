<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { getRandomElement } from '$lib/utils';

	let years: string[] = [];
	let seasons: string[] = [];
	let maps: number[] = [];
	let image_data: any[];

	let reveal2: boolean, reveal3: boolean;
	let img1: string, img2: string, img3: string;
	let selectedYear: string, selectedSeason: string, selectedMap: string;
	let currYear: string, currSeason: string, currMap: string;

	let points = 0;
	let currRound = 1;

	onMount(async () => {
		if (browser) {
			const response = await fetch('/images.json');
			image_data = await response.json();
			await setAvailableGuessingOptions();

			newRound();
		}
	});

	function finishRound() {
		if (selectedYear == currYear) {
			points += 1;
		}
		if (selectedSeason == currSeason) {
			points += 1;
		}
		if (selectedMap == currMap) {
			if (reveal3) {
				points += 1;
			} else if (reveal2) {
				points += 2;
			} else {
				points += 3;
			}
		}
		currRound++;
		selectedYear = '';
		selectedSeason = '';
		selectedMap = '';
		reveal2 = false;
		reveal3 = false;
		newRound();
	}

	async function newRound() {
		const keys = Object.keys(image_data);
		currYear = getRandomElement(keys);

		const seasons = Object.keys(image_data[currYear]);
		currSeason = getRandomElement(seasons);

		const maps = image_data[currYear][currSeason];
		const mapKeys = Object.keys(maps);
		currMap = getRandomElement(mapKeys);

		const imagePath = maps[currMap];
		img1 = imagePath.replace('%s', '1');
		img2 = imagePath.replace('%s', '2');
		img3 = imagePath.replace('%s', '3');
	}

	async function setAvailableGuessingOptions() {
		const response = await fetch('/campaigns.json');
		const data = await response.json();
		years = data['years'];
		seasons = data['seasons'];
		const temp = [];
		for (let i = 1; i <= 25; i++) {
			temp.push(i);
		}
		maps = temp;
	}

	function revealNext() {
		if (reveal2) {
			reveal3 = true;
		} else {
			reveal2 = true;
		}
	}
</script>

<div class="h-1/6"></div>
<div class="row-start-3 col-start-3 w-full pb-8 flex flex-col place-items-center gap-2">
	<div>
		<h2 class="h2">Round: {currRound}</h2>
	</div>
	<div>
		<h2 class="h2">Points: {points}</h2>
	</div>
</div>
<div class="grid h-full w-full grid-cols-5 grid-rows-4 gap-4">
	<div class="grid col-span-3 col-start-2 grid-cols-3 gap-4">
		<img src={img1} class="" alt="no cheating" />
		<img src={img2} class={reveal2 ? '' : 'blur-lg'} alt="no cheating" />
		<img src={img3} class={reveal3 ? '' : 'blur-lg'} alt="no cheating" />
		<button
			class="btn variant-ghost row-start-2 col-start-2"
			on:click={() => revealNext()}
			disabled={reveal3}>Hint</button
		>
	</div>

	<div
		class="row-start-2 col-span-3 col-start-2 h-full w-full flex flex-col place-items-center gap-4 shrink-0"
	>
		<div class="flex flex-row w-full gap-4 shrink-0">
			<select class="select p-0" bind:value={selectedYear} size="4">
				{#each years as year}
					<option value={year}>{year}</option>
				{/each}
			</select>

			<select class="select p-0" bind:value={selectedSeason} size="4">
				{#each seasons as season}
					<option value={season}>{season}</option>
				{/each}
			</select>
			<select class="select" bind:value={selectedMap} size="4">
				{#each maps as map}
					<option value={map}>{map}</option>
				{/each}
			</select>
		</div>
		<button class="btn variant-filled-primary" on:click={() => finishRound()}>Guess</button>
	</div>
</div>
