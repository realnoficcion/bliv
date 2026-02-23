import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLIV | Urban Mobility Redefined",
  description: "High-performance electric bikes for the modern professional.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
