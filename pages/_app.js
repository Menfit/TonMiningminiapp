import { TelegramWebApp } from '@twa-dev/sdk';
   import { useEffect } from 'react';

   export default function App({ Component, pageProps }) {
     useEffect(() => {
       TelegramWebApp.ready();
     }, []);

     return <Component {...pageProps} />;
   }
