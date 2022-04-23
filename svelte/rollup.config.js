// (C) Copyright  LumePixel [2021] [2022]. All Rights Reserved.

import autoPreprocess from 'svelte-preprocess';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import bundleSize from 'rollup-plugin-bundle-size';
import css from "rollup-plugin-css-only";
import analyze from 'rollup-plugin-analyzer';
import {terser} from 'rollup-plugin-terser';
import path from 'path';
import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
import sveld from "sveld";
import externals from "rollup-plugin-node-externals";

const current_package = path.join(process.cwd(), "package.json");
let pkg = JSON.parse(fs.readFileSync(current_package));
const production = (process.env.NODE_ENV === 'production');
console.log(`PRODUCTION: ${production}`);

const pkg_name = pkg.name
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());
console.log(`pkg.module: ${pkg.module}, pkg.main: ${pkg.main}, pkg.name: ${pkg.name}, dir: ${__dirname}, cwd: ${process.cwd()}`);

const rollup_common_plugins = [
	(production && terser()),
	analyze(),
	bundleSize()
];

const external_libs = [
	'svelte',
	'svelte/transition',
	'svelte/internal',
	/@babel\/runtime/
];

export default  [{
	input: pkg.entry,
	output:  [{ 
		file: pkg.module,
		format: 'es',
		exports: "named",
		sourcemap: production
	}, { 
		file: pkg.main,
		format: 'cjs',
		exports: 'named',
		sourcemap: production
	}],
	external: external_libs,	
	plugins: [
		svelte({
			preprocess: autoPreprocess({
				sourceMap: !production,
				scss: { includePaths: ['src', 'node_modules'] },
			}),
			emitCss: true
		}),
		externals(),
		resolve({
			browser: true,
			dedupe: ['svelte', 'svelte/transition', 'svelte/internal'], 
			// important!
		}),	
		typescript({
			tsconfig: './tsconfig.json',
			sourceMap: production,
			declaration: true,
			declarationDir: ".",
			outDir: "dist",
			declarationMap: true,
			emitDeclarationOnly: true,
			noEmitOnError: true,
			include: [
				"src/**/*"
			],
			exclude: [
				"**/*.test.ts",
				"node_modules/*", 
				"public/*", 
				"dist"
			]
		}),		
		sveld({
			typesOptions: {
				outDir: 'dist'
			}
		}),
		commonjs(),
		css({	
			output: 'index.bundle.css'
		}),
		...rollup_common_plugins,
	]
}];

