<script lang="ts">
	import Layout from '$lib/layout.svelte';
</script>

<Layout>
	<main>
		<p>
			<a href="/arcgaugedemo">Arc Gauge</a>
			<a href="/piechartdemo">Pie Chart</a>
		</p>
	</main>
</Layout>

<style lang="scss">
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		a {
			text-decoration: none;
			text-transform: uppercase;
			padding-right: 1rem;
			&:visited {
				color: black;
			}
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
