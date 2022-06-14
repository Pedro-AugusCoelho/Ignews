import { AppProps } from '../../node_modules/next/app';
import { Header } from '../components/Header/index';
import '../styles/global.scss';
import {SessionProvider as NextAuthProvider } from 'next-auth/react';
import { PrismicProvider } from '@prismicio/react';
import { repositoryName } from '../services/prismic';
import Link from 'next/link';
import { PrismicPreview } from '@prismicio/next';


function MyApp({ Component, pageProps }:AppProps) {
  return(
    <NextAuthProvider session={pageProps.session}>
        <Header />
        <PrismicProvider
          internalLinkComponent={({ href, children, ...props }) => (
            <Link href={href}>
              <a {...props}>
                {children}
              </a>
            </Link>
          )}
        >

        <PrismicPreview repositoryName={repositoryName}>
          <Component {...pageProps} />
        </PrismicPreview>

      </PrismicProvider>
    
    </NextAuthProvider>
  ) 
}

export default MyApp;
