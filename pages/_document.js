import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>프론트엔드 개발자 박주희</title>
        <meta
          name="description"
          content="프론트엔드 개발자 박주희 포트폴리오"
        />
      </Head>
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
