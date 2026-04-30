import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "wired.entry.neocities",
  icons: {
    icon: "/favico/Lain-Knights.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
