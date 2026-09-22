import { Colors } from './src/constants/Colors';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/presentation/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:
      {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          tertiary: Colors.light.tertiary,
          success: Colors.light.success,
          text: Colors.light.text,
          background: Colors.light.background,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          tertiary: Colors.dark.tertiary,
          success: Colors.dark.success,
          text: Colors.dark.text,
          background: Colors.dark.background,
        }
      }
    },
  },
  plugins: [],
}

