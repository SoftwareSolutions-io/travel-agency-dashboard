// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Include if you have a 'pages' directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Example: Add custom colors or spacing
      // colors: {
      //   'brand-blue': '#1992d4',
      // },
      // spacing: {
      //   '128': '32rem',
      // }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Example: add Tailwind Forms plugin
  ],
}
