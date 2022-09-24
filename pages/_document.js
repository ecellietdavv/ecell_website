import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" strategy="beforeInteractive" />
                </body>
            </Html>
        );
    }
}

export default MyDocument;