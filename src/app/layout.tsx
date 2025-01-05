"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import styles from "./layout.module.css";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <header>{header}</header>
          <main>
            <section className={styles.navigation}>{navigation}</section>
            <section className={styles.main_content}>{children}</section>
          </main>
          <footer>{footer}</footer>
        </QueryClientProvider>
      </body>
    </html>
  );
}
