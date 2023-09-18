import type { Config } from 'tailwindcss'

const config: Config = {
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
          /* Set up */
        'input'     : 'hsl(var(--input))',
        'ring'      : 'hsl(var(--ring))',
        'border'    : 'hsl(var(--border))',
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',

        'primary': {
          DEFAULT   : 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'secondary': {
          DEFAULT   : 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'destructive': {
          DEFAULT   : 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'muted': {
          DEFAULT   : 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT   : 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'popover': {
          DEFAULT   : 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'card': {
          DEFAULT   : 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        // Copi Copi
        'bglight'    : '#F9FAFB',
        'marrslight' : '#1C9A9A',
        'marrsgreen' : '#007A7A',
        'marrsdark'  : '#004D4D',
        'cardlight'  : '#EFF3F3',
        'bgdark'     : '#1D2A35',
        'carrilight' : '#57DCB4',
        'carrigreen' : '#05CE91',
        'carridark'  : '#00835B',
        'carddark'   : '#22323F',
        'textlight'  : '#F9FAFB',
        'pink-accent': '#a385b3',
        'gold'       : '#F6C177',
      },

      backgroundColor: {
        aqua  : '#00FFFF',
        silver: '#C0C0C0',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic' : 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      width: {
        '28': '4.375rem',
      },

      minHeight: {
        '15': '1.875rem',
      },
    },
    fontFamily: {
      dosis: ['Dosis', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
}

export default config
