<script lang="ts">
import router from "page";

import CheckboxDemo from './CheckboxDemo.svelte';
import ButtonDemo from './ButtonDemo.svelte';
import BadgeDemo from './BadgeDemo.svelte';
import DarkThemeDemo from './DarkThemeDemo.svelte';
import RadioDemo from './RadioDemo.svelte';
import ToggleDemo from './ToggleDemo.svelte';
import NumericTextboxDemo from "./NumericTextboxDemo.svelte";
import ModalDemo from "./ModalDemo.svelte";
import PopoverDemo from "./PopoverDemo.svelte";
import ArcGaugeDemo from "./ArcGaugeDemo.svelte";
import ChartsDemo from "./ChartsDemo.svelte";
import PieChartDemo from "./PieChartDemo.svelte";
import DropdownListDemo from './DropdownListDemo.svelte';
import TooltipDemo from "./TooltipDemo.svelte";
import ComboBoxDemo from "./ComboBoxDemo.svelte";
import TabDemo from "./TabDemo.svelte";

let page;
router('/button', () => page = ButtonDemo);
router('/radio', () => page = RadioDemo);
router('/badge', () => page = BadgeDemo);
router('/checkbox', () => page = CheckboxDemo);
router('/toggle', () => page = ToggleDemo);
router('/darktheme', () => page = DarkThemeDemo);
router('/numerictextbox', ()=> page = NumericTextboxDemo);
router('/modal', ()=> page = ModalDemo);
router('/popover', ()=> page = PopoverDemo);
router('/tooltip', ()=> page=TooltipDemo);
router('/dropdownlist', ()=> page = DropdownListDemo);
router('/arcgauge', ()=>page = ArcGaugeDemo);
router('/piechart', ()=>page = PieChartDemo);
router('/charts', ()=> page=ChartsDemo);
router('/combobox', ()=>ComboBoxDemo);

router.start();

</script>

<main>
	<TabDemo />
	<p>
		<a href="/button">Button</a>
		<a href="/badge">Badge</a>
		<a href="/checkbox">Checkbox</a>
		<a href="/toggle">Toggle</a>
		<a href="/radio">Radio</a>
		<a href="/darktheme">Dark Theme</a>
		<a href="/numerictextbox">NumericTextbox</a>
		<a href="/modal">Modal</a>
		<a href="/popover">Popover</a>
		<a href="/tooltip">Tooltip</a>
		<a href="/dropdownlist">DropdownList</a>
		<a href="/combobox">Combobox</a>
		<a href="/charts">Charts</a>
	</p>
	<svelte:component this={page} />
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