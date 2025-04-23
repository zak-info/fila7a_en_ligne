import { Inter } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';

import Provider from "@context/Auth";
import ToasterContext from '@context/ToasterContext';

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { GlobalContextProvider } from "@context/GlobalContext";
import GlobalLayout from "@components/dashboard/GlobalLayout";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Fila7a en ligne",
  description: "digital services",
};

export default async function RootLayout({ children, params }) {
  const locale = params.locale; 

  const session = await getServerSession(authOptions);

  const supportedLocales = ["en", "fr", "ar"];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@messages/${locale}.json`)).default;
  } catch (error) {
    console.error("Missing messages file for locale:", locale);
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>
        <main className="relative overflow-x-hidden font-arabic scroll-smooth hide-scrollbar">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Provider>
              <GlobalContextProvider>
                <ToasterContext />
                <GlobalLayout>
                  {children}
                </GlobalLayout>
              </GlobalContextProvider>
            </Provider>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
