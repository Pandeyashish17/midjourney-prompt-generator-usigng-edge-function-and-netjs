import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your midjourney prompts in seconds."
          />
          <meta
            property="og:site_name"
            content="https://midjourneyprompts.vercel.app/"
          />
          <meta
            property="og:description"
            content="Generate your midjourney prompts in seconds."
          />
          <meta property="og:title" content="Twitter Bio Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Twitter Bio Generator" />
          <meta
            name="twitter:description"
            content="Generate your midjourney prompts in seconds."
          />
          <meta
            property="og:image"
            content="https://www.linkpicture.com/q/Add-a-heading_24.png"
          />
          <meta
            name="twitter:image"
            content="https://www.linkpicture.com/q/Add-a-heading_24.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
