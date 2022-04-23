// (C) Copyright  LumePixel [2021] [2022]. All Rights Reserved.

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import bundleSize from 'rollup-plugin-bundle-size';
import analyze from 'rollup-plugin-analyzer';
import {terser} from 'rollup-plugin-terser';
import path from 'path';
import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
// import typescript2 from 'rollup-plugin-typescript2';
import babel from "@rollup/plugin-babel";
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
	/@babel\/runtime/
];

export default  {
	input: pkg.entry,
	output:  [{ 
		file: pkg.module,
		format: 'es',
		sourcemap: production
	}, {
		file: pkg.main,
		format: 'cjs',
		sourcemap: production
	}],
	external: external_libs,	
	plugins: [
		externals(),
		resolve(),
		commonjs(),
        babel({
			babelHelpers: "runtime",
			exclude: "**/node_modules/**",
			extensions: [".js", ".ts"]
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
		...rollup_common_plugins,
	]
};
