import { globalStyles } from 'styles/global';
import 'modern-normalize/modern-normalize.css';

function MyApp({ Component, pageProps }) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
