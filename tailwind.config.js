/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      brandPrimary: '#fe5f55',
      brandSecondary: '#68a6a8',
      brandTertiary: '#eef5db',
      brandOrange: '#e1a656',
      mainGray: '#d1d1d1',
      brandSurface: '#f6f6f6',
      bittersweet: {
        '50': '#fff2f1',
        '100': '#ffe3e1',
        '200': '#ffcbc8',
        '300': '#ffa7a1',
        '400': '#fe5f55',
        '500': '#f7473c',
        '600': '#e42a1e',
        '700': '#c01f15',
        '800': '#9f1d15',
        '900': '#831f19',
        '950': '#480b07'
      },
      frost: {
        '50': '#f6faeb',
        '100': '#eef5db',
        '200': '#d7e8ae',
        '300': '#bcd87e',
        '400': '#a1c655',
        '500': '#84ab37',
        '600': '#668828',
        '700': '#4e6823',
        '800': '#405321',
        '900': '#374720',
        '950': '#1c270c'
      },
      jetStream: {
        '50': '#f3f8f7',
        '100': '#dfeeed',
        '200': '#b8d8d8',
        '300': '#99c6c7',
        '400': '#68a6a8',
        '500': '#4d8b8d',
        '600': '#437277',
        '700': '#3b5f63',
        '800': '#365054',
        '900': '#314448',
        '950': '#1d2c2f'
      },
      porsche: {
        '50': '#fdf9ef',
        '100': '#f9f0db',
        '200': '#f3deb5',
        '300': '#eac687',
        '400': '#e1a656',
        '500': '#da8e35',
        '600': '#cc762a',
        '700': '#a95c25',
        '800': '#874925',
        '900': '#6e3e20',
        '950': '#3b1f0f'
      },
      boulder: {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#7c7c7c',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#262626'
      }
    },
    fontSize: {
      sm: '1rem',
      base: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4.5rem'
    },
    fontFamily: {
      body: ['Afacad', 'sans-serif'],
      heading1: ['Kalnia'],
      heading2: ['Oswald']
    },
    extend: {
      boxShadow: {
        'shadow-1': '0px 1px 4px 0px rgba(12,12,13,0.05)',
        'shadow-2': '0px 1px 4px 0px rgba(12,12,13,0.05), 0px 1px 4px 0px rgba(12,12,13,0.1)',
        'shadow-3': '0px 4px 4px -1px rgba(12,12,13,0.05), 0px 4px 4px -1px rgba(12,12,13,0.1)'
      },
      borderRadius: {
        'rounded-0': '0rem',
        'rounded-1': '0.1111111111111111rem',
        'rounded-2': '0.2777777777777778rem',
        'rounded-3': '0.4444444444444444rem'
      }
    }
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/forms')
  ]
};
