import mainTheme from "@themes/mainTheme"
import GlobalStyles from "@themes/global-styles"
import { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "styled-components"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <GlobalStyles />
        <ThemeProvider theme={mainTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  )
}
