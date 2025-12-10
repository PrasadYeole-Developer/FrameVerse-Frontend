import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Provider } from "../components/ui/provider";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/toaster";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrameVerse",
  description: "FrameVerse - Generate captions for your images using AI",
  icons: {
    icon: "/frameverselogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-[jost]! antialiased select-none`}>
        <Provider>
          <Toaster />
          {children}
        </Provider>
      </body>
    </html>
  );
}
