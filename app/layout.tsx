import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: `${site.brand} — ${site.tagline}`,
  description: site.manifest[0],
  metadataBase: new URL("https://nordrisenettsider.no"),
  openGraph: {
    title: site.brand,
    description: site.tagline,
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-ink text-bone selection:bg-bone selection:text-ink-deep">
        {children}
      </body>
    </html>
  );
}
