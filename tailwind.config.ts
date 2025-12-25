// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',          // App Router pages, layouts, etc.
    './components/**/*.{js,ts,jsx,tsx,mdx}',   // Your components
    './lib/**/*.{js,ts,jsx,tsx}',              // Optional: if you add UI there
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config