import { AppProps } from 'next/app'
import '../src/components/myStyles.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}