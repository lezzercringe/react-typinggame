/** @type {import('tailwindcss').Config} */
import headless from "@headlessui/tailwindcss";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [headless],
};
