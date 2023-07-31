import { FontMono, FontSans } from '@pedaki/common/styles/fonts';
import '@pedaki/common/styles/globals.css';
import '../styles/globals.css';
import '../styles/nextra.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-sans: ${FontSans.style.fontFamily};
            --font-mono: ${FontMono.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
