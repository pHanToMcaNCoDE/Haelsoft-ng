const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */
const nextui = require("@nextui-org/react");

module.exports = {
    darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|divider).js"
  ],
    theme: {
        extend: {
            colors: {
                main: '#C75C27',
                other: '#7F7571',
                neutralcustom: '#655D59',
                gray: '#D7D7D7',
                grayTwo: '#655D59'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            boxShadow: {
                'custom-light-elevation': '0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px 0 rgba(0, 0, 0, 0.3)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            clipPath: {
                'triangle-up': 'polygon(0 0, 70% 60%, 0 100%)',
                'triangle-down': 'polygon(50% 0, 100% 100%, 0 100%)',
            },
            backgroundImage: {
                "custom-grid": `
                  radial-gradient(circle, #ffffff 1px, transparent 1px),
                  radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              },
              backgroundSize: {
                "custom-grid": "40px 40px",
              },
              backgroundPosition: {
                "custom-grid": "0 0, 20px 20px",
              },
        }
    },
  plugins: [nextui,require("tailwindcss-animate"),heroui()],
};
