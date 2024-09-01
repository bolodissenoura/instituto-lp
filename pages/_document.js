import Document, { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "../components/google-analytics";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />

          <title>Instituto Marques Moraes</title>

          <meta name="title" content="Instituto Marques Moraes" />
          <meta
            name="description"
            content="Instituto Educacional Marques Moraes"
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://i.ibb.co/mGNhJBG/Hero-3.png"
          />
          <meta property="og:title" content="Instituto Marques Moraes" />
          <meta
            property="og:description"
            content="Instituto Educacional Marques Moraes"
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/mGNhJBG/Hero-3.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://i.ibb.co/mGNhJBG/Hero-3.png"
          />
          <meta property="twitter:title" content="Instituto Marques Moraes" />
          <meta
            property="twitter:description"
            content="Instituto Educacional Marques Moraes"
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/mGNhJBG/Hero-3.png"
          />
        </Head>
        <body>
          <GoogleAnalytics />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
