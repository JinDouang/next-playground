/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,scss}",
    "./src/components/**/*.{js,ts,jsx,tsx,scss}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-violet': '#5236ab',
        'brocade': '#8787c6',
        'indigo-sloth': '#200a58',
        'sunflower-mango': '#ffb600',
        'philippine-gray': '#929292',
        'jacarta': '#3f385a'
      },
      backgroundImage: (theme) => ({
        'sidebar-theme': `linear-gradient(to bottom right, ${theme('colors.indigo-sloth')}, ${theme('colors.blue-violet')})`,
      }),
      spacing: {
        '19': '4.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
