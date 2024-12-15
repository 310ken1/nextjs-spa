import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  header,
  navigation,
  main,
  footer,
}: {
  header: ReactNode;
  navigation: ReactNode;
  main: React.ReactNode;
  footer: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header>{header}</header>
        <div className="content">
          <aside className="navigation">{navigation}</aside>
          <main>{main}</main>
        </div>
        <footer>{footer}</footer>
      </body>
    </html>
  );
}
