<script lang="ts">
</script>
<main>

	<p>
		<a href="/arcgauge">Arc Gauge</a>
		<a href="/piechart">Pie Chart</a>
	</p>
</main>

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
