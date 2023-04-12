import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=The+Nautigal&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&family=The+Nautigal&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <script
          async
          type="text/javascript"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="oscarreyes"
          data-color="#BD5FFF"
          data-emoji="🍵"
          data-font="Cookie"
          data-text="Buy me a mint te"
          data-outline-color="#000000"
          data-font-color="#ffffff"
          data-coffee-color="#FFDD00"
        />
      </Html>
    );
  }
}

export default MyDocument;
