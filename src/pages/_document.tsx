import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function getThemeMode() {
                const theme = window.localStorage.getItem('theme')
                return theme ? theme : 'dark'
              }

              document.documentElement.setAttribute("data-theme", getThemeMode());
            `, // html을 처리하기 위함
          }}
        />
      </Head>
      <body>
        <Main />
        <div id="modal" />
        <NextScript />
      </body>
    </Html>
  );
}
