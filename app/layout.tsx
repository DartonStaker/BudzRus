import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BudzRus",
  description: "Premium flower, edibles, infused meals, art, fashion and experiences across Soweto, Marshalltown and Fourways.",
  icons: {
    icon: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

