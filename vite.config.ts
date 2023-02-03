import UnocssPlugin from "@unocss/vite"
import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
	plugins: [solidPlugin(), UnocssPlugin({})],
	build: {
		target: "esnext",
	},
})
