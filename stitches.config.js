import { createStitches } from '@stitches/react';

export const {
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      red: '#E11B19',
      black: '#191C1F',
      black100: '#1F2327',
      gray: '#3C3C3C',
      white: '#FFFFFF',
      white100: '#F9F9F9',
    },
    radii: {
      sm: '2px',
      default: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      '2xl': '16px',
      '3xl': '20px',
      '4xl': '32px',
      circle: '50%',
      full: '9999px',
    },

    shadows: {
      //shadows
    },
  },
  media: {
    // inspired from https://tailwindcss.com/docs/breakpoints
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xlMax': '(min-width: 1440px)',
    '3xl': '(min-width: 1536px)',

    smMax: '(max-width: 639px)',
    mdMax: '(max-width: 767px)',
    lgMax: '(max-width: 1023px)',
    xlMax: '(max-width: 1279px)',
    '2xlMax': '(max-width: 1440px)',
    '3xlMax': '(max-width: 1536px)',
  },
  utils: {
    m: value => ({
      margin: value,
    }),
    mt: value => ({
      marginTop: value,
    }),
    mr: value => ({
      marginRight: value,
    }),
    mb: value => ({
      marginBottom: value,
    }),
    ml: value => ({
      marginLeft: value,
    }),
    mx: value => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: value => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: value => ({
      padding: value,
    }),
    pt: value => ({
      paddingTop: value,
    }),
    pr: value => ({
      paddingRight: value,
    }),
    pb: value => ({
      paddingBottom: value,
    }),
    pl: value => ({
      paddingLeft: value,
    }),
    px: value => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: value => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    w: value => ({
      width: value,
    }),
    h: value => ({
      height: value,
    }),
    fs: value => ({
      fontSize: `${value}px`,
    }),
    fw: value => ({
      fontWeight: value,
    }),
    lh: value => ({
      lineHeight: `${value}px`,
    }),
    size: value => ({
      width: value,
      height: value,
    }),
    linearGradient: value => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    radius: value => ({
      borderRadius: value,
    }),
    widthPercent: value => ({
      width: `${value}%`,
    }),
    heightPercent: value => ({
      height: `${value}%`,
    }),
    sizePercent: value => ({
      width: `${value}%`,
      height: `${value}%`,
    }),

    lineClamp: rows => ({
      display: '-webkit-box',
      '-webkit-line-clamp': rows,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    }),
  },
});
