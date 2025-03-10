// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Rethink Sans Variable',
          'Rethink Sans',
          ...fontFamily.sans,
        ],
      },
      colors: {
        default: {
          DEFAULT: '#2D2D2D',
          soft: '#696969',
          strong: '#000000',
        },
        primary: {
          DEFAULT: '#00AC8A',
          soft: '#E9F2E1',
          accent: '#CDDDC0',
          medium: '#A1B58F',
          strong: '#115E59',
        },
        muted: {
          DEFAULT: '#F2F4F6',
          soft: '#F9FAFB',
          strong: '#E5E7EB',
        },
        success: {
          DEFAULT: '#34D399',
          soft: '#E3FCEF',
          strong: '#047857',
        },
        warning: {
          DEFAULT: '#FBBF24',
          soft: '#FFFAEB',
          strong: '#A16207',
        },
        danger: {
          DEFAULT: '#EF4444',
          soft: '#FEF2F2',
          strong: '#7F1D1D',
        },
        info: {
          DEFAULT: '#3B82F6',
          soft: '#EFF6FF',
          strong: '#1E40AF',
        },
      },
    },
  },
  plugins: [],
  
};