import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.tsx'],
	format: ['cjs', 'esm'],
	outDir: 'dist',
	// tsc handles declarations (see build script). tsup's rollup-plugin-dts
	// doesn't pick up the SVG ambient type shim in src/globals.d.ts.
	dts: false,
	sourcemap: true,
	clean: true,
	treeshake: true,
	splitting: false,
	// theme-ui/jsx-runtime is intentionally NOT externalized: its package
	// has no `exports` map, so Node ESM consumers (Vite/Next/Node) cannot
	// resolve a bare `theme-ui/jsx-runtime` import. Bundling it inline keeps
	// `npm install retro-react` truly zero-config for consumers.
	noExternal: [/^theme-ui\/jsx-runtime/],
	external: ['react', 'react-dom', '@emotion/react', '@emotion/styled'],
	loader: { '.svg': 'dataurl' },
	// Mark the whole bundle as a client module so it works inside React Server
	// Components / Next.js App Router without forcing every consumer to add
	// their own client-boundary wrapper. esbuild's banner option strips
	// directives, so we prepend in onSuccess instead.
	async onSuccess() {
		const { readFile, writeFile } = await import('node:fs/promises');
		for (const file of ['dist/index.js', 'dist/index.mjs']) {
			const src = await readFile(file, 'utf8');
			if (!src.startsWith('"use client"')) {
				await writeFile(file, `"use client";\n${src}`);
			}
		}
	},
});
