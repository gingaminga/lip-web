import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/life-is-plan-logo-128.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                function getThemeMode() {
                  if (navigator.cookieEnabled) {
                    const theme = window.localStorage.getItem('theme');
                    return theme ? theme : 'dark';
                  }

                  return 'light';
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
