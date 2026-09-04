/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C0A14',
        secondary: '#16101F',
        accent: '#F5C518',
        cta: '#22D3EE',
        'brand-orange': '#F08810',
      },
    },
  },
  plugins: [],
}

