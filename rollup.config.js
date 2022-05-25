// Copyright © 2022 IrisPixel. All rights reserved.
//
// This is a commercial product and requires a paid license for possession or use.
//
// To acquire a license you can purchase one here at - https://irispixel.com/products .

import autoPreprocess from 'svelte-preprocess';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import bundleSize from 'rollup-plugin-bundle-size';
import css from 'rollup-plugin-css-only';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
import externals from 'rollup-plugin-node-externals';

const current_package = path.join(process.cwd(), 'package.json');
let pkg = JSON.parse(fs.readFileSync(current_package));
const production = process.env.NODE_ENV === 'production';
console.log(`PRODUCTION: ${production}`);

const pkg_name = pkg.name
	.replace(/^\w/, (m) => m.toUpperCase())
	.replace(/-\w/g, (m) => m[1].toUpperCase());
console.log(
	`pkg.module: ${pkg.module}, pkg.main: ${pkg.main}, pkg.name: ${
		pkg.name
	}, dir: ${__dirname}, cwd: ${process.cwd()}`
);

const rollup_common_plugins = [production && terser(), analyze(), bundleSize()];

const external_libs = ['svelte', 'svelte/transition', 'svelte/internal', /@babel\/runtime/];

export default [
	{
		input: 'src/lib/index.js',
		output: [
			{
				file: pkg.module,
				format: 'es',
				exports: 'named',
				sourcemap: production
			},
			{
				file: pkg.main,
				format: 'cjs',
				exports: 'named',
				sourcemap: production
			}
		],
		external: external_libs,
		plugins: [
			svelte({
				preprocess: autoPreprocess({
					sourceMap: !production,
					scss: { includePaths: ['src', 'node_modules'] }
				}),
				emitCss: true
			}),
			externals(),
			resolve({
				browser: true,
				dedupe: ['svelte', 'svelte/transition', 'svelte/internal']
				// important!
			}),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				sourceMap: production
			}),
			css({
				output: 'index.bundle.css'
			}),
			...rollup_common_plugins
		]
	}
];
