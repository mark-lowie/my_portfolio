import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f1717", 
        accent: "#00d1c1",    
        card: "#1a2424",       
      },
      borderRadius: {
        '4xl': '2rem', 
      }
    },
  },
  plugins: [],
};
export default config;