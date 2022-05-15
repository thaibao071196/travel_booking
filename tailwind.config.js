module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ...theme('colors'),
        transparent: 'transparent',
        primary: '#5566ff',
        blue: 'rgba(29, 78, 216)',
        error: 'rgba(239, 68, 68)',
        royal: '#957e56',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.primary'),
      }),
      boxShadow: {
        DEFAULT: '0px 1px 3px rgb(3 0 71 / 9%)',
      },
      zIndex: {
        '-10': '-10',
        1000: '1000',
      },
      width: {
        // eslint-disable-next-line
        '120': '36rem',
        // eslint-disable-next-line
        '110': '30rem',
        '1/2-screen': '50vw',
        '1/4-screen': '25vw',
      },
      height: {
        // eslint-disable-next-line
        '120': '36rem',
        // eslint-disable-next-line
        '110': '30rem',
        '4/5-screen': '85vh',
        '1/2-screen': '50vh',
        '1/4-screen': '25vh',
      },
      minWidth: {
        10: '10rem',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/4-screen': '25vh',
        '1/2-screen': '50vh',
        '3/5-screen': '60vh',
        '3/4-screen': '75vh',
        '4/5-screen': '85vh',
        full: '100%',
      },
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/4-screen': '25vh',
        '1/2-screen': '50vh',
        '3/4-screen': '75vh',
        '4/5-screen': '85vh',
        '3/5-screen': '60vh',
        '7/10-screen': '70vh',
        full: '100%',
      },

      backgroundPosition: {
        'x-3/5': '60% 0',
      },
      borderWidth: {
        // eslint-disable-next-line
        '6': '6px',
      },
      fontFamily: {
        merriweather: 'Merriweather',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
