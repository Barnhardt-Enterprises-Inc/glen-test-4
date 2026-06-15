import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudNine — Sustainable Coffee Roastery",
  description:
    "CloudNine sources and roasts seasonal single-origin coffees with a focus on sustainability, transparency, and exceptional flavour.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
