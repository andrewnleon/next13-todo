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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <body>
        <Toolbar />
        {children}
      </body>
    </html>
  );
}