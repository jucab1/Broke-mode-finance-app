import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./toast.css";
import { PrototypeProvider } from "@/components/prototype-context";

export const metadata: Metadata = {
  title: "Broke Mode",
  description: "Make your money last longer without missing out on life.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body><PrototypeProvider>{children}</PrototypeProvider></body>
    </html>
  );
}
