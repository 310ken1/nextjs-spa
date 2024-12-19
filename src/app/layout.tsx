import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
  header,
  navigation,
  footer,
}: {
  children: ReactNode;
  header: ReactNode;
  navigation: ReactNode;
  footer: ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header>{header}</header>
        <div className="content">
          <aside className="navigation">{navigation}</aside>
          <main>{children}</main>
        </div>
        <footer>{footer}</footer>
      </body>
    </html>
  );
}
