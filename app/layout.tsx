import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BudzRus",
  description: "Premium flower, edibles, infused meals, art, fashion and experiences across Soweto, Marshalltown and Fourways.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

