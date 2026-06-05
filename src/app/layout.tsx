import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Analytics } from "@/components/analytics/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { CartProvider } from "@/lib/cart";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { orgSchema } from "@/lib/seo";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Default to NOT indexable (private preview). Set NEXT_PUBLIC_NOINDEX="false"
// at public launch to allow search engines.
const allowIndexing = process.env.NEXT_PUBLIC_NOINDEX === "false";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  robots: allowIndexing
    ? undefined
    : { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  title: {
    default: `${site.name} — Testosterone Therapy & Men's Health, Online`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "TRT",
    "testosterone replacement therapy",
    "men's health",
    "telehealth",
    "ED treatment",
    "weight loss",
    "peptides",
    "online doctor",
  ],
  openGraph: {
    title: `${site.name} — Men's Health & Vitality`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/brand/trt-boost-logo-tagline.png", width: 1600, height: 928 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Men's Health & Vitality`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <JsonLd data={orgSchema()} />
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
