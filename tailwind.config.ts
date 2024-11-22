import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '15px'
  	},
  	screens: {
  	  sm: '640px',
  	  md: '768px',
  	  lg: '960px',
  	  xl: '1200px'
  	},
  	fontFamily: {
  	  primary: 'var(--font-jetbrainsMono)'
  	},
  	extend: {
  	  colors: {
  		primary: "#1c1c22",
  		  accent: {
  			DEFAULT: '#DC143C',
  			hover: '#9B0F2F',
  		  },
  		},
  		keyframes: {
  		  'accordion-down': {
  			from: {
  			  height: '0'
  			},
  			to: {
  			  height: 'var(--radix-accordin-content-height)'
  			}
  		  },
  		  'accordion-up': {
  			from: {
  			  height: 'var(--radix-accordin-content-height)'
  			},
  			to: {
  			  height: '0'
  			}
  		  }
  		},
  		animation: {
  		  'accordion-down': 'accordion-down 0.2s ease-out',
  		  'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		borderRadius: {
  		  lg: 'var(--radius)',
  		  md: 'calc(var(--radius) - 2px)',
  		  sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
