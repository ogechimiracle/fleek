import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors:{
			myblue: "#00A9EF",
			mygray: "#727E87",
			mynav: "#172B3A",
      mybg: "#031725",
		},
    backgroundImage: {
      'hero': "url('/bg.jpg')",
    },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
