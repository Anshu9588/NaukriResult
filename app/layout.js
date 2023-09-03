import "./globals.css";
import Footer from "@/components/UI/Footer";
import Navigation from "@/components/UI/Navigation";
import Script from "next/script";
export const metadata = {
  metadataBase: new URL("https://www.naukriresult.co"),
  robots: "index,follow",
};
export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="adsnse"
          async
          crossOrigin="anonymous"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5767837172718165"
        />
      </head>
      <body>
        <Navigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
