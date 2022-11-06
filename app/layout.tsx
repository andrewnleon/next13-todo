import "../styles/globals.css";
import Toolbar from "./toolbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Toolbar />
        {children}
      </body>
    </html>
  );
}
