import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Barlow, sans-serif',
    fontVariantNumeric: 'normal',
    fontFeatureSettings: 'normal',
  },
  body: {
    // preventing the layout shift when the scrollbar disappears
    // 💡 not supported in all browsers https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter#browser_compatibility
    scrollbarGutter: 'stable',
    scrollBehavior: 'smooth',
  },
  a: {
    color: 'inherit !important',
    textDecoration: 'none !important',

    '&:hover': {
      color: 'inherit !important',
    },
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  p: {
    mb: '0 !important',
  },
  'ol, ul, dl': {
    mb: '0 !important',
  },
});
