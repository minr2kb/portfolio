import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	base: "/",
	server: {
		port: 1129,
		open: true,
	},
	resolve: {
		alias: [
			{ find: "~", replacement: "/src" },
			{
				find: "@components",
				replacement: "/src/components",
			},
			{
				find: "@interface",
				replacement: "/src/interface",
			},
			{
				find: "@sections",
				replacement: "/src/sections",
			},
			{
				find: "@pages",
				replacement: "/src/pages",
			},
		],
	},
});
