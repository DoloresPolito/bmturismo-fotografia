import "./globals.css";
import { Inter } from "next/font/google";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-inter",
});

export const metadata = {
  title: "BELEN MIGUENS",
  description: "FOTOGRAFIA",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  const t = useTranslations();
  return (
    <html lang={locale}>
      <head>
        <title>Belen Miguens</title>
      </head>

      <body className={` ${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
