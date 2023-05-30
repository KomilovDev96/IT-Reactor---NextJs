import MainProviders from '@/app/providers/MainProviders'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <MainProviders><Component {...pageProps} /></MainProviders>
}
