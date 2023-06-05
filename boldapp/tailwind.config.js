/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logoPicture': "url('./src/res/network.png')"
      },
      colors: {
        royalBlue: '#4169E1',
        dodgerBlue: '#1E90FF',
        steelBlue: '#4682B4',
        cornflowerBlue: '#6495ED',
        skyBlue: '#87CEEB',
        babyBlue: '#89CFF0',
        navyBlue: '#000080',
        midnightBlue: '#191970',
        lightBlue: '#ADD8E6',
        turquoiseBlue: '#00CED1',
        trustBlue: '#4169E10',
        green: '#00AA88',
        orange: '#FFA500',
        lightBackground: '#F3F2F1',
        earthySand: '#D7BFA6',
        freshMint: '#81C3B6',
        vibrantCoral: ' #FF675C',
        darkVibrantCoral: '#e03d31',
        textColor: '#1b1b1b',
        lightSand: '#e8e6e3',
        lightMint: '#e8edec',
        gray: '#888a89'
      }
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
}

