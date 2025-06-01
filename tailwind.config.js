/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      primary: {
        1000: "var(--color-primary)",
      }
    },
  },
  container: {
    center: true,
    padding: '15px',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },
  fontFamily: {
    primary: 'var(--font-jetBrainsMono)',
  }
};

export const plugins = [];

