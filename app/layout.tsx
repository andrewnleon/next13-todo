import Head from "next/head";
import "../styles/globals.css";
import Toolbar from "./components/Toolbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head>
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=320, height=device-height, target-densitydpi=medium-dpi" />
      </Head>
      <body>
        <Toolbar />
        {children}
      </body>
    </html>
  );
}