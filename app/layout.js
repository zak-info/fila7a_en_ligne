import { Inter } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';

import Header from "@components/Accuille/Header";
import Provider from "../context/Auth";
import ToasterContext from '../context/ToasterContext'

import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { GlobalContextProvider } from "@context/GlobalContext";
import GlobalLayout from "@components/dashboard/GlobalLayout";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fila7a en ligne",
  description: "degital services",
  
};

export default async function RootLayout({ children }) {

  const session = await getServerSession(authOptions);



  return (
    <html  >
      <body className={inter.className}>
        <main className="relative    overflow-x-hidden  scroll-smooth hide-scrollbar ">
          <Provider>
            <GlobalContextProvider>
              <ToasterContext />
              <GlobalLayout>
                {children}
              </GlobalLayout>
            </GlobalContextProvider>
          </Provider>
        </main>
      </body>
    </html>
  );
}
