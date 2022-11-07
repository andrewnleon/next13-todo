import "../styles/globals.css";
import Toolbar from "./(components)/Toolbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Toolbar />
        {children}
      </body>
    </html>
  );
}
