import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tridhm Garg",
  description:
    "AI researcher, published author, and software developer. Flower Mound, Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
