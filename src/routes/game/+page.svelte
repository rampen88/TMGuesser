<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { getRandomElement } from '$lib/utils';
	import { base } from '$app/paths';

	let years: string[] = [];
	let seasons: string[] = [];
	let maps: number[] = [];
	let image_data: any;

	let reveal2: boolean, reveal3: boolean;
	let img1: string, img2: string, img3: string;
	let selectedYear: string, selectedSeason: string, selectedMap: string;
	let currYear: string, currSeason: string, currMap: string;
	let guessing = true;
	let outOfMaps = false;

	let points = 0;
	let currRound = 1;

	onMount(async () => {
		if (browser) {
			const response = await fetch(base + '/images.json');
			image_data = await response.json();
			await setAvailableGuessingOptions();
			newRound();
		}
	});

	function calculatePointsEarned() {
		let pointsEarned = 0;
		if (selectedYear == currYear && selectedSeason == currSeason) {
			pointsEarned += 3;
		} else if (selectedYear == currYear || selectedSeason == currSeason) {
			pointsEarned += 1;
		}
		if (selectedMap == currMap) {
			if (reveal3) {
				pointsEarned += 1;
			} else if (reveal2) {
				pointsEarned += 2;
			} else {
				pointsEarned += 3;
			}
		}
		return pointsEarned;
	}

	function finishRound() {
		points += calculatePointsEarned();
		currRound++;
		reveal2 = false;
		reveal3 = false;
		guessing = false;
	}

	async function newRound() {
		if (Object.keys(image_data).length == 0) {
			outOfMaps = true;
			return;
		}
		selectedYear = '';
		selectedSeason = '';
		selectedMap = '';
		guessing = true;

		// Keep picking maps until it finds a new one.
		// TODO: Remove previously seen maps from the array instead.
		let newMap = getRandomMap();
		while (newMap.year == currYear && newMap.season == currSeason && newMap.map == currMap) {
			newMap = getRandomMap();
		}

		currYear = newMap.year;
		currSeason = newMap.season;
		currMap = newMap.map;

		const imagePath = newMap.map_data[currMap];
		img1 = imagePath.replace('%s', '1');
		img2 = imagePath.replace('%s', '2');
		img3 = imagePath.replace('%s', '3');

		// remove map from image data so it doesn't pick it again.
		delete image_data[newMap.year][newMap.season][currMap];
		if (Object.keys(image_data[newMap.year][newMap.season]).length == 0) {
			delete image_data[newMap.year][newMap.season];
			if (Object.keys(image_data[newMap.year]).length == 0) {
				delete image_data[newMap.year];
			}
		}
	}

	function getRandomMap() {
		const keys = Object.keys(image_data);
		const sYear = getRandomElement(keys) as string;

		const season_data = image_data[sYear];
		const seasons = Object.keys(season_data);
		const sSeason = getRandomElement(seasons) as string;

		const maps = season_data[sSeason];
		const mapKeys = Object.keys(maps);
		const sMap = getRandomElement(mapKeys) as string;

		const obj = {
			year: sYear,
			season: sSeason,
			map: sMap,
			map_data: maps
		};
		console.log('Selected map:', obj);
		return obj;
	}

	async function setAvailableGuessingOptions() {
		const response = await fetch(base + '/campaigns.json');
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

{#if outOfMaps}
	<div class="h-1/6"></div>
	<div class="flex flex-col w-full place-items-center gap-2">
		<h2 class="h2">No more maps :(</h2>
		<p>Please refresh the page to restart.</p>
	</div>
{:else}
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
			<img src={img2} class={reveal2 || !guessing ? '' : 'blur-xl'} alt="no cheating" />
			<img src={img3} class={reveal3 || !guessing ? '' : 'blur-xl'} alt="no cheating" />
			<button
				class="btn variant-ghost row-start-2 col-start-2"
				on:click={() => revealNext()}
				disabled={reveal3 || !guessing}>Hint</button
			>
		</div>

		<div
			class="row-start-2 col-span-3 col-start-2 h-full w-full flex flex-col place-items-center gap-4 shrink-0"
		>
			{#if guessing}
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
			{:else}
				<div class="card w-1/3 items-center flex place-items-center flex-col">
					<header class="card-header h2">Result</header>
					<section class="p-4">
						<p>Your guess:</p>
						<p>
							{selectedYear}
							{selectedSeason}
							{selectedMap}
						</p>
						<p>Correct Answer:</p>
						<p>
							{currYear}
							{currSeason}
							{currMap}
						</p>
						<p>Points earned: {calculatePointsEarned()}</p>
					</section>
					<footer class="card-footer">
						<button class="btn variant-filled-primary" on:click={() => newRound()}>Next</button>
					</footer>
				</div>
			{/if}
		</div>
	</div>
{/if}
