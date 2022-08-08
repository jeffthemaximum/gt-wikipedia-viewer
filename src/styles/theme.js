const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
}

export const theme = {
  colors: {
    babyBlue: '#54CDFB',
    black: '#000000',
    brown: '#4F2D3A',
    darkPurple: '#0c0a1d',
    grey0: '#f5f5f5',
    grey1: '#516C91',
    navy: '#05256C',
    paleBlue: '#BBE1EE',
    red: '#F93C21',
    teal: '#1F9CA7',
    white: '#FFFFFF'
  },
  fonts: ['Roboto']

}
