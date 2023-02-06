import { presetMini } from "@unocss/preset-mini"
import presetWebFonts from "@unocss/preset-web-fonts"
import { defineConfig } from "@unocss/vite"

export default defineConfig({
	presets: [
		presetMini(),
		presetWebFonts({
			provider: "google",
			fonts: {
				body: "Eczar",
			},
		}),
		{
			name: "custom",
			theme: {
				colors: {
					brand: {
						text: "#323031",
						secondary: "#FFC857",
						background: "#FFF7E7",
					},
				},
			},
		},
	],
})
