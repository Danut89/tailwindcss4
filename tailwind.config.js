// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'text-primary',
    'bg-primary',
    'text-accent',
    'bg-accent',
    'font-heading',
    'font-body',
  ],
  theme: {
    extend: {}, // leave empty or use for spacing/sizing only
  },
  plugins: [],
};

