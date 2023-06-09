import localFont from 'next/font/local'

export const font = localFont({
  src: [
    {
      path: '../fonts/BwSurco-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/BwSurco-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../fonts/BwSurco-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-local'
})
