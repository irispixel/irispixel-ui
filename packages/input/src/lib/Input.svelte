<!--
 Copyright © 2022 IrisPixel. All rights reserved.
 
 This is a commercial product and requires a paid license for possession or use. 
 
 To acquire a license you can purchase one here at - https://irispixel.com/products . 
-->
<script lang="ts">
	export let variant = 'default';
	export let color = 'primary';
	export let size = 'xs';
	export let radius = 'xs';
	export let icon = undefined;
	export let disabled = false;
	export let type = 'button';
	function get_size_css(in_size: string) {
		switch (in_size) {
			case 'xl':
				return 'xl';
			case 'lg':
				return 'lg';
			case 'sm':
				return 'sm';
			case 'md':
			default:
				return 'md';
		}
	}

	function get_radius_css(in_radius: string) {
		switch (in_radius) {
			case 'xl':
				return 'radius-xl';
			case 'lg':
				return 'radius-lg';
			case 'sm':
				return 'radius-sm';
			case 'md':
			default:
				return 'radius-md';
		}
	}

	function get_color_css(in_variant: string, in_color: string, in_disabled: boolean) {
		switch (in_variant) {
			case 'ghost':
				return 'ghost-' + in_color + (in_disabled ? '-disabled' : '');
			case 'outline':
				return 'outline-' + in_color + (in_disabled ? '-disabled' : '');
			default:
				return 'default-' + in_color + (in_disabled ? '-disabled' : '');
		}
	}

	function get_display_css(icon: any) {
		if (icon === undefined) {
			return 'block-button';
		} else {
			return 'flex-button';
		}
	}

	$: color_css = get_color_css(variant, color, disabled);
	$: size_css = get_size_css(size);
	$: radius_css = get_radius_css(radius);
	$: display_css = get_display_css(icon);
	$: cursor_css = disabled ? 'pointer-disabled' : 'pointer';
	$: opacity_css = disabled ? 'disabled' : 'active';
</script>
<button
	{type}
	class="default {opacity_css} {display_css} {cursor_css} {color_css} {size_css} {radius_css}"
	on:click
>
	<slot />
	<span class="space" />
	<svelte:component this={icon} />
</button>

<style lang="scss">
	@use 'sass:color';

	@function theme_color($color-name) {
		@if $color-name == 'primary' {
			@return hsl(var(--ip-primary-h, 251), var(--ip-primary-s, 86%), var(--ip-primary-l, 80%));
		} @else if ($color-name == 'secondary') {
			@return hsl(
				calc(var(--ip-primary-h, 251) + 180),
				var(--ip-primary-s, 90%),
				var(--ip-primary-l, 63%)
			);
		} @else {
			@return hsl(var(--ip-primary-h, 251), var(--ip-primary-s, 86%), var(--ip-primary-l, 60%));
		}
	}

	@function darken_theme_color($color-name) {
		@if $color-name == 'primary' {
			@return hsl(
				var(--ip-primary-h, 251),
				var(--ip-primary-s, 86%),
				calc(var(--ip-primary-l, 80%) - var(--ip-primary-darken, 20%))
			);
		} @else if ($color-name == 'secondary') {
			@return hsl(
				calc(var(--ip-primary-h, 251) + 180),
				var(--ip-primary-s, 90%),
				calc(var(--ip-primary-l, 63%) - var(--ip-secondary-darken, 20%))
			);
		} @else {
			@return hsl(
				var(--ip-primary-h, 251),
				var(--ip-primary-s, 86%),
				calc(var(--ip-primary-l, 60%) - var(--ip-primary-darken, 20%))
			);
		}
	}

	@function lighten_theme_color($color-name) {
		@if $color-name == 'primary' {
			@return hsl(
				var(--ip-#{$color-name}-h, 251),
				var(--ip-#{$color-name}-s, 86%),
				calc(var(--ip-#{$color-name}-l, 60%) + 5%)
			);
		} @else if ($color-name == 'secondary') {
			@return hsl(
				var(--ip-#{$color-name}-h, 346),
				var(--ip-#{$color-name}-s, 90%),
				calc(var(--ip-#{$color-name}-l, 63%) + 5%)
			);
		} @else {
			@return hsl(
				var(--ip-#{$color-name}-h, 251),
				var(--ip-#{$color-name}-s, 86%),
				calc(var(--ip-#{$color-name}-l, 32%) + 5%)
			);
		}
	}

	.default {
		box-shadow: none;
		-webkit-appearance: none;
		outline: none;
		font: inherit;
		box-sizing: border-box;
	}

	.disabled {
		opacity: 0.6;
	}

	.active {
		opacity: 1;
	}

	.block-button {
		display: inline-block;
	}

	.flex-button {
		display: inline-flex;
		align-items: center;
	}

	.pointer {
		cursor: pointer;
	}

	.pointer-disabled {
		cursor: not-allowed;
	}

	.space {
		min-width: 1rem;
	}

	/// Size css
	.xs {
		font-size: 0.25rem;
		padding: 0.25rem 0.5rem 0.25rem 0.25rem;
	}

	.md {
		font-size: 1rem;
		padding: 0.25rem 1rem 0.25rem 0.25rem;
	}

	.lg {
		font-size: 1rem;
		padding: 0.25rem 1.5rem 0.25rem 0.25rem;
	}

	.xl {
		font-size: 1.5rem;
		padding: 0.25rem 2rem 0.25rem 0.25rem;
	}

	// Radius
	.radius-xs {
		border-radius: 0.25rem;
	}

	.radius-sm {
		border-radius: 0.5rem;
	}

	.radius-lg {
		border-radius: 1rem;
	}

	.radius-xl {
		border-radius: 2rem;
	}

	// Outline button
	.outline-primary {
		border: 1px solid theme_color('primary');
		color: inherit;
		background-color: transparent;
		background-image: none;
	}

	.outline-secondary {
		border: 1px solid theme_color('secondary');
		color: inherit;
		background-color: transparent;
		background-image: none;
	}

	// Normal without styling

	.default-primary {
		background-color: theme_color('primary');
		color: var(--ip-primary-text, white);
		border: none;
		transition: background-color 0.3s ease;
	}

	.default-primary:hover {
		background-color: darken_theme_color('primary');
	}

	.default-secondary {
		background-color: theme_color('secondary');
		color: var(--ip-secondary-text, white);
		border: none;
		transition: background-color 0.3s ease;
	}

	.default-secondary:hover {
		background-color: darken_theme_color('secondary');
	}

	// Ghost buttons

	.ghost-primary {
		border: none;
		background: none;
		color: inherit;
		transition: background-color 0.5s ease;
		background-color: inherit;
	}

	.ghost-primary:hover {
		background-color: lighten_theme_color('primary');
		color: var(--ip-primary-text, white);
	}

	.ghost-secondary {
		border: none;
		background: none;
		color: inherit;
		transition: background-color 0.3s ease;
		background-color: inherit;
	}

	.ghost-secondary:hover {
		background-color: lighten_theme_color('secondary');
		color: var(--ip-secondary-text, white);
	}
</style>
