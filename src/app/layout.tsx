import Header from "./components/Header";
import Provider from "./components/Provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} h-full scroll-smooth antialiased`}>
      <body className="flex h-full flex-col">
        <Provider>
          <Header />
          <main className="grow">
            <section className="flex min-h-full overflow-hidden p-16 sm:py-28">{children}</section>
          </main>
        </Provider>
      </body>
    </html>
  );
}
